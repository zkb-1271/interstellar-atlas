// ============================================================
//  loading-boot.js — 启动屏即时演出（经典脚本，不等任何模块）
//  背景 = 真实的银河全景图（assets/tex/sky/milky-way-8k.jpg，
//  与场景天球是同一张图，顺带完成预加载）＋前景微尘星点；
//  加载进度、文案轮播、退场流程也在这里。
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

  // ---- 背景微尘星点（叠在银河图上，加一层前景纵深）----
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

  const track = root.querySelector('.track i');
  const pctEl = root.querySelector('.pct');
  const stZh = root.querySelector('.status b');
  const stEn = root.querySelector('.status em');

  const t0 = performance.now();
  let value = 0, finished = false;

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
