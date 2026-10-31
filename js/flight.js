// ============================================================
//  flight.js — 相机调度：平滑飞行（贝塞尔路径 + 缓动）、跟随天体、
//              自由环视（OrbitControls 封装）
// ============================================================

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export class FlightController {
  constructor(camera, dom) {
    this.camera = camera;
    this.controls = new OrbitControls(camera, dom);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.rotateSpeed = 0.55;
    this.controls.zoomSpeed = 0.9;
    this.controls.panSpeed = 0.5;
    this.controls.minDistance = 3;
    this.controls.maxDistance = 26000;

    this.followBody = null;
    this._lastFollow = new THREE.Vector3();
    this._flight = null;
    this.onFlightDone = null;
    this.autoOrbit = { on: false, speed: 0.10 };   // 天象观景位自动环绕
    this._up = new THREE.Vector3(0, 1, 0);
  }

  setAutoOrbit(on) { this.autoOrbit.on = on; }

  // 自动环绕：非飞行状态下绕观察点缓慢公转
  _applyAutoOrbit(dt) {
    if (!this.autoOrbit.on || this._flight) return;
    const offset = this.camera.position.clone().sub(this.controls.target);
    const r = offset.length();
    if (r < 1e-4) return;
    const ang = this.autoOrbit.speed * dt;
    const c = Math.cos(ang), s = Math.sin(ang);
    const up = this._up;
    const rotated = offset.clone()
      .multiplyScalar(c)
      .add(up.clone().cross(offset).multiplyScalar(s))
      .add(up.clone().multiplyScalar(up.dot(offset) * (1 - c)));
    this.camera.position.copy(this.controls.target).add(rotated);
    this.camera.lookAt(this.controls.target);
  }

  get isFlying() { return !!this._flight; }

  // 一次性相机飞行：pos/target 都做平滑插值，路径带一点弧度
  flyTo({ camPos, target, duration = 3.2, onDone, arc = 0.25 }) {
    const p0 = this.camera.position.clone();
    const t0 = this.controls.target.clone();
    const p1 = camPos.clone();
    const t1 = target.clone();

    // 弧线控制点：中点抬高（沿相机-目标平面法线方向）
    const mid = p0.clone().add(p1).multiplyScalar(0.5);
    const dir = p1.clone().sub(p0);
    const dist = dir.length() || 1;
    const side = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
    if (side.lengthSq() < 0.1) side.set(0, 1, 0);
    const ctrl = mid.add(side.multiplyScalar(dist * arc * (Math.random() < 0.5 ? 1 : -1)))
                     .add(new THREE.Vector3(0, dist * arc * 0.6, 0));

    this._flight = { p0, t0, p1, t1, ctrl, dur: duration, t: 0 };
    this.controls.enabled = false;
    this.onFlightDone = onDone || null;
  }

  cancelFlight() {
    if (!this._flight) return;
    this._flight = null;
    this.controls.enabled = true;
  }

  follow(bodyEntry) {
    this.followBody = bodyEntry || null;
    if (bodyEntry) this._lastFollow.copy(bodyEntry.worldPos);
  }

  update(dt) {
    if (this._flight) {
      const f = this._flight;
      f.t = Math.min(1, f.t + dt / f.dur);
      const e = easeInOut(f.t);

      // 二次贝塞尔
      const a = f.p0.clone().lerp(f.ctrl, e);
      const b = f.ctrl.clone().lerp(f.p1, e);
      this.camera.position.copy(a.lerp(b, e));
      const target = f.t0.clone().lerp(f.t1, e);
      this.camera.lookAt(target);
      this.controls.target.copy(target);

      if (f.t >= 1) {
        this._flight = null;
        this.controls.enabled = true;
        if (this.onFlightDone) { const cb = this.onFlightDone; this.onFlightDone = null; cb(); }
      }
    } else {
      // 跟随：把相机和观察点一起搬进天体当前位置
      if (this.followBody) {
        const delta = this.followBody.worldPos.clone().sub(this._lastFollow);
        this.camera.position.add(delta);
        this.controls.target.add(delta);
        this._lastFollow.copy(this.followBody.worldPos);
      }
      this.controls.update();
      this._applyAutoOrbit(dt);
    }
  }

  setTarget(v) { this.controls.target.copy(v); }
  setRange(min, max) { this.controls.minDistance = min; this.controls.maxDistance = max; }
}
