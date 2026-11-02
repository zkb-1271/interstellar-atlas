// ============================================================
//  solar.js — 太阳系本体：太阳、八大行星、月球、轨道、小行星带、
//             日/月食地影锥、天体注册表
// ============================================================

import * as THREE from 'three';
import { PLANETS, SUN_INFO, MOON_INFO, MOONS, COMETS, AU } from './data.js?v=206';
import { planetPosition, bodyPosition, orbitPointsFrom, ringPoints, moonPosition, jdToCenturies, planetOrbitPoints, auToScene, planetSchematic, displayRadius, SCHEMATIC } from './astro.js?v=206';
import { makePlanetTexture, addCraters, makeCloudTexture, makeRingTexture, makeGlowSprite, makeSunTexture, makeTailTexture } from './textures.js?v=206';
import { assetURL } from './assets.js?v=206';

// 太阳显示半径：参考站 0.0115×696000^0.42 ≈ 3.27（与行星同一公式，不是另设常量）
export const SUN_RADIUS = displayRadius(696000);

// 参考站 Zs 表：用于天体尺度/带边界（不是显示半径，是"体量档位"）
const ZS = { sun: 8, mercury: 4, venus: 5.2, earth: 6.8, moon: 1.6, mars: 6, jupiter: 12.2, saturn: 14.5, uranus: 8.8, neptune: 6.7, pluto: 5, belt: 12 };


const texLoader = new THREE.TextureLoader();
const _sunToCam = new THREE.Vector3();   // 太阳贴片朝相机偏移的复用向量
const _sunProj = new THREE.Vector3();    // 太阳在屏幕上的投影（判断是否出画）
function loadRealMap(url, mat) {
  texLoader.load(assetURL(url), t => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
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

// 太阳正圆贴片：总览构图里太阳在画面最左缘（偏光轴 ~37°），
// 透视投影会把球压扁约 18%，参考站的正交投影则永远是正圆。
// 这块贴片永远面向相机、永远正圆，远看替代球体，拉近后淡出。
function makeSunDiscTexture(size = 256) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d');
  const R = size / 2;
  // 底色：中心亮黄 → 边缘橙红（临边昏暗）
  const grad = g.createRadialGradient(R, R, 0, R, R, R);
  grad.addColorStop(0, '#fff6d8');
  grad.addColorStop(0.35, '#ffd98a');
  grad.addColorStop(0.72, '#ffab3d');
  grad.addColorStop(0.94, '#f97e1e');
  grad.addColorStop(1, 'rgba(249,110,20,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  // 米粒组织：随机亮斑 / 暗斑。只画到 0.9R——颗粒若碰到边缘，
  // 轮廓就会毛毛糙糙不像正圆
  let seed = 20260901;
  const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
  g.globalCompositeOperation = 'overlay';
  for (let i = 0; i < 900; i++) {
    const a = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd()) * R * 0.90;
    const x = R + Math.cos(a) * r, y = R + Math.sin(a) * r;
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,244,214,0.25)' : 'rgba(200,90,20,0.20)';
    g.beginPath(); g.arc(x, y, 1 + rnd() * 3, 0, Math.PI * 2); g.fill();
  }
  g.globalCompositeOperation = 'destination-in';
  // 裁边：实心一直保持到 0.985R，只留最外 1.5% 抗锯齿——
  // 轮廓必须"锐"，羽化边太宽的话压扁的球体会从边缘透出来
  const edge = g.createRadialGradient(R, R, R * 0.985, R, R, R);
  edge.addColorStop(0, 'rgba(0,0,0,1)');
  edge.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = edge;
  g.fillRect(0, 0, size, size);
  g.globalCompositeOperation = 'source-over';
  return tex(cv);
}

// 大气边缘辉光（Fresnel 壳层）：球心几乎透明、越靠边缘越亮，
// 让行星有"包裹一层大气"的厚度感，而不是一块贴纸。加性混合，
// 不写深度，不会遮住地表细节。
function addAtmoRim(mesh, R, color, strength = 0.42) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uStrength: { value: strength },
    },
    vertexShader: `
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uStrength;
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        float f = 1.0 - max(dot(normalize(vN), normalize(vV)), 0.0);
        f = pow(f, 3.0);
        gl_FragColor = vec4(uColor, f * uStrength);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.FrontSide,
  });
  const rim = new THREE.Mesh(new THREE.SphereGeometry(R * 1.03, 48, 32), mat);
  rim.renderOrder = 2;
  mesh.add(rim);
  return rim;
}

export class SolarSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.bodies = new Map();      // id → { mesh, group, info, displayR, worldPos:Vector3 }
    this._orbitsOn = true;
    this._posMode = 'schematic';

    this._buildLights();
    this._buildSun();
    for (const p of PLANETS) this._buildPlanet(p);
    this._buildBelt();
    this._buildComets();
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
    this.sunLight = new THREE.PointLight(0xfff4e2, 3.2, 0, 0);
    this.group.add(this.sunLight);
    this.group.add(new THREE.AmbientLight(0x3a4048, 0.6));
    // 相机补光：给逆光暗面一点轮廓（月食剪影/行星特写夜面）
    this.camLight = new THREE.PointLight(0xf2ede2, 0.22, 0, 0);
    this.scene.add(this.camLight);
  }

  _buildSun() {
    const geo = new THREE.SphereGeometry(SUN_RADIUS, 64, 32);
    const mat = new THREE.MeshBasicMaterial({ map: tex(makeSunTexture()) });
    texLoader.load(assetURL('assets/tex/planets/sun-4k.jpg'), t => {
      t.colorSpace = THREE.SRGBColorSpace;
      mat.map = t; mat.needsUpdate = true;
    });
    mat.color = new THREE.Color(1.5, 1.38, 1.2);   // 提亮喂给 Bloom
    this._register('sun', new THREE.Mesh(geo, mat), { ...SUN_INFO, type: 'star' }, SUN_RADIUS);

    const glow1 = this._glow1 = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(makeGlowSprite('rgba(255,190,90,0.95)', 'rgba(255,120,30,0.35)')),
      blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow1.scale.setScalar(SUN_RADIUS * 1.9);
    const glow2 = this._glow2 = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(makeGlowSprite('rgba(255,150,60,0.30)', 'rgba(255,90,20,0.10)')),
      blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow2.scale.setScalar(SUN_RADIUS * 4.6);
    this.bodies.get('sun').holder.add(glow1, glow2);

    // 正圆贴片：总览时盖住被透视压扁的球体（见 makeSunDiscTexture 注释）。
    // 半径取 1.15R：贴片实心区 0.985×1.15R ≈ 1.13R，压扁球体的轮廓
    //（最长轴 R）被 comfortably 盖住，绝不会从羽化边里透出来。
    // depthTest 保持开启，且每帧把它向相机偏出球面（见 update），
    // 日食时月球才能从前面遮住太阳。
    const disc = this._sunDisc = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeSunDiscTexture(), transparent: true, depthWrite: false }));
    disc.material.color.setRGB(1.35, 1.26, 1.12);   // 与球体同样的过曝喂给 Bloom
    disc.scale.setScalar(SUN_RADIUS * 2.3);
    disc.renderOrder = 4;                            // 压在行星微光晕（3）之上
    this.bodies.get('sun').holder.add(disc);
  }

  _buildPlanet(p) {
    const R = displayRadius(p.radiusKm);            // 参考站公式：0.0115×km^0.42
    let cv = makePlanetTexture(p.type, 7 + p.id.length * 3);
    const mat = new THREE.MeshStandardMaterial({ map: tex(cv), roughness: 0.94, metalness: 0.02 });
    if (p.tex) loadRealMap(`assets/tex/${p.tex}`, mat);       // NASA 真图覆盖
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(R, 48, 32), mat);
    const entry = this._register(p.id, mesh, p, R);
    // 有大气层的行星加一圈边缘辉光（地球最亮，金星/气巨柔一些）
    if (p.atmo) {
      entry.rim = addAtmoRim(mesh, R, p.atmo, p.id === 'earth' ? 0.55 : 0.4);
    }

    // 微光晕：总览时行星只有几个像素，靠一层加性柔光让它"亮起来"（参考站同款观感）
    const tint = p.color || '#ffffff';
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex(makeGlowSprite('rgba(255,255,255,1)', 'rgba(255,255,255,0)')),
      color: new THREE.Color(tint), blending: THREE.AdditiveBlending,
      depthWrite: false, depthTest: false, transparent: true, opacity: 0.5 }));
    halo.scale.setScalar(R * 4.2);
    halo.renderOrder = 3;
    mesh.add(halo);
    entry.halo = halo;
    entry.spin = p.spin;
    entry.moons = (MOONS[p.id] || []).map((md, i) => {
      // md.r / md.orbit 都是"行星半径的倍数"——行星半径现在只有 0.5~1.2，
      // 卫星必须跟着缩，否则贴到镜头前会变成比行星还大的球
      const mR = R * md.r;
      const mOrbit = R * md.orbit;
      const mcv = makePlanetTexture('moon', 30 + i * 11); addCraters(mcv, 60);
      const mMat = new THREE.MeshStandardMaterial({ map: tex(mcv), roughness: 0.97 });
      if (md.tex) loadRealMap(`assets/tex/${md.tex}`, mMat);
      if (md.tint) mMat.color.set(md.tint);   // 复用贴图时用色调区分天体
      const mMesh = new THREE.Mesh(
        new THREE.SphereGeometry(mR, 24, 16), mMat);
      // 卫星轨道金圈：与卫星实际路径同一平面（同半径、同倾角）。
      // ⚠️ 必须挂在 holder 上——挂在会自转的 mesh 上会跟着行星一起转，
      //    而卫星挂在不自转的层级，结果就是卫星"脱离"轨道圈。
      const mIncl = md.incl ?? 0.05;
      const ringPts = [];
      for (let k = 0; k < 180; k++) {
        const a = (k / 180) * Math.PI * 2;
        ringPts.push(new THREE.Vector3(
          Math.cos(a) * mOrbit, Math.sin(a) * mOrbit * mIncl, -Math.sin(a) * mOrbit));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPts);
      const ringMat = new THREE.LineBasicMaterial({
        color: 0xd8c49a, transparent: true, opacity: 0, depthWrite: false });
      const ring = new THREE.LineLoop(ringGeo, ringMat);
      entry.holder.add(ring);
      entry.moonRings = entry.moonRings || [];
      entry.moonRings.push(ringMat);
      this.get(p.id).holder.add(mMesh);     // 挂在 holder：跟随公转位置但不随自转
      // 卫星也注册进 bodies：可悬停、可点开档案卡
      const mid = 'moon-' + (md.id || (p.id + '-' + i));
      this.bodies.set(mid, {
        id: mid, mesh: mMesh, holder: null, info: md.info || { kind: 'moon', en: 'MOON', cn: '卫星' },
        displayR: mR, worldPos: new THREE.Vector3(), isMoon: true, parent: p.id,
      });
      return { mesh: mMesh, orbitR: mOrbit, period: md.period, phase: i * 2.1, incl: mIncl,
               entry: this.bodies.get(mid) };
    });
    entry.moonOuter = entry.moons.reduce((m, o) => Math.max(m, o.orbitR), 0);

    if (p.id === 'earth') {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(R * 1.018, 48, 32),
        new THREE.MeshStandardMaterial({ map: null, transparent: true, depthWrite: false, roughness: 1, opacity: 0.9 }));
      texLoader.load(assetURL('assets/tex/planets/earth-clouds-4k.jpg'), t => {
        t.colorSpace = THREE.SRGBColorSpace;
        // 参考站的云图是灰度 JPG：只能当 alphaMap 用，否则会变成不透明外壳盖住地表
        clouds.material.map = null;
        clouds.material.alphaMap = t;
        clouds.material.color.set(0xffffff);
        clouds.material.opacity = 0.92;
        clouds.material.needsUpdate = true;
      });
      mesh.add(clouds);
      entry.clouds = clouds;
    }
    if (p.ring) {
      const inner = R * 1.12, outer = R * 2.35;
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
      texLoader.load(assetURL('assets/tex/planets/saturn-ring.png'), t => {
        t.colorSpace = THREE.SRGBColorSpace;
        ring.material.map = t; ring.material.needsUpdate = true;
      });
      ring.rotation.x = Math.PI / 2 - 0.47;   // 土星环倾角
      mesh.add(ring);
      entry.ring = ring;
    }

    // 轨道线：两套几何
    //  ① 真实椭圆（按当前历元要素采样）—— 只在「实时轨道」模式显示，
    //     此时行星位置也用同一套 bodyPosition 换算，圈与星必然重合
    //  ② 同心导轨 —— 「示意排布」模式下行星被摆在压缩轨道半径上，
    //     用同心圆表示"它离太阳多远"，圈同样穿过行星
    // 采样要够密：256 段时相邻点间距近 2 个世界单位，总览里就是十几像素的缝，
    // 行星看起来"离开了轨道"。3000 段后最大偏差 < 0.15 单位（约 1 像素）。
    const pts = planetOrbitPoints(p.id, jdToCenturies(2451545.0), 3000).map(
      p3 => new THREE.Vector3(p3[0], p3[1], p3[2]));
    const orbit = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: 0xa8bcd2, transparent: true, opacity: 0.15 }));
    this.group.add(orbit);
    entry.orbit = orbit;

    const ringR = auToScene(p.elements.a) * SCHEMATIC;
    const rpts = ringPoints(ringR, 256).map(q => new THREE.Vector3(q[0], q[1], q[2]));
    const ringOrbit = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(rpts),
      new THREE.LineBasicMaterial({ color: 0x93a7c0, transparent: true, opacity: 0.075 }));
    this.group.add(ringOrbit);
    entry.orbitRing = ringOrbit;
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

    // 主带：内 = 火星轨道 + 6 + 2，外 = 木星轨道 − 12.2 − 2（参考站 Mg/Rg，Zs 表）
    // 再整体 ×Fs()=0.46（图谱折叠比例）
    const inner = (auToScene(1.524) + ZS.mars + 2) * SCHEMATIC;
    const outer = (auToScene(5.203) - ZS.jupiter - 2) * SCHEMATIC;
    const beltPos = u$(12000, inner, outer, 0.8 * SCHEMATIC, 20260901, { gaps: true, bias: 0.72 });
    const beltGeo = new THREE.BufferGeometry();
    beltGeo.setAttribute('position', new THREE.BufferAttribute(beltPos, 3));
    fillAttrs(beltGeo, { rgb: [0.68, 0.66, 0.62], seed: 90210 });
    const beltMat = new THREE.ShaderMaterial({
      vertexShader: particleShader.vertexShader,
      fragmentShader: particleShader.fragmentShader,
      uniforms: {
        uPixelRatio: { value: Math.min(devicePixelRatio, 2) },
        uBaseSize: { value: 0.6 },
        uDetail: { value: 1 },
        uOpacity: { value: 0.06 },
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
        uOpacity: { value: 0.1 },
        uColor: { value: new THREE.Color('#cfc8b8') },
        uInner: { value: inner },
        uOuter: { value: outer },
        uGapWidth: { value: gapW },
        uGapA: { value: auToScene(2.5) * SCHEMATIC },
        uGapB: { value: auToScene(2.82) * SCHEMATIC },
        uGapC: { value: auToScene(3.27) * SCHEMATIC },
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

    // 柯伊伯带：内 = 海王星轨道 + Zs.neptune + 6，跨 45（参考站 y2/x2）
    const kIn = (auToScene(30.07) + ZS.neptune + 6) * SCHEMATIC;
    const kOut = (auToScene(30.07) + ZS.neptune + 6 + 45) * SCHEMATIC;
    const kuiperPos = u$(14000, kIn, kOut, 9 * SCHEMATIC, 77123, { bias: 0.62 });
    const kuiperGeo = new THREE.BufferGeometry();
    kuiperGeo.setAttribute('position', new THREE.BufferAttribute(kuiperPos, 3));
    fillAttrs(kuiperGeo, { rgb: [0.66, 0.74, 0.88], seed: 31337 });
    const kuiperMat = new THREE.ShaderMaterial({
      vertexShader: particleShader.vertexShader,
      fragmentShader: particleShader.fragmentShader,
      uniforms: {
        uPixelRatio: { value: Math.min(devicePixelRatio, 2) },
        uBaseSize: { value: 1.3 },
        uDetail: { value: 1 },
        uOpacity: { value: 0.06 },
      },
      transparent: true, depthWrite: false,
    });
    this.kuiper = new THREE.Points(kuiperGeo, kuiperMat);
    this.group.add(this.kuiper);

    // 奥尔特云：参考站最外层 uN = x2 + 18 + 90
    const oIn = (auToScene(30.07) + ZS.neptune + 6 + 45 + 18) * SCHEMATIC;
    const oOut = (auToScene(30.07) + ZS.neptune + 6 + 45 + 18 + 90) * SCHEMATIC;
    const oortPos = u$(16000, oIn, oOut, 26 * SCHEMATIC, 88091, { bias: 0.55 });
    const oortGeo = new THREE.BufferGeometry();
    oortGeo.setAttribute('position', new THREE.BufferAttribute(oortPos, 3));
    fillAttrs(oortGeo, { rgb: [0.5, 0.58, 0.78], seed: 20260901 });
    const oortMat = new THREE.ShaderMaterial({
      vertexShader: particleShader.vertexShader,
      fragmentShader: particleShader.fragmentShader,
      uniforms: {
        uPixelRatio: { value: Math.min(devicePixelRatio, 2) },
        uBaseSize: { value: 1.2 },
        uDetail: { value: 1 },
        uOpacity: { value: 0.06 },
      },
      transparent: true, depthWrite: false,
    });
    this.oort = new THREE.Points(oortGeo, oortMat);
    this.group.add(this.oort);
  }

  _buildComets() {
    this.comets = [];
    const tailTex = tex(makeTailTexture());
    tailTex.generateMipmaps = false;                 // mipmap 会把边缘透明糊回来，露出平面轮廓
    tailTex.minFilter = THREE.LinearFilter;
    tailTex.magFilter = THREE.LinearFilter;
    const UP = new THREE.Vector3(0, 1, 0);

    for (const c of COMETS) {
      const R = Math.max(0.055, c.radiusKm * 0.016);
      const holder = new THREE.Group();

      const nucleus = new THREE.Mesh(
        new THREE.IcosahedronGeometry(R, 1),
        new THREE.MeshStandardMaterial({ color: 0x7d838b, roughness: 1, metalness: 0 }));
      holder.add(nucleus);

      // 彗发
      const coma = new THREE.Sprite(new THREE.SpriteMaterial({
        map: tex(makeGlowSprite('rgba(226,244,255,0.95)', 'rgba(120,170,255,0)')),
        color: new THREE.Color(c.color), blending: THREE.AdditiveBlending,
        depthWrite: false, transparent: true, opacity: 0.85 }));
      coma.scale.setScalar(R * 26);
      holder.add(coma);

      // 彗尾：始终朝向相机的羽状平面（顶端贴彗核，向 -Y 展开）
      const tGeo = new THREE.PlaneGeometry(1, 1);
      tGeo.translate(0, -0.5, 0);
      const tail = new THREE.Mesh(tGeo, new THREE.MeshBasicMaterial({
        map: tailTex, color: new THREE.Color(c.color), transparent: true,
        opacity: 0.75, blending: THREE.AdditiveBlending,
        depthWrite: false, side: THREE.DoubleSide }));
      tail.frustumCulled = false;
      holder.add(tail);

      this.group.add(holder);

      const id = 'comet-' + c.id;
      const entry = {
        id, mesh: nucleus, holder, info: c.info || c, displayR: R,
        worldPos: new THREE.Vector3(), coma, tail, comet: c, isComet: true,
        focusR: c.focusR || R * 4, orbitAlways: true,   // 彗星在任何模式下都走真实轨道
      };
      this.bodies.set(id, entry);
      this.comets.push(entry);

      // 轨道线
      const pts = orbitPointsFrom(c.elements, 3000).map(q => new THREE.Vector3(q[0], q[1], q[2]));
      const line = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0x9fc4e8, transparent: true, opacity: 0.12, depthWrite: false }));
      this.group.add(line);
      entry.orbit = line;
    }
    this._cometUp = UP;
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
    // 尺度跟新的行星半径走：地球 R=0.455、月球轨道 10 单位（≈22 个
    // 地球半径的压缩视觉距离）、月球 R = 0.455×0.273 = 0.124（真实比例）
    this.earthUmbra = mkCone(36, 0.46, 0.004, 0x362014, 0.40);   // 本影：真实锥度，10 单位处半径 ≈0.33
    this.earthPenumbra = mkCone(10.5, 0.46, 0.74, 0x241610, 0.16); // 半影：随距离扩张
    this.moonUmbra = mkCone(1.45, 0.11, 0.01, 0x241a1e, 0.50);   // 日食时月球贴到 1.4 单位处，锥尖刚好触地
    // 日食时月球本影投在地球表面的暗斑
    this.shadowSpot = new THREE.Mesh(
      new THREE.CircleGeometry(0.022, 32),
      new THREE.MeshBasicMaterial({ color: 0x060403, transparent: true, opacity: 0.72, depthWrite: false }));
    this.shadowSpot.visible = false;
    // 日月食演出状态（由 main 的时间轴驱动）
    //   eclipseKind: 'solar' | 'lunar' | null
    //   eclipsePhase: 0 = 食甚，±1 = 前后恰好接触（供拖动时间轴）
    this.eclipseKind = null;
    this.eclipsePhase = 0;
    this.eclipseAnnular = false;   // 日环食：月面角径略小于太阳
    this.eclipsePartial = false;   // 偏食：擦边而过，食甚也留缺口
    this.group.add(this.shadowSpot);
    this.group.add(this.earthUmbra, this.earthPenumbra, this.moonUmbra);
  }

  setEclipseShadows(mode) {   // 'lunar' | 'solar' | null
    this.earthUmbra.visible = mode === 'lunar';
    this.earthPenumbra.visible = mode === 'lunar';
    this.shadowSpot.visible = mode === 'solar';
    this.moonUmbra.visible = mode === 'solar';
    this.eclipseKind = (mode === 'solar' || mode === 'lunar') ? mode : null;
    this.eclipsePhase = 0;
  }

  // 深空模式收起轨道线与小行星带，只留星野
  setOrbitsVisible(v) {
    this._orbitsOn = v;
    this._syncOrbitMode();
    this.belt.visible = v;
    if (this.kuiper) this.kuiper.visible = v;
    if (this.oort) this.oort.visible = v;
    if (this.beltFog) this.beltFog.visible = v;
  }

  // 轨道线的两种口径：实时轨道看真实椭圆，示意排布看同心导轨
  _syncOrbitMode() {
    const on = this._orbitsOn !== false;
    const real = this._posMode === 'real';
    for (const b of this.bodies.values()) {
      // ⚠️ 必须转成布尔：three 只认 visible === false 为隐藏，
      //    写成 `on && b.orbitAlways` 在 orbitAlways 未定义时会得到 undefined，
      //    结果两套轨道线同时显示。
      if (b.orbitRing) b.orbitRing.visible = !!(on && !real);
      if (b.orbit) b.orbit.visible = !!(on && (real || b.orbitAlways));
    }
  }

  update(jd, simSpeed, camera, clockT = 0, positionMode = 'schematic') {
    const T = jdToCenturies(jd);

    // 排布模式变了就换一套轨道线（示意 = 同心导轨 / 实时 = 真实椭圆）
    if (this._posMode !== positionMode) {
      this._posMode = positionMode;
      this._syncOrbitMode();
    }

    // 太阳辉光（固定几何尺寸，不再随距离缩放）
    // ⚠️ 必须按"太阳是否还在画面内"淡出：聚焦某颗行星时太阳往往就在画面外
    // 不远，它那层 4.6R 的加性辉光会从画面边缘渗进来，看起来像一团
    // 找不到来源的"神秘光晕"。
    if (this._glow1) {
      const sp = this.bodies.get('sun').worldPos;
      const d = camera ? camera.position.distanceTo(sp) : 200;
      let edge = 1;
      if (camera) {
        _sunProj.copy(sp).project(camera);
        const off = Math.max(Math.abs(_sunProj.x), Math.abs(_sunProj.y));
        // 1.05 倍 NDC 之内全亮，1.5 倍之外完全熄灭
        edge = _sunProj.z > 1 ? 0 : Math.min(1, Math.max(0, (1.5 - off) / 0.45));
      }
      this._glow1.material.opacity = Math.min(1, 40 / Math.max(d, 1)) * 0.95 * edge;
      this._glow2.material.opacity = Math.min(1, 120 / Math.max(d, 1)) * 0.8 * edge;
    }

    // 带粒子尺寸随相机高度微调（参考站 $z 同款）
    if (this.beltMat && camera) {
      const dSun = camera.position.length();
      this.beltMat.uniforms.uBaseSize.value = Math.min(2.2, Math.max(0.8, 1.4 * Math.pow(Math.max(dSun, 1) / 240, -0.18)));
    }

    for (const p of PLANETS) {
      const entry = this.bodies.get(p.id);
      // 参考站双模式：SCHEMATIC = 压缩距离排在 +X 一线（默认）；REAL = 真实历表
      const pos = positionMode === 'real'
        ? planetPosition(p.id, T).pos
        : planetSchematic(p.id, clockT).pos;
      entry.holder.position.set(pos[0], pos[1], pos[2]);
      entry.worldPos.copy(entry.holder.position);
      // 光晕只在远景时可见
      if (entry.halo && camera) {
        const dH = camera.position.distanceTo(entry.worldPos);
        // 只在"行星看起来很小"时亮起；贴脸特写必须收掉，否则会糊成一坨色斑
        const near = 25 * entry.displayR, far = 60 * entry.displayR;
        entry.halo.material.opacity = Math.max(0, Math.min(1, (dH - near) / far)) * 0.45;
      }
      // 自转：按真实自转周期 + 模拟儒略日计算相位（逆行取负）
      if (p.rotationHours) {
        const dir = p.rotationHours < 0 ? -1 : 1;
        entry.mesh.rotation.y = dir * ((jd * 24 / Math.abs(p.rotationHours)) % 1) * Math.PI * 2
                              + dir * clockT * 0.045;      // 待机自转（暂停时也有生命感）
      }
      if (entry.clouds) entry.clouds.rotation.y += simSpeed * 0.0008;
      for (const mo of entry.moons || []) {
        // 待机自转：即使时间暂停，卫星也按自己的节奏缓慢绕行（周期越长走得越慢）
        const idle = (clockT * Math.PI * 2) / (12 + 1.6 * Math.abs(mo.period));
        const ang = (jd / mo.period) * Math.PI * 2 + mo.phase + idle;
        // 三个分量必须用同一个 ang（以前 y 写成 sin(ang*0.9)，相位错位，
        // 卫星走出来的不是椭圆，看起来就像脱离了轨道圈）
        mo.mesh.position.set(
          Math.cos(ang) * mo.orbitR,
          Math.sin(ang) * mo.orbitR * mo.incl,
          -Math.sin(ang) * mo.orbitR);
        if (mo.entry) mo.mesh.getWorldPosition(mo.entry.worldPos);   // 供悬停/聚焦/标签使用
      }
      // 卫星轨道圈渐显（相机接近时）
      if (entry.moonRings && camera) {
        const dCam = camera.position.distanceTo(entry.worldPos);
        const op = Math.min(0.34, Math.max(0, (14 - dCam) / 10)) * 0.9;
        for (const rm of entry.moonRings) rm.opacity = op;
      }
    }

    const earth = this.bodies.get('earth');
    const m = moonPosition(T);
    const moonEntry = this.bodies.get('moon');
    if (!moonEntry) {
      const cv = makePlanetTexture('moon', 11); addCraters(cv, 110);
      const mmat = new THREE.MeshStandardMaterial({ map: tex(cv), roughness: 0.96, emissiveMap: tex(cv), emissive: new THREE.Color(0, 0, 0) });
      loadRealMap('assets/tex/planets/moon-4k.jpg', mmat);
      // 月球半径用真实比例：0.455 × 0.273 ≈ 0.124（以前用显示公式算出
      // 0.264，月地比 0.58，比真实的 0.273 大了一倍多）
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.124, 40, 28), mmat);
      const me0 = this._register('moon', mesh, MOON_INFO, 0.124, this.get('earth').holder);
      me0.isMoon = true;
    }
    const me = this.bodies.get('moon');
    me.holder.position.set(m.pos[0], m.pos[1], m.pos[2]);   // 局部于地球 holder
    earth.holder.updateWorldMatrix(true, true);
    me.holder.getWorldPosition(me.worldPos);
    // 日月食演出：按时间轴"合成"月球位置。
    // 为什么不用真实历表：本模型是简化历表（月球只有平黄经+出差），实测四场月食的
    // 食甚时刻月心离影轴 2.0～8.0 个单位，而本影半径只有 0.33 —— 也就是说按真实
    // 位置摆，月食根本不会发生、拖动时间轴也看不到过程。所以这里改成：
    //   phase = 0  → 正好对轴（食甚）
    //   phase = ±1 → 前后恰好接触（初亏/复圆）
    // 位置连续变化，拖动时间轴即可看到进入—食甚—退出的全过程。
    if (this.eclipseKind) {
      const ph = Math.max(-1, Math.min(1, this.eclipsePhase || 0));
      const toSun = earth.worldPos.clone().negate().normalize();          // 地→日
      const perp = new THREE.Vector3().crossVectors(toSun, new THREE.Vector3(0, 1, 0));
      if (perp.lengthSq() < 1e-8) perp.set(1, 0, 0);
      perp.normalize();                                                    // 扫过方向
      let local;
      if (this.eclipseKind === 'solar') {
        // 月球放在「月面角径 = k × 日面角径」的距离上：
        //   k>1 全食能吞日；k<1 环食留一圈金环。
        // 距离按当前日地距反算——示意排布（日地 ~37）与真实轨道（日地更远）
        // 两种布局下，日面的视角大小不同，写死 1.3 只对示意排布成立。
        const E = Math.max(earth.worldPos.length(), SUN_RADIUS * 1.5);
        const sunAng = SUN_RADIUS / E;
        const k = this.eclipseAnnular ? 0.90 : 1.06;
        const d = 0.124 / (sunAng * k);
        const offMax = SUN_RADIUS * d / E + 0.124;        // 恰好接触时的横向偏移
        // 偏食：食甚也停在 offMax 的 45% 处，日面永远留一块缺口
        const base = this.eclipsePartial ? 0.45 : 0;
        const off = offMax * (base + (1 - base) * Math.abs(ph));
        local = toSun.clone().multiplyScalar(d).addScaledVector(perp, ph < 0 ? -off : off);
        this._moonShadowLen = Math.max(0.3, d - 0.22);     // 本影锥要够长、能触地
        this.eclipseCover = Math.max(0, 1 - Math.abs(ph)); // 0 = 刚接触，1 = 食甚
      } else {
        // 月食：月球留在真实视觉距离（10 单位）的背阳侧，横向穿过地影
        const antiSun = toSun.clone().negate();
        // 全食：从影轴中心穿过（|ph|<0.53 都在本影内 → 红月）
        // 偏食：擦着本影边缘过，最近处也在本影外
        const base = this.eclipsePartial ? 0.40 : 0;
        const off = base + (0.62 - base) * Math.abs(ph);
        local = antiSun.multiplyScalar(10).addScaledVector(perp, ph < 0 ? -off : off);
      }
      me.holder.position.copy(local);
      me.worldPos.copy(earth.worldPos).add(local);
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
    // 锥体原始长 1.45，日食时按实际月地距拉伸，保证锥尖落在地球上
    if (this.eclipseKind === 'solar' && this._moonShadowLen) {
      this.moonUmbra.scale.set(1, this._moonShadowLen / 1.45, 1);
    }

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
          // 斑的深浅/大小跟着食分走：刚接触时只是一粒淡影，食甚最浓最大
          const cov = this.eclipseCover == null ? 1 : this.eclipseCover;
          this.shadowSpot.scale.setScalar(0.55 + 0.65 * cov);
          this.shadowSpot.material.opacity = 0.16 + 0.58 * cov;
          this.shadowSpot.visible = cov > 0.02;
        } else this.shadowSpot.visible = false;
      } else this.shadowSpot.visible = false;
    }

    // 彗星：位置 + 彗尾朝向（永远背向太阳），越靠近太阳尾巴越长越亮
    if (this.comets) {
      for (const c of this.comets) {
        const p = bodyPosition(c.comet.elements, T).pos;
        c.holder.position.set(p[0], p[1], p[2]);
        c.worldPos.copy(c.holder.position);
        const r = Math.hypot(p[0], p[1], p[2]) || 1;
        const toSun = new THREE.Vector3(-p[0], -p[1], -p[2]).normalize();
        const away = toSun.clone().negate();                       // 尾巴朝背日方向
        // 广告牌：局部 +Y 对齐尾巴方向，法线朝相机
        if (camera) {
          const toCam = camera.position.clone().sub(c.holder.position).normalize();
          const right = new THREE.Vector3().crossVectors(away, toCam);
          if (right.lengthSq() < 1e-6) right.set(1, 0, 0);
          right.normalize();
          const fwd = new THREE.Vector3().crossVectors(right, away).normalize();
          c.tail.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, away, fwd));
        }
        const act = Math.min(1, 80 / r);
        const L = c.comet.tailLen * (0.42 + act * 0.85);
        c.tail.scale.set(L * 0.55, L, 1);
        c.tail.material.opacity = 0.22 + act * 0.62;
        c.coma.material.opacity = 0.18 + act * 0.7;
        c.coma.scale.setScalar(c.displayR * (14 + act * 26));
      }
    }

    this.belt.rotation.y += simSpeed * 0.00035;
  }

  // 太阳正圆贴片同步——⚠️ 必须在相机位姿定稿「之后」调用
  //（main.js 的 frame 里 flight.update 之后）。以前放在 update() 里
  // 用上一帧的相机定位，缩放/拖拽时贴片慢一帧，和球体错位成"双太阳"。
  syncSunDisc(camera) {
    if (!this._sunDisc || !camera) return;
    const sp = this.bodies.get('sun').worldPos;
    const dSun = camera.position.distanceTo(sp);
    const rpx = (SUN_RADIUS / (dSun * Math.tan(camera.fov * Math.PI / 360))) * (window.innerHeight / 2);
    const op = Math.min(1, Math.max(0, (160 - rpx) / 30));
    this._sunDisc.material.opacity = op;
    this._sunDisc.visible = op > 0.01 && this.group.visible;
    if (this._sunDisc.visible) {
      // 沿视线向相机偏出 1.03R：深度上在球体之前（日食时月球仍能遮挡它），
      // 且严格落在"相机—日心"视线上，投影与球体同心、零视差
      _sunToCam.copy(camera.position).sub(sp).normalize();
      this._sunDisc.position.copy(_sunToCam.multiplyScalar(SUN_RADIUS * 1.03));
    }
  }

  get(id) { return this.bodies.get(id); }
  allIds() { return [...this.bodies.keys()]; }
}
