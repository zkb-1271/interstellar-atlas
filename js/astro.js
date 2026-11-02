// ============================================================
//  astro.js — 历法与轨道力学
//  JD(儒略日) ⇄ 公历、开普勒方程求解、行星/月球位置、连珠搜索
// ============================================================

import { ORBITAL_ELEMENTS, AU } from './data.js?v=191';

const DEG = Math.PI / 180;

// ============================================================
//  参考站（solar-system-atlas）实测公式 —— 全部从运行时/源码核实
// ============================================================
// 图谱折叠比例：示意排布时所有位置 ×0.46（参考站 Fs()，atlasPose=true 时）
export const SCHEMATIC = 0.46;
// 行星显示半径：0.0115 × km^0.42（参考站 VG，太阳半径 3.30、木星 1.245、地球 0.455）
export function displayRadius(km) {
  return 0.0115 * Math.pow(Math.max(km, 0.5), 0.42);
}
// 总览可视宽度（世界单位）：参考站 aee() = (kA+20 - (-17)) × 0.46，kA = er(39.48)+5
export const OVERVIEW_WIDTH = ((194 * 2 + 5) + 20 + 17) * SCHEMATIC;   // ≈ 197.8
// 总览视线中心 X：参考站 aee() = ((kA+20) + (-17)) / 2 × 0.46
export const OVERVIEW_CX = ((194 * 2 + 5) + 20 - 17) / 2 * SCHEMATIC; // ≈ 91.08

// 参考站距离压缩表：AU → 场景单位（分段线性 ×2）
const DIST_TABLE = [[0,0],[.387,16],[.723,28],[1,40],[1.524,55],[5.203,88],[9.537,122],[19.19,152],[30.07,175],[39.48,194]];
export function auToScene(au) {
  const a = Math.max(0, au);
  for (let i = 1; i < DIST_TABLE.length; i++) {
    const [c, d] = DIST_TABLE[i - 1], [f, h] = DIST_TABLE[i];
    if (a <= f) return (d + (h - d) * (a - c) / (f - c)) * 2;
  }
  const [n, i0] = DIST_TABLE[DIST_TABLE.length - 2], [a2, r2] = DIST_TABLE[DIST_TABLE.length - 1];
  return (r2 + (a - a2) * ((r2 - i0) / (a2 - n))) * 2;
}

export function dateToJD(date) {
  return date.getTime() / 86400000 + 2440587.5;
}
export function jdToDate(jd) {
  return new Date((jd - 2440587.5) * 86400000);
}
export function jdToCenturies(jd) {          // J2000 起的儒略世纪数
  return (jd - 2451545.0) / 36525;
}

// —— 参考站行星位置模型（照抄其 i$ 算法）——
export function refPosition(el, jd) {
  const year = 2000 + (jd - 2451545.0) / 365.25;
  const days = (year - 2000) * 365.25;
  const a = 360 / el.period;
  let r = (el.l0 + a * days) * DEG;
  const o = el.peri * DEG, O = el.node * DEG, inc = el.i * DEG;
  let d = r - o;
  d = Math.atan2(Math.sin(d), Math.cos(d));
  let f = d;
  for (let b = 0; b < 5; b++) f -= (f - el.e * Math.sin(f) - d) / (1 - el.e * Math.cos(f));
  const h = 2 * Math.atan2(Math.sqrt(1 + el.e) * Math.sin(f / 2), Math.sqrt(1 - el.e) * Math.cos(f / 2));
  const p = el.a * (1 - el.e * Math.cos(f));
  const g = h + (o - O);
  const v = p * (Math.cos(O) * Math.cos(g) - Math.sin(O) * Math.sin(g) * Math.cos(inc));
  const E2 = p * (Math.sin(O) * Math.cos(g) + Math.cos(O) * Math.sin(g) * Math.cos(inc));
  const x = p * Math.sin(g) * Math.sin(inc);
  return { lon: Math.atan2(E2, v), lat: Math.atan2(x, Math.hypot(v, E2)), ratio: p / el.a };
}

// 开普勒方程 M = E - e·sinE，牛顿迭代
function solveKepler(M, e) {
  let E = M;
  for (let i = 0; i < 8; i++) {
    const dE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= dE;
    if (Math.abs(dE) < 1e-9) break;
  }
  return E;
}

// 行星日心黄道坐标（three.js: x,y 平面为黄道面, y 向上）
// 返回 {pos: THREE-free [x,y,z] 场景单位, lon: 日心黄经 rad}
export function planetPosition(id, T) {
  return bodyPosition(PLANET_ELEMENTS_REF[id], T);
}

// 通用：任意轨道要素 → 场景坐标（彗星用同一套）
export function bodyPosition(el, T) {
  const jd = T * 36525 + 2451545.0;
  const ref = refPosition(el, jd);
  const h = auToScene(el.a) * ref.ratio * SCHEMATIC;
  return { pos: [Math.cos(ref.lon) * h, Math.sin(ref.lat) * h, Math.sin(ref.lon) * h], r: h, lon: ref.lon };
}

// 通用：采样一条轨道椭圆（画轨道线用）
// ⚠️ 半径必须和 bodyPosition 用同一套换算：auToScene(a) × (p/a)
//    早先这里写成 auToScene(p)，而 auToScene 是分段非线性压缩，
//    离心率大的天体（火星、彗星）轨道圈就会和实际位置明显错开。
export function orbitPointsFrom(el, n = 256) {
  const O = el.node * DEG, inc = el.i * DEG, w = el.peri * DEG - O;
  const base = auToScene(el.a);            // 半长轴对应的场景半径（固定不随 p 变）
  const pts = [];
  for (let k = 0; k < n; k++) {
    const M = (k / n) * 2 * Math.PI;
    let f = M;
    for (let b = 0; b < 5; b++) f -= (f - el.e * Math.sin(f) - M) / (1 - el.e * Math.cos(f));
    const h = 2 * Math.atan2(Math.sqrt(1 + el.e) * Math.sin(f / 2), Math.sqrt(1 - el.e) * Math.cos(f / 2));
    const ratio = 1 - el.e * Math.cos(f);          // = p / a
    const g = h + w;
    const v = (Math.cos(O) * Math.cos(g) - Math.sin(O) * Math.sin(g) * Math.cos(inc));
    const E2 = (Math.sin(O) * Math.cos(g) + Math.cos(O) * Math.sin(g) * Math.cos(inc));
    const x = Math.sin(g) * Math.sin(inc);
    const lon = Math.atan2(E2, v), lat = Math.atan2(x, Math.hypot(v, E2));
    const hU = base * ratio * SCHEMATIC;           // 与 bodyPosition 完全一致
    pts.push([Math.cos(lon) * hU, Math.sin(lat) * hU, Math.sin(lon) * hU]);
  }
  return pts;
}

// 同心导轨（示意排布模式用）：半径固定为压缩后的轨道距离，
// 行星在示意模式下就被摆在这个半径上，圈与星严丝合缝。
export function ringPoints(r, n = 256) {
  const pts = [];
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2;
    pts.push([Math.cos(a) * r, 0, Math.sin(a) * r]);
  }
  return pts;
}
// —— 参考站「示意排布」：所有行星按压缩轨道距离排在 +X 一条线上 ——
// 源码 jye(): r = Vye(t,e) 微扰；x = cos(r)·o；z = sin(r)·o·(1-ecc)；再 ×Fs()
// 这就是参考站总览"连珠式一字排开"的来源：不是真实历表，是图谱示意。
export function planetSchematic(id, t = 0) {
  const el = PLANET_ELEMENTS_REF[id];
  const o = auToScene(el.a);
  const amp = 0.9 / o;                        // 摆动幅度（参考站 Vye）
  const freq = 0.05 / Math.sqrt(o);
  const phase = SCHEMATIC_PHASE[id] ?? 0.1;
  const r = Math.sin(t * freq + phase * 5) * amp;
  const ecc = SCHEMATIC_ECC[id] ?? 0.02;
  const x = Math.cos(r) * o * SCHEMATIC;
  const z = Math.sin(r) * o * (1 - ecc) * SCHEMATIC;
  const y = Math.sin(r) * o * (1 - ecc) * Math.sin((el.i || 0) * DEG) * SCHEMATIC;
  return { pos: [x, y, z], r: Math.hypot(x, z) };
}

const SCHEMATIC_PHASE = { mercury: .02, venus: .07, earth: .12, mars: .17, jupiter: .22, saturn: .27, uranus: .32, neptune: .37 };
const SCHEMATIC_ECC = { mercury: .13, venus: .04, earth: .02, mars: .09, jupiter: .05, saturn: .05, uranus: .05, neptune: .01 };

const PLANET_ELEMENTS_REF = {
  mercury: {a:.3871,e:.2056,i:7.005,node:48.331,peri:77.456,l0:252.251,period:87.969},
  venus: {a:.7233,e:.0068,i:3.395,node:76.68,peri:131.533,l0:181.98,period:224.701},
  earth: {a:1,e:.0167,i:0,node:0,peri:102.937,l0:100.464,period:365.256},
  mars: {a:1.5237,e:.0934,i:1.85,node:49.558,peri:336.041,l0:355.433,period:686.98},
  jupiter: {a:5.2029,e:.0484,i:1.304,node:100.464,peri:14.331,l0:34.351,period:4332.589},
  saturn: {a:9.5367,e:.0539,i:2.486,node:113.666,peri:93.057,l0:50.077,period:10759.22},
  uranus: {a:19.1892,e:.0473,i:.773,node:74.006,peri:173.005,l0:314.055,period:30685.4},
  neptune: {a:30.0699,e:.0086,i:1.77,node:131.784,peri:48.124,l0:304.348,period:60189}
};

// 行星轨道（画轨道线用）
export function planetOrbitPoints(id, T, n = 256) {
  return orbitPointsFrom(PLANET_ELEMENTS_REF[id], n);
}

// —— 月球（Meeus 简化截断，精度 ~1°，够演示月食）——
export function moonPosition(T) {
  const d = T * 36525;                       // 距 J2000 天数
  const Lm = (218.316 + 13.176396 * d) * DEG;          // 平黄经
  const Mm = (134.963 + 13.064993 * d) * DEG;          // 平近点角
  const F  = (93.272 + 13.229350 * d) * DEG;           // 升交点角距
  const lam = Lm + 6.289 * DEG * Math.sin(Mm);         // 黄经
  const bet = 5.128 * DEG * Math.sin(F);               // 黄纬
  const rKM = 385001 - 20905 * Math.cos(Mm);           // 距离 km
  // 视觉轨道半径 10 单位 ≈ 22 个地球半径（真实 60.3 个，压缩但不再是
  // "贴脸"的 2.4 个）；月球半径已改为真实比例 0.273×地球
  const r = 10.0 * rKM / 385000;
  const cl = Math.cos(bet);
  const x = r * cl * Math.cos(lam), ye = r * cl * Math.sin(lam), z = r * Math.sin(bet);
  return { pos: [x, z, -ye], r, lon: lam };
}

// 地心视角下某行星的视黄经（用于连珠搜索）
export function geocentricLon(pid, T) {
  const p = planetPosition(pid, T);
  const e = planetPosition('earth', T);
  const dx = p.pos[0] - e.pos[0], dz = p.pos[2] - e.pos[2];
  return Math.atan2(-dz, dx);   // 黄经：x→λ0, -z→λ90（与 planetPosition 的映射一致）
}

function circSpread(lons) {   // 一组角度的最小覆盖弧长
  const s = lons.map(l => ((l % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)).sort((a, b) => a - b);
  let maxGap = 0;
  for (let i = 0; i < s.length; i++) {
    const gap = (i === s.length - 1 ? s[0] + 2 * Math.PI : s[i + 1]) - s[i];
    if (gap > maxGap) maxGap = gap;
  }
  return 2 * Math.PI - maxGap;
}

// 在 [jd0, jd0+days] 内搜索"五星连珠"（水金火木土）：
// 取地心视黄经跨度的局部谷值（跨度越小越"连"），十年内最小也有 ~65°，故放宽至 135°
export function findAlignments(jd0, days = 3650, step = 2) {
  const ids = ['mercury', 'venus', 'mars', 'jupiter', 'saturn'];
  const vals = [];
  for (let d = 0; d <= days; d += step) {
    const T = jdToCenturies(jd0 + d);
    const spread = circSpread(ids.map(id => geocentricLon(id, T))) / DEG;
    vals.push([d, spread]);
  }
  const valleys = [];
  for (let i = 1; i < vals.length - 1; i++) {
    if (vals[i][1] <= vals[i - 1][1] && vals[i][1] <= vals[i + 1][1] && vals[i][1] <= 135) {
      valleys.push({ jd: jd0 + vals[i][0], spread: vals[i][1] });
    }
  }
  // 相邻谷去重（间隔 < 90 天留更小的），按时间取前 6
  const kept = [];
  for (const ev of valleys) {
    const last = kept[kept.length - 1];
    if (last && ev.jd - last.jd < 90) {
      if (ev.spread < last.spread) kept[kept.length - 1] = ev;
      continue;
    }
    kept.push(ev);
  }
  return kept.slice(0, 6);
}

export function fmtDate(jd) {
  const d = jdToDate(jd);
  const p = n => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}.${p(d.getUTCMonth() + 1)}.${p(d.getUTCDate())}`;
}
export function fmtDateTime(jd) {
  const d = jdToDate(jd);
  const p = n => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}.${p(d.getUTCMonth() + 1)}.${p(d.getUTCDate())} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())} UTC`;
}

// —— 本地时区版（底部时间栏/顶栏时钟用）——
// 模拟时刻本身无时区，展示成用户手表上的时间才不会"看起来差 8 小时"
export function fmtDateLocal(jd) {
  const d = jdToDate(jd);
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`;
}
export function fmtTimeLocal(jd) {
  const d = jdToDate(jd);
  const p = n => String(n).padStart(2, '0');
  return `${p(d.getHours())}:${p(d.getMinutes())}`;
}
