// ============================================================
//  starfield.js — 深空背景：三层恒星 + 银河带 + 星云
// ============================================================

import * as THREE from 'three';
import { makeStarSprite, makeNebulaSprite } from './textures.js?v=35';
import { CONSTELLATIONS } from './data.js?v=35';

const R = 20000;   // 星球半径（远景球壳）
const TILT = 0.5;  // 银道面倾角（与银河带一致）
function skyDir(raH, decD) {
  const ra = raH * 15 * Math.PI / 180, dec = decD * Math.PI / 180;
  let x = Math.cos(dec) * Math.cos(ra), y = Math.sin(dec), z = -Math.cos(dec) * Math.sin(ra);
  const ct = Math.cos(TILT), st = Math.sin(TILT);
  const y2 = y * ct - x * st, x2 = y * st + x * ct;
  return new THREE.Vector3(x2, y2, z).normalize();
}

function rand(seedRef) { seedRef.s = (seedRef.s * 16807 + 11) % 2147483647; return seedRef.s / 2147483647; }

// 恒星色温：蓝白 → 白 → 暖黄 → 橙红
function starColor(t) {
  const stops = [
    [0.0, [155, 176, 255]], [0.25, [190, 210, 255]], [0.5, [255, 255, 250]],
    [0.75, [255, 228, 180]], [1.0, [255, 180, 130]],
  ];
  let a = stops[0], b = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i++) if (t >= stops[i][0] && t <= stops[i + 1][0]) { a = stops[i]; b = stops[i + 1]; }
  const f = (t - a[0]) / (b[0] - a[0] || 1);
  return [a[1][0] + (b[1][0] - a[1][0]) * f, a[1][1] + (b[1][1] - a[1][1]) * f, a[1][2] + (b[1][2] - a[1][2]) * f];
}

function buildStarLayer(count, size, opacity, seed, bandBias = 0) {
  const ref = { s: seed };
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // bandBias>0 时向银河平面聚集（银河取 x-z 平面再倾斜 60°）
    let x = rand(ref) * 2 - 1, y = rand(ref) * 2 - 1, z = rand(ref) * 2 - 1;
    const l = Math.hypot(x, y, z) || 1; x /= l; y /= l; z /= l;
    if (bandBias > 0 && rand(ref) < bandBias) {
      y *= 0.06 + rand(ref) * 0.10;                       // 压扁
      const tilt = 0.5;                                   // 银道面倾斜
      const y2 = y * Math.cos(tilt) - x * Math.sin(tilt);
      const x2 = y * Math.sin(tilt) + x * Math.cos(tilt);
      x = x2; y = y2;
    }
    pos[i * 3] = x * R; pos[i * 3 + 1] = y * R; pos[i * 3 + 2] = z * R;
    const c = starColor(rand(ref));
    const b = 0.55 + rand(ref) * 0.45;
    col[i * 3] = c[0] / 255 * b; col[i * 3 + 1] = c[1] / 255 * b; col[i * 3 + 2] = c[2] / 255 * b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({
    size, map: new THREE.CanvasTexture(makeStarSprite()), transparent: true, opacity,
    vertexColors: true, sizeAttenuation: false, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  return new THREE.Points(geo, mat);
}

export function createDeepSpace() {
  const group = new THREE.Group();

  group.add(buildStarLayer(3500, 1.1, 0.75, 12345, 0));      // 弥散远景
  group.add(buildStarLayer(2500, 1.8, 0.9, 54321, 0.55));    // 银河带
  group.add(buildStarLayer(700, 2.6, 1.0, 999, 0.75));       // 银河亮星
  group.add(buildStarLayer(180, 4.0, 1.0, 777, 0));          // 近景亮星

  // 银河尘埃带（暖褐星云团块沿带分布）
  const ref = { s: 24680 };
  const nebTex1 = new THREE.CanvasTexture(makeNebulaSprite(28));
  const nebTex2 = new THREE.CanvasTexture(makeNebulaSprite(18));
  for (let i = 0; i < 36; i++) {
    const ang = rand(ref) * Math.PI * 2;
    const spread = (rand(ref) - 0.5) * 0.5;
    const r = R * 0.92;
    const x = Math.cos(ang) * r, z = Math.sin(ang) * r;
    const y = spread * r * 0.12;
    const tilt = 0.5;
    const y2 = y * Math.cos(tilt) - x * Math.sin(tilt);
    const x2 = y * Math.sin(tilt) + x * Math.cos(tilt);
    const size = 4000 + rand(ref) * 9000;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: i % 2 ? nebTex1 : nebTex2, transparent: true, opacity: 0.24 + rand(ref) * 0.24,
      depthWrite: false, blending: THREE.NormalBlending, rotation: rand(ref) * Math.PI * 2,
    }));
    sp.position.set(x2, y2, z);
    sp.scale.setScalar(size);
    group.add(sp);
  }

  // 星座：连线 + 亮星
  const constGroup = new THREE.Group();
  const lineMat = new THREE.LineBasicMaterial({ color: 0xcbb287, transparent: true, opacity: 0.34 });
  window.__constData = [];
  for (const c of CONSTELLATIONS) {
    const dirs = c.stars.map(([ra, dec]) => skyDir(ra, dec).multiplyScalar(R * 0.995));
    const pts = [];
    for (const [a, b] of c.lines) { pts.push(dirs[a], dirs[b]); }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    constGroup.add(new THREE.LineSegments(geo, lineMat));
    // 亮星点
    const sp = new Float32Array(dirs.length * 3);
    dirs.forEach((d, i) => { sp[i * 3] = d.x; sp[i * 3 + 1] = d.y; sp[i * 3 + 2] = d.z; });
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    constGroup.add(new THREE.Points(sg, new THREE.PointsMaterial({
      map: new THREE.CanvasTexture(makeStarSprite()), color: 0xfff3dd, size: 9,
      sizeAttenuation: false, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending })));
    const center = dirs.reduce((acc, d) => acc.add(d.clone().normalize()), new THREE.Vector3()).normalize().multiplyScalar(R * 0.99);
    window.__constData.push({ id: c.id, en: c.en, cn: c.cn, desc: c.desc, img: c.img, center });
  }
  constGroup.name = 'constellations';
  group.add(constGroup);

  return group;
}
