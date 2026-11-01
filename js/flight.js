// ============================================================
//  flight.js — 相机装备（rig）：目标点 + 视高 + yaw/pitch
//  照参考站 solar-system-atlas 的相机模型：
//    · 相机永远绕 target 转，yaw/pitch 决定方位（俯仰决定"金字塔"张角）
//    · 缩放不是推镜头，而是改"可视高度 viewHeight"（正交式推拉，无畸变）
//    · 滚轮：viewHeight *= exp(deltaY × 0.0011)，范围 0.45 ~ 1520
//  这样总览构图与参考站逐像素一致，特写又能自然贴合。
// ============================================================

import * as THREE from 'three';

const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const easeOutQuint = t => 1 - Math.pow(1 - t, 5);

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export class FlightController {
  constructor(camera, dom) {
    this.camera = camera;
    this.dom = dom;

    // —— rig 状态（当前值 / 目标值，逐帧阻尼逼近）——
    this.target = new THREE.Vector3(0, 0, 0);
    this.viewHeight = 128;
    this.yaw = 0;
    this.pitch = 0.03;

    this._tTarget = this.target.clone();
    this._tViewHeight = this.viewHeight;
    this._tYaw = this.yaw;
    this._tPitch = this.pitch;

    this.viewHeightRange = [0.45, 1520];   // 对应参考站 clamp(.45, 1520)
    this.followBody = null;
    this._lastFollow = new THREE.Vector3();

    this._flight = null;      // {from, to, dur, t, easing}
    this.onFlightDone = null;

    this._drag = null;        // 拖拽状态
    this._vel = { yaw: 0, pitch: 0 };
    this.autoOrbit = { on: false, speed: 0.10 };
    this._zoomTouched = 0;    // 最近一次缩放时刻（俯仰联动用）

    this._bind();
  }

  // ---------- 数学：由 rig 求相机位姿 ----------
  get _dist() {
    const fov = this.camera.fov * Math.PI / 180;
    return this.viewHeight / (2 * Math.tan(fov / 2));
  }
  _applyCamera() {
    const d = this._dist;
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    this.camera.position.set(
      this.target.x + Math.sin(this.yaw) * cp * d,
      this.target.y + sp * d,
      this.target.z + Math.cos(this.yaw) * cp * d);
    this.camera.lookAt(this.target);
  }

  // 由世界坐标反解 rig（给 flyTo 用，兼容旧调用）
  _poseFrom(camPos, target) {
    const off = camPos.clone().sub(target);
    const d = off.length() || 1e-3;
    const vh = 2 * d * Math.tan(this.camera.fov * Math.PI / 360);
    return {
      target: target.clone(),
      viewHeight: vh,
      yaw: Math.atan2(off.x, off.z),
      pitch: Math.asin(clamp(off.y / d, -1, 1)),
    };
  }

  // ---------- 输入 ----------
  _bind() {
    const dom = this.dom;

    dom.addEventListener('pointerdown', e => {
      if (this._flight) this.cancelFlight();
      this._drag = { x: e.clientX, y: e.clientY, id: e.pointerId };
      this._vel.yaw = 0; this._vel.pitch = 0;
      dom.setPointerCapture?.(e.pointerId);
      dom.style.cursor = 'grabbing';
    });

    dom.addEventListener('pointermove', e => {
      if (!this._drag || e.pointerId !== this._drag.id) return;
      const dx = e.clientX - this._drag.x;
      const dy = e.clientY - this._drag.y;
      this._drag.x = e.clientX;
      this._drag.y = e.clientY;
      // 与参考站同向：横向拖 → 绕 y 轴；纵向拖 → 抬/压俯仰
      const k = 0.0024;
      this._tYaw += dx * k;
      this._tPitch = clamp(this._tPitch + dy * k, -1.35, 1.35);
      this._vel.yaw = dx * k;
      this._vel.pitch = dy * k;
      this.yaw = this._tYaw; this.pitch = this._tPitch;   // 拖拽零延迟
    });

    const end = e => {
      if (!this._drag) return;
      this._drag = null;
      dom.style.cursor = 'none';
      // 惯性：松手后按速度滑一段
      this._tYaw += this._vel.yaw * 6;
      this._tPitch = clamp(this._tPitch + this._vel.pitch * 6, -1.35, 1.35);
      this._vel.yaw = 0; this._vel.pitch = 0;
    };
    dom.addEventListener('pointerup', end);
    dom.addEventListener('pointercancel', end);

    window.addEventListener('wheel', e => {
      if (e.target.closest && e.target.closest('.pc-sec, #planetCard, #eventsPanel, #constPanel, #planetRail, #timebar')) return;
      e.preventDefault();
      if (this._flight) this.cancelFlight();
      const dy = clamp(e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1), -180, 180);
      // 参考站原式：viewHeight *= exp(deltaY × 0.0011)
      this._tViewHeight = clamp(this._tViewHeight * Math.exp(dy * 0.0011), ...this.viewHeightRange);
      this._zoomTouched = performance.now();
    }, { passive: false });
  }

  // ---------- 相机飞行 ----------
  flyTo({ camPos, target, duration = 2.4, onDone, arc = 0, easing = easeInOut }) {
    const to = this._poseFrom(camPos, target || this.target);
    this._flight = {
      from: { target: this.target.clone(), viewHeight: this.viewHeight, yaw: this.yaw, pitch: this.pitch },
      to, dur: Math.max(duration, 0.05), t: 0, easing,
    };
    this.onFlightDone = onDone || null;
  }

  cancelFlight() {
    if (!this._flight) return;
    this._flight = null;
  }

  get isFlying() { return !!this._flight; }

  follow(bodyEntry) {
    this.followBody = bodyEntry || null;
    if (bodyEntry) this._lastFollow.copy(bodyEntry.worldPos);
  }
  setTarget(v) { this.target.copy(v); this._tTarget.copy(v); }
  setRange(min, max) {
    // 兼容旧 API：传入相机距离，换算成可视高度
    const t = 2 * Math.tan(this.camera.fov * Math.PI / 360);
    this.viewHeightRange = [Math.max(0.02, min * t), max * t];
  }
  setAutoOrbit(on) { this.autoOrbit.on = on; }
  setAutoOrbitSpeed(v) { this.autoOrbit.speed = v; }

  // ---------- 每帧 ----------
  update(dt) {
    if (this._flight) {
      const f = this._flight;
      f.t = Math.min(1, f.t + dt / f.dur);
      const e = f.easing ? f.easing(f.t) : easeInOut(f.t);

      this.target.lerpVectors(f.from.target, f.to.target, e);
      this.viewHeight = Math.exp(
        Math.log(f.from.viewHeight) * (1 - e) + Math.log(f.to.viewHeight) * e);   // 视高按对数插值
      const dy = Math.atan2(Math.sin(f.to.yaw - f.from.yaw), Math.cos(f.to.yaw - f.from.yaw));
      this.yaw = f.from.yaw + dy * e;
      this.pitch = f.from.pitch + (f.to.pitch - f.from.pitch) * e;
      this._syncTargets();

      if (f.t >= 1) {
        this._flight = null;
        if (this.onFlightDone) { const cb = this.onFlightDone; this.onFlightDone = null; cb(); }
      }
    } else {
      // 跟随天体：把 target 一起搬过去
      if (this.followBody) {
        const delta = this.followBody.worldPos.clone().sub(this._lastFollow);
        this.target.add(delta);
        this._tTarget.add(delta);
        this._lastFollow.copy(this.followBody.worldPos);
      }
      // 自动环绕
      if (this.autoOrbit.on && !this._drag) {
        this._tYaw += this.autoOrbit.speed * dt;
      }
      // 阻尼逼近
      const k = 1 - Math.pow(0.0016, dt);
      this.target.lerp(this._tTarget, k);
      this.yaw += (this._tYaw - this.yaw) * k;
      this.pitch += (this._tPitch - this.pitch) * k;
      this.viewHeight = Math.exp(
        Math.log(this.viewHeight) * (1 - k) + Math.log(this._tViewHeight) * k);
    }
    this._applyCamera();
  }

  _syncTargets() {
    this._tTarget.copy(this.target);
    this._tViewHeight = this.viewHeight;
    this._tYaw = this.yaw;
    this._tPitch = this.pitch;
  }

  // 缩放联动俯仰：放大（视高变小）→ 压向黄道面；缩小 → 抬高俯视
  // 默认机位（viewHeight≈128）恰好在 0.03 rad，与参考站基本一致
  applyPitchLink(baseVH = 128) {
    if (this._drag || this._flight) return;
    if (performance.now() - this._zoomTouched > 2200) return;
    const vh = clamp(this._tViewHeight, 1, 4000);
    const t = clamp(Math.log(vh / baseVH) / Math.log(4000 / baseVH), 0, 1);
    // 总览 0.03 → 拉远 0.65（≈37°）；放大则压到 0（完全贴黄道面）
    this._tPitch = t > 0 ? 0.03 + t * 0.62 : 0.03 * clamp(vh / baseVH, 0, 1);
  }
}
