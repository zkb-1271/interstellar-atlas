// ============================================================
//  ui.js — HUD：顶栏/标签页/时间栏/行星档案/天象面板/准星/标签
// ============================================================

import { QUOTES, PLANETS } from './data.js?v=95';
const PLANET_NAV = PLANETS;
import { fmtDateTime } from './astro.js?v=95';

const NS = 'http://www.w3.org/2000/svg';

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

const SPEEDS = [
  { v: 0, label: '∥ 暂停' },
  { v: 1 / 86400, label: '实时' },
  { v: 0.5, label: '半日/秒' },
  { v: 2, label: '2天/秒' },
  { v: 20, label: '20天/秒' },
  { v: 120, label: '120天/秒' },
];

export class UI {
  constructor(root, callbacks) {
    this.cb = callbacks;
    this.hoverId = null;

    // 准星光标
    this.reticle = el('div', '', `
      <svg width="34" height="34" viewBox="0 0 34 34">
        <g stroke="rgba(235,225,205,0.9)" stroke-width="1">
          <line x1="17" y1="2"  x2="17" y2="10"/><line x1="17" y1="24" x2="17" y2="32"/>
          <line x1="2"  y1="17" x2="10" y2="17"/><line x1="24" y1="17" x2="32" y2="17"/>
          <circle class="ring" cx="17" cy="17" r="13" fill="none" stroke="rgba(217,179,108,0.85)" stroke-width="1.1"/>
        </g>
        <circle cx="17" cy="17" r="1.6" fill="rgba(240,217,168,1)"/>
      </svg>`);
    this.reticle.id = 'reticle';
    root.appendChild(this.reticle);

    // SVG 覆盖层（标签连线 / 悬停金环）
    this.svg = document.createElementNS(NS, 'svg');
    this.svg.id = 'overlay';
    this.hoverRing = document.createElementNS(NS, 'g');
    this.hoverRing.innerHTML = `
      <circle r="20" fill="rgba(217,179,108,0.05)" stroke="none"/>
      <circle r="20" fill="none" stroke="rgba(217,179,108,0.85)" stroke-width="1.1"/>
      <line x1="-32" y1="0" x2="-24" y2="0" stroke="rgba(217,179,108,0.85)"/>
      <line x1="24" y1="0" x2="32" y2="0" stroke="rgba(217,179,108,0.85)"/>
      <line x1="0" y1="-32" x2="0" y2="-24" stroke="rgba(217,179,108,0.85)"/>
      <line x1="0" y1="24" x2="0" y2="32" stroke="rgba(217,179,108,0.85)"/>`;
    this.svg.appendChild(this.hoverRing);
    this.ringFill = this.hoverRing.querySelectorAll('circle')[0];
    this.ringCircle = this.hoverRing.querySelectorAll('circle')[1];
    this.ringTicks = this.hoverRing.querySelectorAll('line');
    this.leader = document.createElementNS(NS, 'line');
    this.leader.setAttribute('stroke', 'rgba(217,179,108,0.55)');
    this.leader.setAttribute('stroke-width', '1');
    this.svg.appendChild(this.leader);
    this.hoverRing.style.display = 'none';
    this.leader.style.display = 'none';
    root.appendChild(this.svg);

    // 天体标签容器
    this.labels = el('div');
    this.labels.id = 'labels';
    root.appendChild(this.labels);
    this.labelMap = new Map();   // id → {div, en, cn}

    this._buildTopbar(root);
    this._buildQuote(root);
    this._buildTimebar(root);
    this._buildFocusTitle(root);
    this._buildCard(root);
    this._buildDirPanel(root);
    this._buildEvents(root);
    this._buildConstPanel(root);
    this._buildRail(root);
    this._buildViewbar(root);
    this._buildHint(root);

    // 准星跟随
    window.addEventListener('mousemove', e => {
      this.reticle.style.left = e.clientX + 'px';
      this.reticle.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  _buildTopbar(root) {
    const bar = el('header');
    bar.id = 'topbar';
    this.homeBtn = el('div', '', '<span class="dot"></span>太阳系');
    this.homeBtn.id = 'homeBtn';
    this.homeBtn.addEventListener('click', () => this.cb.onGoSolar());
    this.homeBtn.style.opacity = '0';
    this.homeBtn.style.pointerEvents = 'none';
    this.homeBtn.style.transition = 'opacity .8s';

    this.tabs = el('nav');
    this.tabs.id = 'tabs';
    this.tabs.style.opacity = '0';
    this.tabs.style.transition = 'opacity .8s';
    this.tabEls = {};
    for (const [id, label] of [['deep', '深空'], ['solar', '太阳系'], ['events', '天象']]) {
      const b = el('button', 'tab', label);
      b.addEventListener('click', () => {
        if (id === 'events') this.cb.onOpenEvents();
        else this.cb.onTab(id);
      });
      this.tabEls[id] = b;
      this.tabs.appendChild(b);
    }

    this.clock = el('div');
    this.clock.id = 'clock';
    bar.append(this.homeBtn, this.tabs, this.clock);
    root.appendChild(bar);
  }

  _buildQuote(root) {
    const q = el('div');
    q.id = 'quote';
    this.quoteEl = q;
    this.enterBtn = null;
    q.addEventListener('click', e => {
      if (e.target.closest('#enterBtn')) this.cb.onEnterSolar();
    });
    root.appendChild(q);
    this._quoteIdx = Math.floor(Math.random() * QUOTES.length);
    this._setQuote();
  }
  _setQuote() {
    const t = QUOTES[this._quoteIdx % QUOTES.length];
    this._quoteIdx++;
    this.quoteEl.innerHTML = `
      <div class="kicker">ASTRONOMICAL VOICES · 天文学思想长廊</div>
      <div class="text">“${t.text}”</div>
      <div class="who">— <b>${t.who}</b> · ${t.year}</div>
      <button id="enterBtn"><span class="zh">进入太阳系</span><span class="en">ENTER THE SOLAR SYSTEM</span><span class="arrow">→</span></button>`;
  }

  _buildTimebar(root) {
    const bar = el('div');
    bar.id = 'timebar';
    this.bigDate = el('div', '', `<span id="jd-main">—</span><small id="jd-sub"></small>`);
    this.bigDate.id = 'bigDate';
    this.speedsEl = el('div');
    this.speedsEl.id = 'speeds';
    this.speedBtns = SPEEDS.map((s, i) => {
      const b = el('button', '', s.label);
      b.addEventListener('click', () => this.cb.onSpeed(i));
      this.speedsEl.appendChild(b);
      return b;
    });
    const today = el('button', '', '回到今天');
    today.id = 'todayBtn';
    today.addEventListener('click', () => this.cb.onToday());
    bar.append(this.bigDate, this.speedsEl, today);
    root.appendChild(bar);
    this.timebar = bar;
    this.SPEEDS = SPEEDS;
  }

  _buildFocusTitle(root) {
    const t = el('div');
    t.id = 'focusTitle';
    t.innerHTML = `<div class="ft-cat" id="ft-cat">行星</div><div class="ft-name" id="ft-name">地球</div><div class="ft-rule"></div><div class="ft-en" id="ft-en">EARTH</div>`;
    root.appendChild(t);
    this.focusTitle = t;
  }
  showFocusTitle(info, cat) {
    this.focusTitle.querySelector('#ft-cat').textContent = cat;
    this.focusTitle.querySelector('#ft-name').textContent = info.cn;
    this.focusTitle.querySelector('#ft-en').textContent = info.en;
    this.focusTitle.classList.add('show');
  }
  hideFocusTitle() { this.focusTitle.classList.remove('show'); }

  _buildDirPanel(root) {
    const p = el('aside');
    p.id = 'dirPanel';
    p.innerHTML = `<div class="dir-head">目录 <span id="dir-count">04</span></div><ol id="dir-list"></ol>`;
    root.appendChild(p);
    this.dirPanel = p;
  }
  showDirPanel(info) {
    const items = [...(info.sections || []).map(x => x.t), '资料来源'];
    const list = this.dirPanel.querySelector('#dir-list');
    list.innerHTML = items.map((t, i) =>
      `<li class="${i === 0 ? 'active' : ''}"><span class="no">${String(i + 1).padStart(2, '0')}</span>${t}</li>`).join('');
    this.dirPanel.querySelector('#dir-count').textContent = String(items.length).padStart(2, '0');
    list.querySelectorAll('li').forEach((li, i) => li.addEventListener('click', () => {
      list.querySelectorAll('li').forEach(x => x.classList.remove('active'));
      li.classList.add('active');
      this.card.querySelectorAll('.pc-sec')[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
    this.dirPanel.classList.add('show');
  }
  hideDirPanel() { this.dirPanel.classList.remove('show'); }

  _buildCard(root) {
    const c = el('aside');
    c.id = 'planetCard';
    c.innerHTML = `
      <div class="pc-head">
        <span class="pc-kicker" id="pc-kicker"></span>
        <span class="pc-auto" id="pc-auto">动效 · 自动</span>
        <button id="cardClose">关闭 ×</button>
      </div>
      <h1 id="pc-cn"></h1>
      <div class="pc-en" id="pc-en"></div>
      <div class="pc-sub" id="pc-sub"></div>
      <div class="pc-block">
        <div class="pc-block-k">探索这颗星球</div>
        <div class="pc-explore" id="pc-explore"></div>
      </div>
      <div class="pc-block">
        <div class="pc-block-k">观察这个世界</div>
        <div class="pc-views">
          <button data-v="sun">向阳面</button><button data-v="terminator">晨昏线</button><button data-v="dark">背光面</button>
        </div>
        <div class="pc-navrow"><button id="pc-prev">← 上一颗</button><span>地理标注</span><button id="pc-next">下一颗 →</button></div>
      </div>
      <div class="pc-desc" id="pc-desc"></div>
      <div class="stats" id="pc-stats"></div>`;
    root.appendChild(c);
    this.card = c;
    c.querySelector('#cardClose').addEventListener('click', () => this.cb.onCloseCard());
    c.querySelector('#pc-prev').addEventListener('click', () => this.cb.onPlanetNav(-1));
    c.querySelector('#pc-next').addEventListener('click', () => this.cb.onPlanetNav(1));
    c.querySelectorAll('.pc-views button').forEach(b => b.addEventListener('click', () => {
      c.querySelectorAll('.pc-views button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      this.cb.onViewAngle(b.dataset.v);
    }));
  }

    showCard(info, kicker) {
    this.card.querySelector('#pc-kicker').textContent = kicker;
    this.card.querySelector('#pc-cn').textContent = info.cn;
    this.card.querySelector('#pc-en').textContent = info.en;
    this.card.querySelector('#pc-desc').innerHTML = (info.sections || [{ t: '', text: info.desc || '' }])
      .map(sec => sec.t ? `<div class="pc-sec"><h4>${sec.t}</h4><p>${sec.text}</p></div>` : `<p>${sec.text}</p>`)
      .join('');
    const rows = [
      ['半径', info.radiusKm ? info.radiusKm.toLocaleString() + ' km' : '—'],
      ['表面重力', info.gravity + ' m/s²'],
      ['公转周期', info.periodDays >= 365 ? (info.periodDays / 365.25).toFixed(1) + ' 年' : info.periodDays + ' 天'],
      ['自转周期', Math.abs(info.rotationHours ?? 0) ? Math.abs(info.rotationHours / 24).toFixed(1) + ' 天' + (info.rotationHours < 0 ? '（逆行）' : '') : '—'],
      ['温度', info.tempC],
      ['卫星', info.moons ?? '—'],
    ];
    this.card.querySelector('#pc-stats').innerHTML = rows.map(r => `<div class="stat"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('');
    this.card.classList.add('show');
  }
  hideCard() { this.card.classList.remove('show'); this.hideDirPanel(); this.hideFocusTitle(); }

  _buildEvents(root) {
    const p = el('div');
    p.id = 'eventsPanel';
    p.innerHTML = `
      <button id="eventsClose">✕</button>
      <h2>天象剧场</h2>
      <div class="sub">CELESTIAL EVENTS · 按真实轨道历表回放</div>
      <h3>日月食 · ECLIPSES</h3>
      <div id="ev-eclipses"></div>
      <h3>行星连珠 · ALIGNMENTS</h3>
      <div id="ev-aligns"><div class="row" style="color:var(--ink-dim);font-size:12px">正在扫描未来十年五星（水金火木土）天象……</div></div>`;
    root.appendChild(p);
    this.eventsPanel = p;
    p.querySelector('#eventsClose').addEventListener('click', () => this.cb.onCloseEvents());
  }

  fillEclipses(list) {
    const box = this.eventsPanel.querySelector('#ev-eclipses');
    box.innerHTML = '';
    for (const ev of list) {
      const row = el('div', 'row', `
        <span class="date">${ev.date}</span>
        <span class="what">${ev.label}<small>${ev.en}</small></span>
        <button class="go">跳转观看</button>`);
      row.querySelector('.go').addEventListener('click', () => this.cb.onJumpEclipse(ev));
      box.appendChild(row);
    }
  }
  fillAlignments(list, fmt) {
    const box = this.eventsPanel.querySelector('#ev-aligns');
    box.innerHTML = '';
    if (!list.length) { box.innerHTML = '<div class="row" style="color:var(--ink-dim);font-size:12px">未来十年内没有 <40° 的显著连珠。</div>'; return; }
    for (const ev of list) {
      const row = el('div', 'row', `
        <span class="date">${fmt(ev.jd)}</span>
        <span class="what">五星连珠<small>FIVE-PLANET ALIGNMENT · 跨度 ${ev.spread.toFixed(0)}°</small></span>
        <button class="go">跳转观看</button>`);
      row.querySelector('.go').addEventListener('click', () => this.cb.onJumpAlignment(ev));
      box.appendChild(row);
    }
  }
  showEvents() { this.eventsPanel.classList.add('show'); }
  hideEvents() { this.eventsPanel.classList.remove('show'); }

  _buildConstPanel(root) {
    const p = el('div');
    p.id = 'constPanel';
    p.innerHTML = `
      <button id="constClose">✕</button>
      <div class="const-img" id="cp-img"></div>
      <h2 id="cp-cn"></h2>
      <div class="sub" id="cp-en"></div>
      <p class="const-desc" id="cp-desc"></p>`;
    root.appendChild(p);
    this.constPanel = p;
    p.querySelector('#constClose').addEventListener('click', () => { this.hideConstPanel(); this.cb.onConstClose && this.cb.onConstClose(); });
  }
  showConstPanel(c) {
    this.constPanel.querySelector('#cp-img').style.backgroundImage = c.img ? `url(${c.img})` : 'none';
    this.constPanel.querySelector('#cp-img').style.display = c.img ? '' : 'none';
    this.constPanel.querySelector('#cp-cn').textContent = c.cn;
    this.constPanel.querySelector('#cp-en').textContent = c.en + ' CONSTELLATION';
    this.constPanel.querySelector('#cp-desc').textContent = c.desc;
    this.constPanel.classList.add('show');
  }
  hideConstPanel() { this.constPanel.classList.remove('show'); }

  // 深空星座标签（投影更新）
  updateConstLabels(list, camera, mode) {
    if (!this.constLabelMap) this.constLabelMap = new Map();
    const v = new (camera.position.constructor)();
    for (const c of list) {
      let div = this.constLabelMap.get(c.id);
      if (!div) {
        div = el('div', 'const-label', `<span class="en">${c.en}</span><span class="zh">${c.cn}</span>`);
        div.addEventListener('click', () => this.cb.onOpenConst(c.id));
        this.labels.appendChild(div);
        this.constLabelMap.set(c.id, div);
      }
      v.copy(c.center).project(camera);
      const ok = mode === 'deep' && v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05;
      div.style.opacity = ok ? '0.85' : '0';
      div.style.pointerEvents = ok ? 'auto' : 'none';
      if (ok) {
        div.style.left = ((v.x * 0.5 + 0.5) * innerWidth) + 'px';
        div.style.top = ((-v.y * 0.5 + 0.5) * innerHeight) + 'px';
      }
    }
  }

  _buildRail(root) {
    const rail = el('div');
    rail.id = 'planetRail';
    rail.innerHTML = '<div class="rail-line"></div>';
    this.railDots = [];
    const items = [['sun', '太阳'], ...PLANET_NAV.map(p => [p.id, p.cn])];
    items.forEach(([id, cn], i) => {
      const au = id === 'sun' ? '—' : (PLANET_NAV.find(x => x.id === id)?.au?.toFixed(2) + ' AU' || '');
      const d = el('button', 'rail-dot', `<i></i><span class="rn">${cn}</span><span class="ra">${au}</span>`);
      d.style.top = (i * 40 + 16) + 'px';
      d.style.animationDelay = (0.15 + i * 0.07) + 's';
      d.dataset.id = id;
      d.addEventListener('click', () => this.cb.onSelectPlanet(id));
      rail.appendChild(d);
      this.railDots.push(d);
    });
    root.appendChild(rail);
    this.rail = rail;
  }

  _buildHint(root) {
    this.hint = el('div', '', '点击行星聚焦 · 拖动环视 · 滚轮缩放');
    this.hint.id = 'hint';
    root.appendChild(this.hint);
  }

  // ---- 天象观景位 ----
  _buildViewbar(root) {
    const bar = el('div');
    bar.id = 'viewbar';
    this.viewBtns = {};
    for (const [id, zh, en] of [['far', '远景', 'FAR'], ['side', '侧视', 'SIDE'], ['close', '近景', 'CLOSE'], ['ground', '地面', 'GROUND']]) {
      const b = el('button', 'vbtn', `<span class="zh">${zh}</span><span class="en">${en}</span>`);
      b.addEventListener('click', () => this.cb.onViewSpot(id));
      this.viewBtns[id] = b;
      bar.appendChild(b);
    }
    const orbitBtn = el('button', 'vbtn orbit active', '<span class="zh">自转</span><span class="en">ORBIT</span>');
    orbitBtn.addEventListener('click', () => {
      orbitBtn.classList.toggle('active');
      this.cb.onAutoOrbit(orbitBtn.classList.contains('active'));
    });
    this.orbitBtn = orbitBtn;
    bar.appendChild(orbitBtn);
    root.appendChild(bar);
    this.viewbar = bar;
  }
  showViewbar(kind) {   // 'lunar' | 'solar' | null
    this.viewbar.classList.toggle('show', !!kind);
    if (kind) {
      for (const k in this.viewBtns) this.viewBtns[k].classList.remove('active');
      this.viewBtns.side.classList.add('active');
      this.orbitBtn.classList.add('active');
    }
  }
  setViewActive(id) {
    for (const k in this.viewBtns) this.viewBtns[k].classList.remove('active');
    this.viewBtns[id]?.classList.add('active');
  }
  setOrbitActive(on) { this.orbitBtn.classList.toggle('active', on); }
    setAutoOrbitView(on) { this.card.querySelector('#pc-auto').classList.toggle('on', on); }
  setRailActive(id) {
    for (const d of this.railDots) {
      const on = d.dataset.id === id;
      d.classList.toggle('active', on);
      d.querySelector('.ra').style.display = on ? '' : 'none';
      d.querySelector('.rn').style.opacity = on || d.dataset.id === 'sun' ? '1' : '';
    }
  }

  // ---- 模式显隐 ----
  setMode(mode) {   // 'deep' | 'solar'
    this.quoteEl.classList.toggle('show', mode === 'deep');
    this.timebar.classList.toggle('show', mode === 'solar');
    this.rail.classList.toggle('show', mode === 'solar');
    this.homeBtn.style.opacity = mode === 'solar' ? '1' : '0';
    this.homeBtn.style.pointerEvents = mode === 'solar' ? 'auto' : 'none';
    this.tabs.style.opacity = '1';
    this.tabEls.deep.classList.toggle('active', mode === 'deep');
    this.tabEls.solar.classList.toggle('active', mode === 'solar');
    this.hint.classList.toggle('show', mode === 'solar');
    this.hideConstPanel();
    if (mode === 'deep') { this.hideCard(); this.hideEvents(); }
  }
  setActiveTab(id) {
    for (const k in this.tabEls) this.tabEls[k].classList.remove('active');
    this.tabEls[id]?.classList.add('active');
  }

  // ---- 每帧更新 ----
  updateDate(jd) {
    this.clock.innerHTML = `<b>UTC</b> ${fmtDateTime(jd).slice(11, 16)}`;
    const main = this.bigDate.querySelector('#jd-main');
    const sub = this.bigDate.querySelector('#jd-sub');
    const dt = fmtDateTime(jd);
    main.textContent = dt.slice(0, 10);
    sub.textContent = dt.slice(11) + ' · 模拟时间';
  }
  setActiveSpeed(i) { this.speedBtns.forEach((b, j) => b.classList.toggle('active', i === j)); }

  // 标签 + 悬停金环（主循环调用）
  updateOverlay(bodies, camera, mode, hoverId, selectedId, width, height) {
    const v = new (bodies.get('sun').worldPos.constructor)();
    let ringShown = false;

    const shown = [];   // 可见标签，用于重叠避让
    for (const [id, b] of bodies) {
      let rec = this.labelMap.get(id);
      if (!rec) {
        const div = el('div', 'body-label', `<span class="en">${b.info.en}</span><span class="cn">${b.info.cn}</span>`);
        div.addEventListener('click', () => this.cb.onSelectPlanet(id));
        this.labels.appendChild(div);
        rec = { div };
        this.labelMap.set(id, rec);
      }
      v.copy(b.worldPos).project(camera);
      const dist0 = camera.position.distanceTo(b.worldPos);
      const fov0 = camera.fov * Math.PI / 180;
      const rpx0 = (b.displayR / (dist0 * Math.tan(fov0 / 2))) * (height / 2);
      const visible = mode === 'solar' && v.z < 1 && Math.abs(v.x) < 1.15 && Math.abs(v.y) < 1.15 && rpx0 < 110;
      if (!visible) { rec.div.style.opacity = '0'; rec.div.style.pointerEvents = 'none'; rec._vis = false; continue; }
      const sx = (v.x * 0.5 + 0.5) * width, sy = (-v.y * 0.5 + 0.5) * height;
      shown.push({ id, rec, sx, sy, rpx: rpx0, dist: dist0 });
      rec._vis = true;
      rec._sx = sx; rec._sy = sy; rec._rpx = rpx0;
    }

    // 标签避让：按远近排序，近的优先；与已显示标签距离 < 30px 的隐藏（远的让近的）
    shown.sort((a, b) => a.dist - b.dist);
    const kept = [];
    for (const item of shown) {
      const clash = kept.some(k => Math.hypot(k.sx - item.sx, k.sy - item.sy) < 30);
      item._hide = clash;
      if (!clash) kept.push(item);
    }

    for (const item of shown) {
      const { id, rec, sx, sy, rpx } = item;
      if (item._hide) { rec.div.style.opacity = '0'; rec.div.style.pointerEvents = 'none'; continue; }
      rec.div.style.opacity = id === selectedId ? '1' : (id === hoverId ? '1' : '0.72');
      rec.div.style.pointerEvents = 'auto';
      const lx = sx + Math.max(rpx, 4) + 16, ly = sy - Math.max(rpx, 4) * 0.3;
      rec.div.style.left = lx + 'px';
      rec.div.style.top = sy + 'px';
      rec.div.style.transform = 'translate(0,-50%)';

      if (id === hoverId && rpx > 2 && rpx < 90) {
        const rr = Math.max(rpx * 1.45 + 8, 16);
        const tk = rr + 7;
        this.hoverRing.style.display = '';
        this.hoverRing.setAttribute('transform', `translate(${sx},${sy})`);
        this.ringFill.setAttribute('r', rr);
        this.ringCircle.setAttribute('r', rr);
        const seg = [[-tk - 7, 0, -tk, 0], [tk, 0, tk + 7, 0], [0, -tk - 7, 0, -tk], [0, tk, 0, tk + 7]];
        this.ringTicks.forEach((ln, i) => {
          ln.setAttribute('x1', seg[i][0]); ln.setAttribute('y1', seg[i][1]);
          ln.setAttribute('x2', seg[i][2]); ln.setAttribute('y2', seg[i][3]);
        });
        this.leader.style.display = '';
        this.leader.setAttribute('x1', sx + rpx * 0.8);
        this.leader.setAttribute('y1', sy - rpx * 0.8);
        this.leader.setAttribute('x2', lx - 6);
        this.leader.setAttribute('y2', ly);
        ringShown = true;
      }
    }
    if (!ringShown) { this.hoverRing.style.display = 'none'; this.leader.style.display = 'none'; }
  }

  setReticleHover(on) {
    this.reticle.classList.toggle('hovering', on);
    this.reticle.querySelector('.ring').style.opacity = on ? '1' : '';
  }
}
