// ============================================================
//  loading-boot.js — 启动屏即时动画（经典脚本，不等任何模块）
//  星系旋转动画以前由 main.js（ES 模块）启动，但模块要等
//  three.js + 全部场景代码下载解析完才执行，那段时间加载屏是死的。
//  所以"画"的部分拆成普通脚本，页面解析到这里就立刻开始转；
//  js/loading.js 仍负责把 THREE LoadingManager 的真实进度接进来。
// ============================================================

(function () {
  'use strict';
  const root = document.getElementById('loading');
  if (!root) return;

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
    // 点数随画布面积走（保持视觉密度），设上限防超大视口一次性渲染过重；
    // 点尺寸也等比放大，否则大画布里星点会小得看不见
    const density = Math.min(4.2, (size / 372) * (size / 372));
    const px = Math.max(1, size / 450);
    const ARMS = 2, TWIST = 2.15, N = Math.round(11000 * density);
      for (let i = 0; i < N; i++) {
        const t = Math.pow(rnd(), 0.55);
        const r = R * (0.09 + t * 0.88);
        const arm = i % ARMS;
        const jitter = (1 - t) * 0.78 + 0.22;
        const a = arm * (Math.PI * 2 / ARMS) + Math.log(r / R * 3.2) * TWIST
                + (rnd() - 0.5) * jitter * 2.4;
        const rr = r * (0.90 + rnd() * 0.20);
        const x = cx + Math.cos(a) * rr;
        const y = cy + Math.sin(a) * rr * 0.58 + (rnd() - 0.5) * 2.4 * px;

        // 内圈偏金、外圈偏蓝；亮度随半径衰减
        const warmth = Math.max(0, 1 - t * 2.1);
        const lum = 0.10 + rnd() * 0.30 * (1 - t * 0.5);
        g.fillStyle = `rgba(${Math.round(190 + warmth * 65)},${Math.round(205 - warmth * 15)},${Math.round(255 - warmth * 55)},${lum.toFixed(3)})`;
        const s = (rnd() < 0.03 ? 1.2 : 0.58) * px;
        g.beginPath(); g.arc(x, y, s, 0, Math.PI * 2); g.fill();
      }

      // 少量亮星点缀（要有层次，不然全是雾）
      const NBRIGHT = Math.round(260 * density);
      for (let i = 0; i < NBRIGHT; i++) {
        const t = Math.pow(rnd(), 0.6);
        const r = R * (0.10 + t * 0.84);
        const arm = i % ARMS;
        const a = arm * (Math.PI * 2 / ARMS) + Math.log(r / R * 3.2) * TWIST + (rnd() - 0.5) * 0.6;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r * 0.58;
        g.fillStyle = `rgba(255,250,240,${(0.30 + rnd() * 0.45).toFixed(2)})`;
        g.beginPath(); g.arc(x, y, (1.1 + rnd() * 1.2) * px, 0, Math.PI * 2); g.fill();
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
        g.beginPath(); g.arc(x, y, (rnd() < 0.2 ? 1.5 : 0.8) * Math.max(1, size / 450), 0, Math.PI * 2); g.fill();
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

  // ---- 背景星点 ----
  const stars = root.querySelector('.stars');
  if (stars) {
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
  }

  // ---- 星系：预渲染两层，逐帧差速旋转（全屏背景填充）----
  // 星系不再是一块居中的小画布，而是按视口尺寸渲染、铺满整个背景：
  // 没有画布边缘，旋臂自然伸出屏幕外，文字叠在星系之上。
  const canvas = root.querySelector('.galaxy');
  let gctx = null, discC = null, coreC = null;
  const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
  if (canvas && canvas.getContext) {
    gctx = canvas.getContext('2d');
    const fit = () => {
      const w = root.clientWidth || window.innerWidth;
      const h = root.clientHeight || window.innerHeight;
      canvas.width = Math.max(2, Math.round(w * DPR));
      canvas.height = Math.max(2, Math.round(h * DPR));
      // 星系横向直径 ≈ 视口短边（旋臂略微伸出屏幕，看不到边界）
      const cssMin = Math.min(w, h);
      discC = makeLayer(cssMin * 1.04, DPR, 'disc');
      coreC = makeLayer(cssMin * 1.04, DPR, 'core');
    };
    fit();
    window.addEventListener('resize', fit);
  }

  const t0 = performance.now();
  let value = 0, finished = false, raf = 0;

  const drawGalaxy = now => {
    const t = (now - t0) / 1000;
    if (gctx && discC) {
      const W = canvas.width, H = canvas.height;
      gctx.setTransform(1, 0, 0, 1, 0, 0);
      gctx.clearRect(0, 0, W, H);
      // 星系中心略高于屏幕中心：给下方的标题与进度条留出舞台
      gctx.translate(W / 2, H * 0.42);

      // 盘面：慢速反向自转
      gctx.save();
      gctx.rotate(-t * 0.045);
      gctx.drawImage(discC, -discC.width / 2, -discC.height / 2);
      gctx.restore();

      // 核球：略快，带极缓呼吸
      const pulse = 1 + Math.sin(t * 0.9) * 0.012;
      gctx.save();
      gctx.rotate(t * 0.028);
      gctx.scale(pulse, pulse);
      gctx.globalAlpha = 0.92 + Math.sin(t * 0.9) * 0.06;
      gctx.drawImage(coreC, -coreC.width / 2, -coreC.height / 2);
      gctx.restore();
    }
    if (!finished) raf = requestAnimationFrame(drawGalaxy);
  };
  if (gctx) raf = requestAnimationFrame(drawGalaxy);

  const track = root.querySelector('.track i');
  const pctEl = root.querySelector('.pct');
  const stZh = root.querySelector('.status b');
  const stEn = root.querySelector('.status em');

  const paint = v => {
    value = Math.max(value, Math.min(1, Number.isFinite(v) ? v : 0));
    const p = Math.round(value * 100);
    if (track) track.style.width = p + '%';
    if (pctEl) pctEl.textContent = p + '%';
  };

  // ---- 状态文案轮播 ----
  let pi = 0;
  const sayPhrase = () => {
    if (!stZh || !stEn) return;
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
    if (stZh) stZh.textContent = '准备就绪';
    if (stEn) stEn.textContent = 'READY';
    setTimeout(() => root.classList.add('done'), 300);
  };

  const scheduleFinish = (minMs = 1700) => {
    const wait = Math.max(0, minMs - (performance.now() - t0));
    setTimeout(finish, wait + 240);
  };

  // 兜底：就算场景模块整个加载失败，加载屏也要能自己退场
  setTimeout(finish, 9000);
  setTimeout(() => { if (value === 0) paint(0.35); }, 700);

  // 交给 js/loading.js（在 three.js 模块里）接入真实加载进度
  window.__loadingBoot = {
    paint: v => paint(v),
    scheduleFinish,
    finish,
    get value() { return value; },
    get finished() { return finished; },
  };
})();
