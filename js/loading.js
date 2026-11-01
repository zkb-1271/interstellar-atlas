// ============================================================
//  loading.js — 开场加载屏：星点 + 轨道仪动画 + 真实贴图进度
//  进度来自 THREE.DefaultLoadingManager（场景里所有 TextureLoader
//  默认都挂在它上面），所以百分比是真加载量，不是假动画。
// ============================================================

import * as THREE from 'three';

const PHRASES = [
  ['正在校准星历表', 'CALIBRATING EPHEMERIS'],
  ['正在拼接银河天球', 'COMPOSITING MILKY WAY'],
  ['正在解析行星贴图', 'PARSING SURFACE MAPS'],
  ['正在建立黄道坐标', 'ALIGNING ECLIPTIC FRAME'],
  ['正在点亮恒星目录', 'IGNITING STAR CATALOGUE'],
];

export function initLoading({ minMs = 1500, maxMs = 24000 } = {}) {
  const root = document.getElementById('loading');
  if (!root) return;

  const track = root.querySelector('.track i');
  const pctEl = root.querySelector('.pct');
  const stZh = root.querySelector('.status b');
  const stEn = root.querySelector('.status em');
  const stars = root.querySelector('.stars');

  // —— 背景星点（确定性散布，避免每帧抖动）——
  let seed = 20260901;
  const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
  for (let i = 0; i < 150; i++) {
    const d = document.createElement('i');
    const size = 0.9 + Math.pow(rnd(), 2.2) * 2.1;          // 少量大星，多数细点
    d.style.left = (rnd() * 100).toFixed(2) + '%';
    d.style.top = (rnd() * 100).toFixed(2) + '%';
    d.style.width = d.style.height = size.toFixed(2) + 'px';
    d.style.opacity = (0.12 + rnd() * 0.55).toFixed(2);
    if (rnd() < 0.22) {                                      // 一部分轻微闪烁
      d.classList.add('tw');
      d.style.animationDuration = (2.4 + rnd() * 4).toFixed(1) + 's';
      d.style.animationDelay = (-rnd() * 6).toFixed(1) + 's';
    }
    stars.appendChild(d);
  }

  const t0 = performance.now();
  let value = 0, finished = false;
  let raf = 0;

  // —— 轨道仪：行星沿椭圆精确走位（不用 CSS 旋转，免得被压成椭圆）——
  const SUN = { x: 0, y: 0 };   // 坐标是 <g transform="translate(180,178)"> 的局部空间
  const ORBITS = [
    { sel: '.pj', rx: 132, ry: 50.2, period: 34, dir: 1, phase: 0.4 },
    { sel: '.ps', rx: 104, ry: 39.5, period: 23, dir: -1, phase: 2.1 },
    { sel: '.pe', rx: 76,  ry: 28.9, period: 15, dir: 1, phase: 4.0 },
    { sel: '.pm', rx: 48,  ry: 18.2, period: 9,  dir: -1, phase: 1.2 },
  ].map(o => ({ ...o, el: root.querySelector(o.sel) })).filter(o => o.el);

  const tick = now => {
    const t = (now - t0) / 1000;
    for (const o of ORBITS) {
      const a = o.phase + o.dir * (Math.PI * 2 * t) / o.period;
      o.el.setAttribute('cx', (SUN.x + Math.cos(a) * o.rx).toFixed(2));
      o.el.setAttribute('cy', (SUN.y + Math.sin(a) * o.ry).toFixed(2));
    }
    if (!finished) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  const paint = v => {
    value = Math.max(value, Math.min(1, Number.isFinite(v) ? v : 0));
    const p = Math.round(value * 100);
    track.style.width = p + '%';
    pctEl.textContent = p + '%';
  };

  // —— 状态文案轮播 ——
  let pi = 0;
  const sayPhrase = () => {
    const [zh, en] = PHRASES[pi % PHRASES.length];
    pi++;
    stZh.textContent = zh;
    stEn.textContent = en;
  };
  sayPhrase();
  const phraseTimer = setInterval(sayPhrase, 1900);

  const finish = () => {
    if (finished) return;
    finished = true;
    clearInterval(phraseTimer);
    if (raf) cancelAnimationFrame(raf);
    paint(1);
    stZh.textContent = '准备就绪';
    stEn.textContent = 'READY';
    setTimeout(() => root.classList.add('done'), 300);
  };

  const scheduleFinish = () => {
    const wait = Math.max(0, minMs - (performance.now() - t0));
    setTimeout(finish, wait + 240);
  };

  // —— 真实加载进度 ——
  const M = THREE.DefaultLoadingManager;
  M.onProgress = (url, loaded, total) => { if (!finished) paint(loaded / Math.max(total, 1)); };
  M.onLoad = () => { if (!finished) scheduleFinish(); };

  // 兜底：网络卡住或贴图走缓存时也必须收场
  setTimeout(finish, maxMs);
  // 没有贴图任务（全缓存）时，onLoad 可能早于挂钩，给一个最短展示
  setTimeout(() => { if (value === 0) paint(0.35); }, 700);

  // 供调试
  window.__loading = { get value() { return value; }, finish };
}
