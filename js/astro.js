// ============================================================
//  astro.js — 历法与轨道力学
//  JD(儒略日) ⇄ 公历、开普勒方程求解、行星/月球位置、连珠搜索
// ============================================================

import { ORBITAL_ELEMENTS, AU } from './data.js?v=43';

const DEG = Math.PI / 180;

export function dateToJD(date) {
  return date.getTime() / 86400000 + 2440587.5;
}
export function jdToDate(jd) {
  return new Date((jd - 2440587.5) * 86400000);
}
export function jdToCenturies(jd) {          // J2000 起的儒略世纪数
  return (jd - 2451545.0) / 36525;
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
  const el = ORBITAL_ELEMENTS[id];
  const a  = el.a[0] + el.a[1] * T;
  const e  = el.e[0] + el.e[1] * T;
  const I  = (el.I[0] + el.I[1] * T) * DEG;
  const L  = (el.L[0] + el.L[1] * T) * DEG;
  const w  = (el.w[0] + el.w[1] * T) * DEG;   // 近日点经度 ϖ
  const O  = (el.O[0] + el.O[1] * T) * DEG;   // 升交点 Ω
  const wArg = w - O;                          // 近点角距 ω
  let M = L - w;
  M = ((M % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
  const E = solveKepler(M, e);
  const xv = a * (Math.cos(E) - e);
  const yv = a * Math.sqrt(1 - e * e) * Math.sin(E);

  const cosO = Math.cos(O), sinO = Math.sin(O);
  const cosI = Math.cos(I), sinI = Math.sin(I);
  const cosw = Math.cos(wArg), sinw = Math.sin(wArg);

  const xh = xv * (cosO * cosw - sinO * sinw * cosI) - yv * (cosO * sinw + sinO * cosw * cosI);
  const yh = xv * (sinO * cosw + cosO * sinw * cosI) - yv * (sinO * sinw - cosO * cosw * cosI);
  const zh = xv * (sinw * sinI) + yv * (cosw * sinI);

  // 黄道坐标(xh 向春分点, zh 向北) → 场景(x, y=北, z)
  return { pos: [xh * AU, zh * AU, -yh * AU], r: Math.hypot(xh, yh, zh), lon: Math.atan2(yh, xh) };
}

// 轨道椭圆采样（画轨道线用）：给一组平近点角，返回场景坐标点列
export function planetOrbitPoints(id, T, n = 256) {
  const el = ORBITAL_ELEMENTS[id];
  const a  = el.a[0] + el.a[1] * T;
  const e  = el.e[0] + el.e[1] * T;
  const I  = (el.I[0] + el.I[1] * T) * DEG;
  const w  = (el.w[0] + el.w[1] * T) * DEG;
  const O  = (el.O[0] + el.O[1] * T) * DEG;
  const wArg = w - O;
  const cosO = Math.cos(O), sinO = Math.sin(O);
  const cosI = Math.cos(I), sinI = Math.sin(I);
  const cosw = Math.cos(wArg), sinw = Math.sin(wArg);
  const pts = [];
  for (let i = 0; i < n; i++) {
    const M = (i / n) * 2 * Math.PI;
    const E = solveKepler(M, e);
    const xv = a * (Math.cos(E) - e);
    const yv = a * Math.sqrt(1 - e * e) * Math.sin(E);
    const xh = xv * (cosO * cosw - sinO * sinw * cosI) - yv * (cosO * sinw + sinO * cosw * cosI);
    const yh = xv * (sinO * cosw + cosO * sinw * cosI) - yv * (sinO * sinw - cosO * cosw * cosI);
    const zh = xv * (sinw * sinI) + yv * (cosw * sinI);
    pts.push([xh * AU, zh * AU, -yh * AU]);
  }
  return pts;
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
  // 视觉轨道半径 26 单位（真实比例仅 0.257，行星尺寸已夸张，月轨同步放大）
  const r = 26 * rKM / 385000;
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
