// ============================================================
//  solar.js — 太阳系本体：太阳、八大行星、月球、轨道、小行星带、
//             日/月食地影锥、天体注册表
// ============================================================

import * as THREE from 'three';
import { PLANETS, SUN_INFO, MOON_INFO, MOONS, AU } from './data.js?v=96';
import { planetPosition, moonPosition, jdToCenturies, planetOrbitPoints, auToScene } from './astro.js?v=96';
import { makePlanetTexture, addCraters, makeCloudTexture, makeRingTexture, makeGlowSprite, makeSunTexture } from './textures.js?v=96';

export const SUN_RADIUS = 3.27;

const texLoader = new THREE.TextureLoader();
function loadRealMap(url, mat) {
  texLoader.load(url, t => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    mat.map = t;
    if (mat.emissiveMap) mat.emissiveMap = t;
    mat.needsUpdate = true;
  });
}

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
    texLoader.load('assets/tex/planets/sun_sss-4k.jpg', t => {
      t.colorSpace = THREE.SRGBColorSpace;
      mat.map = t; mat.needsUpdate = true;
    });
    mat.color = new THREE.Color(1.6, 1.35, 1.05);   // 提亮喂给 Bloom
    this._register('sun', new THREE.Mesh(geo, mat), { ...SUN_INFO, type: 'star' }, SUN_RADIUS);

    const glow1 = this._glow1 = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(makeGlowSprite('rgba(255,190,90,0.95)', 'rgba(255,120,30,0.35)')),
      blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow1.scale.setScalar(SUN_RADIUS * 4);
    const glow2 = this._glow2 = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(makeGlowSprite('rgba(255,150,60,0.30)', 'rgba(255,90,20,0.10)')),
      blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow2.scale.setScalar(SUN_RADIUS * 10);
    this.bodies.get('sun').holder.add(glow1, glow2);
  }

  _buildPlanet(p) {
    let cv = makePlanetTexture(p.type, 7 + p.id.length * 3);
    const mat = new THREE.MeshStandardMaterial({ map: tex(cv), roughness: 0.94, metalness: 0.02 });
    if (p.tex) loadRealMap(`assets/tex/${p.tex}`, mat);       // NASA 真图覆盖
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(p.displayR, 48, 32), mat);
    const entry = this._register(p.id, mesh, p, p.displayR);
    entry.spin = p.spin;
    entry.moons = (MOONS[p.id] || []).map((md, i) => {
      const mcv = makePlanetTexture('moon', 30 + i * 11); addCraters(mcv, 60);
      const mMat = new THREE.MeshStandardMaterial({ map: tex(mcv), roughness: 0.97 });
      if (md.tex) loadRealMap(`assets/tex/${md.tex}`, mMat);
      const mMesh = new THREE.Mesh(
        new THREE.SphereGeometry(md.r, 24, 16), mMat);
      this.get(p.id).holder.add(mMesh);     // 挂在 holder：跟随公转位置但不随自转
      return { mesh: mMesh, orbitR: md.orbit, period: md.period, phase: i * 2.1, incl: md.incl ?? 0.05 };
    });

    if (p.id === 'earth') {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(p.displayR * 1.018, 48, 32),
        new THREE.MeshStandardMaterial({ map: tex(makeCloudTexture()), transparent: true, depthWrite: false, roughness: 1 }));
      texLoader.load('assets/tex/planets/earth_clouds_nasa-2k.jpg', t => {
        t.colorSpace = THREE.SRGBColorSpace;
        clouds.material.map = t; clouds.material.needsUpdate = true;
      });
      mesh.add(clouds);
      entry.clouds = clouds;
    }
    if (p.ring) {
      const inner = p.displayR * 1.12, outer = p.displayR * 2.35;
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
      texLoader.load('assets/tex/planets/saturn-ring-2k.png', t => {
        t.colorSpace = THREE.SRGBColorSpace;
        ring.material.map = t; ring.material.needsUpdate = true;
      });
      ring.rotation.x = Math.PI / 2 - 0.47;   // 土星环倾角
      mesh.add(ring);
      entry.ring = ring;
    }

    // 轨道线：按当前历元要素采样真实椭圆
    const pts = planetOrbitPoints(p.id, jdToCenturies(2451545.0), 256).map(
      p3 => new THREE.Vector3(p3[0], p3[1], p3[2]));
    const orbitGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const orbit = new THREE.LineLoop(orbitGeo, new THREE.LineBasicMaterial({
      color: 0xaab6c8, transparent: true, opacity: 0.16 }));
    this.group.add(orbit);
    entry.orbit = orbit;
  }

  _buildBelt() {
    // ===== 照抄参考站实现 =====
    // u$ 带生成：count、rIn、rOut、厚度、seed、{gaps, bias}
    const u$ = (t, e, n, i, a, r = {}) => {
      const o = new Float32Array(t * 3);
      let sd = a;
      const rand = () => { sd = (sd * 1664525 + 1013904223) % 4294967296; return sd / 4294967296; };
      const gaps = r.gaps ?? false, bias = r.bias ?? 0.6;
      let f = 0, h = 0;
      while (f < t && h < t * 12) {
        h++;
        const pw = Math.pow(rand(), bias);
        const g = e + (n - e) * pw;
        if (gaps) {
          const x = (g - e) / Math.max(n - e, 1e-4);
          if (Math.min(Math.abs(x - 0.28), Math.abs(x - 0.55), Math.abs(x - 0.76)) < 0.028 && rand() > 0.22) continue;
        }
        const v = rand() * Math.PI * 2, E = 0.85 + rand() * 0.3;
        o[f * 3] = Math.cos(v) * g * E;
        o[f * 3 + 1] = (rand() - 0.5) * i;
        o[f * 3 + 2] = Math.sin(v) * g * E;
        f++;
      }
      return o.subarray(0, f * 3);
    };
    // V$ 属性填充：aSize/aReveal/aTint
    const fillAttrs = (geo, tint) => {
      const count = geo.getAttribute('position').count;
      const aSize = new Float32Array(count), aReveal = new Float32Array(count), aTint = new Float32Array(count * 3);
      let sd = tint.seed;
      const rand = () => { sd = (sd * 1664525 + 1013904223) % 4294967296; return sd / 4294967296; };
      for (let i = 0; i < count; i++) {
        aSize[i] = 0.72 + rand() * 0.62;
        aReveal[i] = Math.pow(rand(), 1.35);
        const f = rand();
        aTint[i * 3] = tint.rgb[0] * (0.86 + f * 0.28);
        aTint[i * 3 + 1] = tint.rgb[1] * (0.86 + f * 0.24);
        aTint[i * 3 + 2] = tint.rgb[2] * (0.88 + (1 - f) * 0.24);
      }
      geo.setAttribute('aSize', new THREE.BufferAttribute(aSize, 1));
      geo.setAttribute('aReveal', new THREE.BufferAttribute(aReveal, 1));
      geo.setAttribute('aTint', new THREE.BufferAttribute(aTint, 3));
    };
    const particleShader = {
      vertexShader: `
        attribute float aSize;
        attribute float aReveal;
        attribute vec3 aTint;
        uniform float uPixelRatio;
        uniform float uBaseSize;
        uniform float uDetail;
        uniform float uOpacity;
        varying vec3 vTint;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float appear = smoothstep(aReveal - 0.1, aReveal + 0.02, uDetail);
          vAlpha = appear * uOpacity;
          vTint = aTint;
          gl_PointSize = max(0.9, uBaseSize * aSize) * uPixelRatio;
        }`,
      fragmentShader: `
        varying vec3 vTint;
        varying float vAlpha;
        void main() {
          if (vAlpha <= 0.004) discard;
          gl_FragColor = vec4(vTint, vAlpha);
        }`,
    };

    // 主带：内=火星轨道+2+火星半径，外=木星轨道−2−木星半径（照抄 Mg/Rg）
    const inner = auToScene(1.524) + 0.349 + 2;
    const outer = auToScene(5.203) - 1.246 - 2;
    const beltPos = u$(16000, inner, outer, 0.8, 20260901, { gaps: true, bias: 0.72 });
    const beltGeo = new THREE.BufferGeometry();
    beltGeo.setAttribute('position', new THREE.BufferAttribute(beltPos, 3));
    fillAttrs(beltGeo, { rgb: [0.56, 0.54, 0.5], seed: 90210 });
    const beltMat = new THREE.ShaderMaterial({
      vertexShader: particleShader.vertexShader,
      fragmentShader: particleShader.fragmentShader,
      uniforms: {
        uPixelRatio: { value: Math.min(devicePixelRatio, 2) },
        uBaseSize: { value: 1.45 },
        uDetail: { value: 1 },
        uOpacity: { value: 0.17 },
      },
      transparent: true, depthWrite: false,
    });
    this.belt = new THREE.Points(beltGeo, beltMat);
    this.beltMat = beltMat;
    this.group.add(this.belt);

    // 带雾：噪声 + Kirkwood 三缝（照抄 Zxe）
    const gapW = (outer - inner) * 0.05;
    const fogMat = new THREE.ShaderMaterial({
      uniforms: {
        uOpacity: { value: 0.09 },
        uColor: { value: new THREE.Color('#8d8371') },
        uInner: { value: inner },
        uOuter: { value: outer },
        uGapWidth: { value: gapW },
        uGapA: { value: auToScene(2.5) },
        uGapB: { value: auToScene(2.82) },
        uGapC: { value: auToScene(3.27) },
      },
      vertexShader: `
        varying vec2 vLocal;
        void main() {
          vLocal = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform float uOpacity;
        uniform vec3 uColor;
        uniform float uInner;
        uniform float uOuter;
        uniform float uGapWidth;
        uniform float uGapA;
        uniform float uGapB;
        uniform float uGapC;
        varying vec2 vLocal;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                     mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
        }
        float gap(float radius, float center) {
          return clamp(abs(radius - center) / uGapWidth, 0.06, 1.0);
        }
        void main() {
          float radius = length(vLocal);
          if (radius < uInner || radius > uOuter) discard;
          float t = (radius - uInner) / max(uOuter - uInner, 0.0001);
          float angle = atan(vLocal.y, vLocal.x);
          float edge = smoothstep(0.0, 0.16, t) * (1.0 - smoothstep(0.72, 1.0, t));
          float density = noise(vec2(angle * 2.4, t * 3.2)) * 0.65 + noise(vec2(angle * 7.5, t * 9.0)) * 0.35;
          float gaps = gap(radius, uGapA) * gap(radius, uGapB) * gap(radius, uGapC);
          float alpha = edge * (0.3 + 0.7 * density) * gaps * uOpacity;
          if (alpha <= 0.002) discard;
          gl_FragColor = vec4(uColor, alpha);
        }`,
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
    });
    const fog = new THREE.Mesh(new THREE.RingGeometry(inner, outer, 256, 12), fogMat);
    fog.rotation.x = Math.PI / 2;               // RingGeometry xy → xz 黄道面
    this.group.add(fog);
    this.beltFog = fog;

    // 柯伊伯带：14000 颗、356-401、厚 9、灰蓝
    const kIn = auToScene(30.07) + 0.804 + 6, kOut = kIn + 45;
    const kuiperPos = u$(14000, kIn, kOut, 9, 77123, { bias: 0.62 });
    const kuiperGeo = new THREE.BufferGeometry();
    kuiperGeo.setAttribute('position', new THREE.BufferAttribute(kuiperPos, 3));
    fillAttrs(kuiperGeo, { rgb: [0.62, 0.72, 0.86], seed: 31337 });
    const kuiperMat = new THREE.ShaderMaterial({
      vertexShader: particleShader.vertexShader,
      fragmentShader: particleShader.fragmentShader,
      uniforms: {
        uPixelRatio: { value: Math.min(devicePixelRatio, 2) },
        uBaseSize: { value: 1.45 },
        uDetail: { value: 1 },
        uOpacity: { value: 0.12 },
      },
      transparent: true, depthWrite: false,
    });
    this.kuiper = new THREE.Points(kuiperGeo, kuiperMat);
    this.kuiper.visible = false;
    this.group.add(this.kuiper);
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
    this.earthUmbra = mkCone(14.5, 0.70, 0.39, 0x362014, 0.42);
    this.earthPenumbra = mkCone(23, 0.95, 0.95, 0x241610, 0.20);
    this.moonUmbra = mkCone(6.2, 0.21, 0.10, 0x241a1e, 0.50);
    // 日食时月球本影投在地球表面的暗斑
    this.shadowSpot = new THREE.Mesh(
      new THREE.CircleGeometry(0.095, 32),
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
    // 带粒子尺寸（照抄 $z）
    if (this.beltMat) this.beltMat.uniforms.uBaseSize.value = Math.min(2.2, Math.max(0.8, 1.4 * Math.pow(Math.max(dSun, 1) / 240, -0.18)));
    // 太阳：远景放大保可见（30px 半径@任何距离）
    const sunE = this.bodies.get('sun');
    sunE.mesh.scale.setScalar(Math.min(30, Math.max(1, dSun * 0.0265)));
    const sun = this.bodies.get('sun');
    if (this._glow1) {
      this._glow1.material.opacity = Math.min(1, dSun / 500) * 0.95;
      this._glow2.material.opacity = Math.min(1, dSun / 2400) * 0.9;
    }

    // 最小屏幕尺寸钳制（参考站行为）：行星/太阳永不小于数像素
    const fovT = Math.tan((camera ? camera.fov : 60) * Math.PI / 360);
    const bodyScale = (displayR, dist) =>
      Math.min(30, Math.max(1, (displayR * 30000) / Math.max(dist, 0.5)));

    for (const p of PLANETS) {
      const { pos } = planetPosition(p.id, T);
      const entry = this.bodies.get(p.id);
      entry.holder.position.set(pos[0], pos[1], pos[2]);
      const dCam = camera ? camera.position.distanceTo(entry.worldPos) : 900;
      // 参考站行为：scale = clamp(K/dist, 1, 30)——特写自然放大占半屏，总览保持可见
      entry.mesh.scale.setScalar(Math.min(30, Math.max(1, (p.displayR * 30000) / Math.max(dCam, 0.5))));
      entry.worldPos.copy(entry.holder.position);
      // 自转：按真实自转周期 + 模拟儒略日计算相位（参考站同思路，逆行自转取负）
      if (p.rotationHours) {
        const dir = p.rotationHours < 0 ? -1 : 1;
        entry.mesh.rotation.y = dir * ((jd * 24 / Math.abs(p.rotationHours)) % 1) * Math.PI * 2;
      }
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
      loadRealMap('assets/tex/planets/moon-2k.jpg', mmat);
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.264, 40, 28), mmat);
      this._register('moon', mesh, MOON_INFO, 0.264, this.get('earth').holder);
    }
    const me = this.bodies.get('moon');
    me.holder.position.set(m.pos[0], m.pos[1], m.pos[2]);   // 局部于地球 holder
    if (camera) me.mesh.scale.setScalar(Math.min(30, Math.max(1, (0.264 * 48000) / Math.max(camera.position.distanceTo(me.worldPos), 0.5))));
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
      const R = 0.455;
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
          this.shadowSpot.position.copy(earth.worldPos).add(nrm.clone().multiplyScalar(R * 1.006));
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
