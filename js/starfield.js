// ============================================================
//  starfield.js — 深空背景：三层恒星 + 银河带 + 星云
// ============================================================

import * as THREE from 'three';
import { makeStarSprite, makeNebulaSprite } from './textures.js?v=204';
import { CONSTELLATIONS, NEBULAE } from './data.js?v=204';
import { assetURL } from './assets.js?v=204';

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

function buildStarLayer(count, size, opacity, seed, bandBias = 0, warm = 0, yThick = 0.16) {
  const ref = { s: seed };
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // bandBias>0 时向银河平面聚集（银河取 x-z 平面再倾斜 60°）
    let x = rand(ref) * 2 - 1, y = rand(ref) * 2 - 1, z = rand(ref) * 2 - 1;
    const l = Math.hypot(x, y, z) || 1; x /= l; y /= l; z /= l;
    if (bandBias > 0 && rand(ref) < bandBias) {
      y *= yThick * (0.4 + rand(ref) * 0.9);                       // 压扁
      const tilt = 0.5;                                   // 银道面倾斜
      const y2 = y * Math.cos(tilt) - x * Math.sin(tilt);
      const x2 = y * Math.sin(tilt) + x * Math.cos(tilt);
      x = x2; y = y2;
    }
    pos[i * 3] = x * R; pos[i * 3 + 1] = y * R; pos[i * 3 + 2] = z * R;
    let c = starColor(rand(ref));
    if (warm > 0) c = [c[0] + (255 - c[0]) * warm, c[1] + (240 - c[1]) * warm, c[2] + (215 - c[2]) * warm];
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

  // 真实银河全景天球（NASA/Spitzer GLIMPSE 全景，合成 8192×4096）
  const skyTex = new THREE.TextureLoader().load(assetURL('assets/tex/sky/milky-way-4k.jpg'));
  skyTex.colorSpace = THREE.SRGBColorSpace;
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(R * 0.985, 64, 40),
    new THREE.MeshBasicMaterial({
      map: skyTex, side: THREE.BackSide, color: 0xd4d0ca,
      depthWrite: false, depthTest: false,     // 纯背景板：不参与深度，避免和 20000 半径的星点 z-fighting
    }));
  sky.renderOrder = -1000;
  window.__sky = sky;
  // 天球朝向：保持贴图原始朝向，银河带正好从右上方斜穿到左下方，
  // 是太阳系总览里最好看的角度（扫了 48 个朝向挑出来的）。
  // 以前为了躲开贴图接缝转过 y=π，结果把银河整个转出了画面，只剩右边缘一条。
  // ⚠️ 别给天球加 X 轴倾斜：贴图的极点会被压进视野，出现放射状条纹。
  sky.rotation.set(0, 0, 0);
  skyTex.wrapS = THREE.RepeatWrapping;
  group.add(sky);

  group.add(buildStarLayer(3500, 1.1, 0.75, 12345, 0));      // 弥散远景
  group.add(buildStarLayer(2600, 1.8, 0.9, 54321, 0.55));    // 银河带
  group.add(buildStarLayer(700, 2.6, 1.0, 999, 0.75));       // 银河亮星
  group.add(buildStarLayer(180, 4.2, 1.0, 777, 0));          // 近景亮星
  // 白色微尘：参考站那种细碎密集的星尘（颗粒是银河的骨架）
  group.add(buildStarLayer(16000, 1.0, 0.55, 31337, 0.92, 0.72));
  group.add(buildStarLayer(9000, 1.5, 0.6, 42424, 0.88, 0.55));
  group.add(buildStarLayer(3600, 2.4, 0.65, 51515, 0.8, 0.4));

  // 星座：每个星座独立材质，才能单独高亮（瞄准哪条就亮哪条）
  const constGroup = new THREE.Group();
  window.__constData = [];
  const recs = [];
  for (const c of CONSTELLATIONS) {
    const dirs = c.stars.map(([ra, dec]) => skyDir(ra, dec).multiplyScalar(R * 0.995));
    const pts = [];
    for (const [a, b] of c.lines) { pts.push(dirs[a], dirs[b]); }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xd8c49a, transparent: true, opacity: 0.26,
      blending: THREE.AdditiveBlending, depthWrite: false });
    const lines = new THREE.LineSegments(geo, lineMat);
    constGroup.add(lines);

    // 亮星点：halo + core 双层
    const sp = new Float32Array(dirs.length * 3);
    dirs.forEach((d, i) => { sp[i * 3] = d.x; sp[i * 3 + 1] = d.y; sp[i * 3 + 2] = d.z; });
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    const haloMat = new THREE.PointsMaterial({
      map: new THREE.CanvasTexture(makeStarSprite()), color: 0xfff3dd, size: 14,
      sizeAttenuation: false, transparent: true, opacity: 0.30, depthWrite: false, blending: THREE.AdditiveBlending });
    const coreMat = new THREE.PointsMaterial({
      map: new THREE.CanvasTexture(makeStarSprite()), color: 0xfff8ea, size: 5.5,
      sizeAttenuation: false, transparent: true, opacity: 0.92, depthWrite: false, blending: THREE.AdditiveBlending });
    constGroup.add(new THREE.Points(sg, haloMat));
    constGroup.add(new THREE.Points(sg, coreMat));

    const center = dirs.reduce((acc, d) => acc.add(d.clone().normalize()), new THREE.Vector3()).normalize().multiplyScalar(R * 0.99);
    const rec = { id: c.id, en: c.en, cn: c.cn, desc: c.desc, img: c.img, center,
                  lineMat, haloMat, coreMat };
    recs.push(rec);
    window.__constData.push(rec);
  }

  // 瞄准高亮：目标星座连线变金、星点变亮变大，其余压暗
  constGroup.userData.setHighlight = (id) => {
    for (const r of recs) {
      const on = r.id === id;
      const rest = id ? 0.45 : 1;      // 有目标时，其它星座整体压暗
      r.lineMat.opacity = on ? 0.92 : 0.26 * rest;
      r.lineMat.color.setHex(on ? 0xffe2a8 : 0xd8c49a);
      r.haloMat.opacity = (on ? 0.8 : 0.22) * (on ? 1 : rest);
      r.haloMat.size = on ? 16 : 14;
      r.coreMat.opacity = on ? 1 : 0.85 * rest;
      r.coreMat.size = on ? 7.5 : 5.5;
    }
  };
  constGroup.name = 'constellations';
  group.add(constGroup);

  // ---------- 远处星云：按真实赤经赤纬摆放，落在各自的星座里 ----------
  // 每一个都可悬停高亮、可点开档案（和星座用同一套侧边卡）
  const nebGroup = new THREE.Group();
  window.__nebData = [];
  const nebRecs = [];
  for (const n of NEBULAE) {
    const dir = skyDir(n.ra, n.dec);
    const cv = makeNebulaSprite(n.hue, 512, n.rgb);
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    const baseOp = n.size > 4400 ? 0.22 : 0.28;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, opacity: baseOp, depthWrite: false,
      blending: THREE.AdditiveBlending }));
    const pos = dir.clone().multiplyScalar(R * 0.93);
    sp.position.copy(pos);
    sp.scale.setScalar(n.size);
    nebGroup.add(sp);
    // 卡片配图：把带 alpha 的星云贴图叠到深底上（叠加两次提亮），
    // 否则直接导 JPEG 会得到一整块全黑的图。
    const card = document.createElement('canvas');
    card.width = card.height = 360;
    const g2 = card.getContext('2d');
    g2.fillStyle = '#05060a'; g2.fillRect(0, 0, 360, 360);
    g2.globalCompositeOperation = 'lighter';
    g2.drawImage(cv, 0, 0, 360, 360);
    g2.drawImage(cv, 0, 0, 360, 360);
    // 卡片配图：优先用真实天文照片（data 里的 img），没有才退回画布合成
    const realImg = n.img ? assetURL(n.img) : null;
    const rec = { id: n.id, info: n, center: pos.clone(), size: n.size,
                  sprite: sp, baseOp, img: realImg || card.toDataURL('image/jpeg', 0.88) };
    nebRecs.push(rec);
    window.__nebData.push(rec);
  }
  // 瞄准高亮：被瞄的那团变亮，其余压暗
  nebGroup.userData.setHighlight = (id) => {
    for (const r of nebRecs) {
      r.sprite.material.opacity = r.id === id ? Math.min(0.72, r.baseOp * 2.6)
                                              : r.baseOp * (id ? 0.55 : 1);
    }
  };
  nebGroup.name = 'nebulae';
  group.add(nebGroup);

  return group;
}
