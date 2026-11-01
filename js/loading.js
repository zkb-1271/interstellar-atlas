// ============================================================
//  loading.js — 开场加载屏：旋转螺旋星系 + 真实贴图进度
//  星系是"预渲染两层 + 差速自转"：把几千颗星一次性画进离屏 canvas，
//  每帧只做两次 drawImage(rotate)，几乎零开销，旋转又非常顺滑。
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

// ---- 预渲染星系的两层图层 ----
function makeLayer(size, dpr, kind) {
  const c = document.createElement('canvas');
  c.width = Math.round(size * dpr);
  c.height = Math.round(size * dpr);
  const g = c.getContext('2d');
  g.scale(dpr, dpr);
  const R = size / 2;
  const cx = R, cy = R;

  // 确定性随机，保证每次刷新是同一个星系
  let seed = kind === 'core' ? 9173 : 42013;
  const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;

  g.globalCompositeOperation = 'lighter';

  if (kind === 'disc') {
    // 盘面雾：贴着旋臂的一层极淡银蓝
    const halo = g.createRadialGradient(cx, cy, R * 0.03, cx, cy, R * 0.86);
    halo.addColorStop(0, 'rgba(150,165,210,0.10)');
    halo.addColorStop(0.45, 'rgba(110,130,180,0.055)');
    halo.addColorStop(1, 'rgba(80,100,150,0)');
    g.fillStyle = halo;
    g.beginPath(); g.ellipse(cx, cy, R * 0.86, R * 0.52, 0, 0, Math.PI * 2); g.fill();

    // 对数旋臂：大量细点，单点透明度压低，靠密度堆出连续感
    const ARMS = 2, TWIST = 2.15, N = 11000;
    for (let i = 0; i < N; i++) {
      const t = Math.pow(rnd(), 0.55);
      const r = R * (0.09 + t * 0.88);
      const arm = i % ARMS;
      const jitter = (1 - t) * 0.78 + 0.22;
      const a = arm * (Math.PI * 2 / ARMS) + Math.log(r / R * 3.2) * TWIST
              + (rnd() - 0.5) * jitter * 2.4;
      const rr = r * (0.90 + rnd() * 0.20);
      const x = cx + Math.cos(a) * rr;
      const y = cy + Math.sin(a) * rr * 0.58 + (rnd() - 0.5) * 2.4;

      // 内圈偏金、外圈偏蓝；亮度随半径衰减
      const warmth = Math.max(0, 1 - t * 2.1);
      const lum = 0.10 + rnd() * 0.30 * (1 - t * 0.5);
      g.fillStyle = `rgba(${Math.round(190 + warmth * 65)},${Math.round(205 - warmth * 15)},${Math.round(255 - warmth * 55)},${lum.toFixed(3)})`;
      const s = rnd() < 0.03 ? 1.2 : 0.58;
      g.beginPath(); g.arc(x, y, s, 0, Math.PI * 2); g.fill();
    }

    // 少量亮星点缀（要有层次，不然全是雾）
    for (let i = 0; i < 260; i++) {
      const t = Math.pow(rnd(), 0.6);
      const r = R * (0.10 + t * 0.84);
      const arm = i % ARMS;
      const a = arm * (Math.PI * 2 / ARMS) + Math.log(r / R * 3.2) * TWIST + (rnd() - 0.5) * 0.6;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r * 0.58;
      g.fillStyle = `rgba(255,250,240,${(0.30 + rnd() * 0.45).toFixed(2)})`;
      g.beginPath(); g.arc(x, y, 1.1 + rnd() * 1.2, 0, Math.PI * 2); g.fill();
    }
  } else {
    // 核球：暖白 → 金 → 透明
    const core = g.createRadialGradient(cx, cy, 0, cx, cy, R * 0.42);
    core.addColorStop(0, 'rgba(255,252,244,0.98)');
    core.addColorStop(0.16, 'rgba(255,238,205,0.80)');
    core.addColorStop(0.42, 'rgba(248,206,140,0.34)');
    core.addColorStop(0.72, 'rgba(230,170,90,0.10)');
    core.addColorStop(1, 'rgba(210,140,60,0)');
    g.fillStyle = core;
    g.beginPath(); g.ellipse(cx, cy, R * 0.42, R * 0.30, 0, 0, Math.PI * 2); g.fill();

    for (let i = 0; i < 900; i++) {
      const a = rnd() * Math.PI * 2;
      const r = Math.pow(rnd(), 2.4) * R * 0.30;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r * 0.72;
      g.fillStyle = `rgba(255,${Math.round(226 + rnd() * 26)},${Math.round(190 + rnd() * 50)},${(0.25 + rnd() * 0.6).toFixed(2)})`;
      g.beginPath(); g.arc(x, y, rnd() < 0.2 ? 1.5 : 0.8, 0, Math.PI * 2); g.fill();
    }
  }

  // 叠一层模糊副本 → 旋臂从"沙粒"变成柔和星云（画布 filter 不支持时自动退化为无效果）
  try {
    const tmp = document.createElement('canvas');
    tmp.width = c.width; tmp.height = c.height;
    const tg = tmp.getContext('2d');
    tg.filter = 'blur(3.2px)';
    tg.drawImage(c, 0, 0);
    g.globalCompositeOperation = 'lighter';
    g.globalAlpha = 0.75;
    g.drawImage(tmp, 0, 0);
    g.globalAlpha = 1;
  } catch (e) { /* 忽略 */ }

  return c;
}

export function initLoading({ minMs = 1700, maxMs = 24000 } = {}) {
  const root = document.getElementById('loading');
  if (!root) return;

  const track = root.querySelector('.track i');
  const pctEl = root.querySelector('.pct');
  const stZh = root.querySelector('.status b');
  const stEn = root.querySelector('.status em');
  const stars = root.querySelector('.stars');

  // —— 背景星点 ——
  let seed = 20260901;
  const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
  for (let i = 0; i < 150; i++) {
    const d = document.createElement('i');
    const size = 0.9 + Math.pow(rnd(), 2.2) * 2.1;
    d.style.left = (rnd() * 100).toFixed(2) + '%';
    d.style.top = (rnd() * 100).toFixed(2) + '%';
    d.style.width = d.style.height = size.toFixed(2) + 'px';
    d.style.opacity = (0.12 + rnd() * 0.55).toFixed(2);
    if (rnd() < 0.22) {
      d.classList.add('tw');
      d.style.animationDuration = (2.4 + rnd() * 4).toFixed(1) + 's';
      d.style.animationDelay = (-rnd() * 6).toFixed(1) + 's';
    }
    stars.appendChild(d);
  }

  // —— 星系：预渲染两层，逐帧差速旋转 ——
  const canvas = root.querySelector('.galaxy');
  const SIZE = 600, DPR = Math.min(devicePixelRatio || 1, 2);
  let gctx = null, discC = null, coreC = null;
  if (canvas) {
    canvas.width = Math.round(SIZE * DPR);
    canvas.height = Math.round(SIZE * DPR);
    gctx = canvas.getContext('2d');
    // 低分辨率预渲染再放大：省算力，也天然给星点加了抗锯齿柔化
    discC = makeLayer(SIZE * 0.62, DPR, 'disc');
    coreC = makeLayer(SIZE * 0.62, DPR, 'core');
  }

  const t0 = performance.now();
  let value = 0, finished = false, raf = 0;

  const drawGalaxy = now => {
    const t = (now - t0) / 1000;
    if (gctx) {
      const W = canvas.width, H = canvas.height;
      gctx.setTransform(1, 0, 0, 1, 0, 0);
      gctx.clearRect(0, 0, W, H);

      // 盘面：慢速反向自转
      gctx.save();
      gctx.translate(W / 2, H / 2);
      gctx.rotate(-t * 0.045);
      gctx.drawImage(discC, -W / 2, -H / 2, W, H);
      gctx.restore();

      // 核球：略快，带极缓呼吸
      const pulse = 1 + Math.sin(t * 0.9) * 0.012;
      gctx.save();
      gctx.translate(W / 2, H / 2);
      gctx.rotate(t * 0.028);
      gctx.scale(pulse, pulse);
      gctx.globalAlpha = 0.92 + Math.sin(t * 0.9) * 0.06;
      gctx.drawImage(coreC, -W / 2, -H / 2, W, H);
      gctx.restore();
    }
    if (!finished) raf = requestAnimationFrame(drawGalaxy);
  };
  if (gctx) raf = requestAnimationFrame(drawGalaxy);

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

  const M = THREE.DefaultLoadingManager;
  M.onProgress = (url, loaded, total) => { if (!finished) paint(loaded / Math.max(total, 1)); };
  M.onLoad = () => { if (!finished) scheduleFinish(); };

  setTimeout(finish, maxMs);
  setTimeout(() => { if (value === 0) paint(0.35); }, 700);

  window.__loading = { get value() { return value; }, finish };
}
