// ============================================================
//  solar.js — 太阳系本体：太阳、八大行星、月球、轨道、小行星带、
//             日/月食地影锥、天体注册表
// ============================================================

import * as THREE from 'three';
import { PLANETS, SUN_INFO, MOON_INFO, MOONS, AU } from './data.js?v=38';
import { planetPosition, moonPosition, jdToCenturies, planetOrbitPoints } from './astro.js?v=38';
import { makePlanetTexture, addCraters, makeCloudTexture, makeRingTexture, makeGlowSprite, makeSunTexture } from './textures.js?v=38';

export const SUN_RADIUS = 13;

function tex(cv) {
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export class SolarSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.bodies = new Map();      // id → { mesh, group, info, displayR, worldPos:Vector3 }

    this._buildLights();
    this._buildSun();
    for (const p of PLANETS) this._buildPlanet(p);
    this._buildBelt();
    this._buildShadowCones();
  }

  _register(id, mesh, info, displayR, parent) {
    const holder = new THREE.Group();
    holder.add(mesh);
    (parent || this.group).add(holder);
    const entry = { id, mesh, holder, info, displayR, worldPos: new THREE.Vector3() };
    this.bodies.set(id, entry);
    return entry;
  }

  _buildLights() {
    this.sunLight = new THREE.PointLight(0xfff1dc, 2.6, 0, 0);
    this.group.add(this.sunLight);
    this.group.add(new THREE.AmbientLight(0x33383f, 0.55));
    // 相机补光：给逆光暗面一点轮廓（月食剪影/行星特写夜面）
    this.camLight = new THREE.PointLight(0xf2ede2, 0.22, 0, 0);
    this.scene.add(this.camLight);
  }

  _buildSun() {
    const geo = new THREE.SphereGeometry(SUN_RADIUS, 64, 32);
    const mat = new THREE.MeshBasicMaterial({ map: tex(makeSunTexture()) });
    mat.color = new THREE.Color(1.6, 1.35, 1.05);   // 提亮喂给 Bloom
    this._register('sun', new THREE.Mesh(geo, mat), { ...SUN_INFO, type: 'star' }, SUN_RADIUS);

    const glow1 = this._glow1 = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(makeGlowSprite('rgba(255,190,90,0.95)', 'rgba(255,120,30,0.35)')),
      blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow1.scale.setScalar(SUN_RADIUS * 6);
    const glow2 = this._glow2 = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(makeGlowSprite('rgba(255,150,60,0.30)', 'rgba(255,90,20,0.10)')),
      blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow2.scale.setScalar(SUN_RADIUS * 18);
    this.bodies.get('sun').holder.add(glow1, glow2);
  }

  _buildPlanet(p) {
    let cv = makePlanetTexture(p.type, 7 + p.id.length * 3);
    if (p.type === 'rocky' || p.type === 'moon') addCraters(cv, p.type === 'moon' ? 220 : 140);
    const mat = new THREE.MeshStandardMaterial({ map: tex(cv), roughness: 0.94, metalness: 0.02 });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(p.displayR, 48, 32), mat);
    const entry = this._register(p.id, mesh, p, p.displayR);
    entry.spin = p.spin;
    entry.moons = (MOONS[p.id] || []).map((md, i) => {
      const mcv = makePlanetTexture('moon', 30 + i * 11); addCraters(mcv, 60);
      const mMesh = new THREE.Mesh(
        new THREE.SphereGeometry(md.r, 24, 16),
        new THREE.MeshStandardMaterial({ map: tex(mcv), roughness: 0.97 }));
      this.get(p.id).holder.add(mMesh);     // 挂在 holder：跟随公转位置但不随自转
      return { mesh: mMesh, orbitR: md.orbit, period: md.period, phase: i * 2.1, incl: md.incl ?? 0.05 };
    });

    if (p.id === 'earth') {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(p.displayR * 1.018, 48, 32),
        new THREE.MeshStandardMaterial({ map: tex(makeCloudTexture()), transparent: true, depthWrite: false, roughness: 1 }));
      mesh.add(clouds);
      entry.clouds = clouds;
    }
    if (p.ring) {
      const inner = p.displayR * 1.30, outer = p.displayR * 2.35;
      const geo = new THREE.RingGeometry(inner, outer, 128, 1);
      // 让 UV.x 沿半径展开
      const pos = geo.attributes.position, uv = geo.attributes.uv;
      const v3 = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i);
        const t = (v3.length() - inner) / (outer - inner);
        uv.setXY(i, t, 0.5);
      }
      const ring = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        map: tex(makeRingTexture()), side: THREE.DoubleSide, transparent: true, depthWrite: false }));
      ring.rotation.x = Math.PI / 2 - 0.47;   // 土星环倾角
      mesh.add(ring);
      entry.ring = ring;
    }

    // 轨道线：按当前历元要素采样真实椭圆
    const pts = planetOrbitPoints(p.id, jdToCenturies(2451545.0), 256).map(
      p3 => new THREE.Vector3(p3[0], p3[1], p3[2]));
    const orbitGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const orbit = new THREE.LineLoop(orbitGeo, new THREE.LineBasicMaterial({
      color: 0x9a8a68, transparent: true, opacity: 0.32 }));
    this.group.add(orbit);
    entry.orbit = orbit;
  }

  _buildBelt() {
    // 主环：软圆点粒子，环带密度中间密、内外渐稀，颜色深浅不一
    const N = 9000;
    const pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
    const c = new THREE.Color();
    for (let i = 0; i < N; i++) {
      const t = Math.random();
      const a = 2.06 + 1.32 * (t * 0.7 + Math.random() * 0.3);         // 中段更密
      const edge = 1 - Math.abs(t - 0.5) * 2;                          // 边缘渐稀
      if (Math.random() > 0.25 + edge * 0.75) { i--; continue; }
      const ang = Math.random() * Math.PI * 2;
      const rr = a * AU * (0.97 + Math.random() * 0.06);
      pos[i * 3] = Math.cos(ang) * rr;
      pos[i * 3 + 1] = (Math.random() - 0.5) * (Math.random() ** 2) * 11;
      pos[i * 3 + 2] = -Math.sin(ang) * rr;
      c.setHSL(0.08 + Math.random() * 0.04, 0.22 + Math.random() * 0.2, 0.28 + Math.random() * 0.45);
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.belt = new THREE.Points(geo, new THREE.PointsMaterial({
      map: new THREE.CanvasTexture(makeGlowSprite('rgba(255,255,255,1)', 'rgba(255,255,255,0.4)')),
      color: 0xffffff, size: 1.5, sizeAttenuation: true, transparent: true, opacity: 0.85,
      vertexColors: true, depthWrite: false }));
    this.group.add(this.belt);

    // 黄道微尘带：横贯画面的弥散光尘（参考站的白色微尘层）
    const M = 5200;
    const dpos = new Float32Array(M * 3), dcol = new Float32Array(M * 3);
    for (let i = 0; i < M; i++) {
      const a = 0.7 + Math.random() * 9;
      const ang = Math.random() * Math.PI * 2;
      const rr = a * AU;
      dpos[i * 3] = Math.cos(ang) * rr;
      dpos[i * 3 + 1] = (Math.random() - 0.5) * (Math.random() ** 2) * 60;
      dpos[i * 3 + 2] = -Math.sin(ang) * rr;
      const b = 0.25 + Math.random() * 0.55;
      dcol[i * 3] = b; dcol[i * 3 + 1] = b * 0.96; dcol[i * 3 + 2] = b * 0.88;
    }
    const dgeo = new THREE.BufferGeometry();
    dgeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
    dgeo.setAttribute('color', new THREE.BufferAttribute(dcol, 3));
    this.dust = new THREE.Points(dgeo, new THREE.PointsMaterial({
      map: new THREE.CanvasTexture(makeGlowSprite('rgba(255,255,255,1)', 'rgba(255,255,255,0.35)')),
      size: 2.2, sizeAttenuation: true, transparent: true, opacity: 0.5,
      vertexColors: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.group.add(this.dust);
  }

  _buildShadowCones() {
    const mkCone = (len, r1, r2, color, opacity) => {
      // r1=天体处半径(粗端, y=0)，r2=末端半径；锥体沿 -y 延伸
      const geo = new THREE.CylinderGeometry(r1, r2, len, 32, 1, true);
      geo.translate(0, -len / 2, 0);
      const mat = new THREE.MeshBasicMaterial({
        color, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false, blending: THREE.NormalBlending });
      const m = new THREE.Mesh(geo, mat);
      m.visible = false;
      return m;
    };
    this.earthUmbra = mkCone(70, 3.4, 1.9, 0x362014, 0.42);
    this.earthPenumbra = mkCone(110, 4.6, 4.6, 0x241610, 0.20);
    this.moonUmbra = mkCone(30, 1.0, 0.5, 0x241a1e, 0.50);
    // 日食时月球本影投在地球表面的暗斑
    this.shadowSpot = new THREE.Mesh(
      new THREE.CircleGeometry(0.42, 32),
      new THREE.MeshBasicMaterial({ color: 0x060403, transparent: true, opacity: 0.72, depthWrite: false }));
    this.shadowSpot.visible = false;
    this.forceMoonOnAxis = false;
    this.group.add(this.shadowSpot);
    this.group.add(this.earthUmbra, this.earthPenumbra, this.moonUmbra);
  }

  setEclipseShadows(mode) {   // 'lunar' | 'solar' | null
    this.earthUmbra.visible = mode === 'lunar';
    this.earthPenumbra.visible = mode === 'lunar';
    this.shadowSpot.visible = mode === 'solar';
    this.forceMoonOnAxis = mode === 'solar';
    this.moonUmbra.visible = mode === 'solar';
  }

  // 深空模式收起轨道线与小行星带，只留星野
  setOrbitsVisible(v) {
    for (const b of this.bodies.values()) {
      if (b.orbit) b.orbit.visible = v;
    }
    this.belt.visible = v;
  }

  update(jd, simSpeed, camera) {
    const T = jdToCenturies(jd);

    // 太阳辉光近距离衰减（防止特写时橙雾糊屏）
    const dSun = camera ? camera.position.length() : 1e9;
    const sun = this.bodies.get('sun');
    if (this._glow1) {
      this._glow1.material.opacity = Math.min(1, dSun / 500) * 0.95;
      this._glow2.material.opacity = Math.min(1, dSun / 2400) * 0.9;
    }

    // 行星 LOD：远景放大看得见，特写恢复真实比例
    const k = Math.min(1, Math.max(0, (dSun - 500) / 2100));
    const s = 1 + 5 * k * k * (3 - 2 * k);

    for (const p of PLANETS) {
      const { pos } = planetPosition(p.id, T);
      const entry = this.bodies.get(p.id);
      entry.holder.position.set(pos[0], pos[1], pos[2]);
      entry.holder.scale.setScalar(s);
      entry.worldPos.copy(entry.holder.position);
      if (entry.spin) entry.mesh.rotation.y += entry.spin * simSpeed * 0.02;
      if (entry.clouds) entry.clouds.rotation.y += simSpeed * 0.0008;
      // 卫星公转（局部坐标，随 holder 一起缩放）
      for (const mo of entry.moons || []) {
        const ang = (jd / mo.period) * Math.PI * 2 + mo.phase;
        mo.mesh.position.set(Math.cos(ang) * mo.orbitR, Math.sin(ang * 0.9) * mo.orbitR * mo.incl, -Math.sin(ang) * mo.orbitR);
      }
    }

    const earth = this.bodies.get('earth');
    const m = moonPosition(T);
    const moonEntry = this.bodies.get('moon');
    if (!moonEntry) {
      const cv = makePlanetTexture('moon', 11); addCraters(cv, 110);
      const mmat = new THREE.MeshStandardMaterial({ map: tex(cv), roughness: 0.96, emissiveMap: tex(cv), emissive: new THREE.Color(0, 0, 0) });
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(1.15, 40, 28), mmat);
      this._register('moon', mesh, MOON_INFO, 1.15, this.get('earth').holder);
    }
    const me = this.bodies.get('moon');
    me.holder.position.set(m.pos[0], m.pos[1], m.pos[2]);   // 局部于地球 holder
    earth.holder.updateWorldMatrix(true, true);
    me.holder.getWorldPosition(me.worldPos);
    // 日食视觉吸附：简化月历的误差足以让本影锥尖端错过地球，
    // 观看日食时把月球贴到日地连线上，保证影子触地（与月食红月同级的夸张）
    if (this.forceMoonOnAxis) {
      const toSunE = earth.worldPos.clone().normalize();
      me.holder.position.copy(earth.worldPos).add(toSunE.multiplyScalar(26));
      me.worldPos.copy(me.holder.position);
    }

    // 地影锥：贴地球、指向背阳面（锥体沿 -y 延伸，故把 +y 对准太阳方向）
    const sunDir = earth.worldPos.clone().negate().normalize();
    this.earthUmbra.position.copy(earth.worldPos);
    this.earthPenumbra.position.copy(earth.worldPos);
    this.earthUmbra.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), sunDir);
    this.earthPenumbra.quaternion.copy(this.earthUmbra.quaternion);
    const mn = this.bodies.get('moon');
    const moonDir = mn.worldPos.clone().sub(earth.worldPos).normalize();   // 地→月
    // 月影：粗端贴月球，锥体指向地球方向（-y 端朝 -moonDir = 月→地）
    this.moonUmbra.position.copy(mn.worldPos);
    this.moonUmbra.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), moonDir);

    // 本影斑：月球→地球射线与地球球的交点（交不上则隐藏）
    if (this.shadowSpot.visible) {
      const R = 2.2;
      const toE = earth.worldPos.clone().sub(mn.worldPos);
      const L = toE.length();
      const dir = toE.multiplyScalar(1 / L);
      const oc = earth.worldPos.clone().sub(mn.worldPos);   // 月→球心
      const b = oc.dot(dir);
      const c = mn.worldPos.distanceToSquared(earth.worldPos) - R * R;
      const disc = b * b - c;
      if (disc >= 0 && b > 0) {
        const t = b - Math.sqrt(disc);
        if (t > 0 && t < L + R) {
          const p = mn.worldPos.clone().add(dir.clone().multiplyScalar(t));
          const nrm = p.clone().sub(earth.worldPos).normalize();
          this.shadowSpot.position.copy(earth.worldPos).add(nrm.clone().multiplyScalar(R * 1.004));
          this.shadowSpot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), nrm);
          this.shadowSpot.visible = true;
        } else this.shadowSpot.visible = false;
      } else this.shadowSpot.visible = false;
    }

    this.belt.rotation.y += simSpeed * 0.00035;
  }

  get(id) { return this.bodies.get(id); }
  allIds() { return [...this.bodies.keys()]; }
}
