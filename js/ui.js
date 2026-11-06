// ============================================================
//  ui.js — HUD：顶栏/标签页/时间栏/行星档案/天象面板/准星/标签
// ============================================================

import { QUOTES, PLANETS } from './data.js?v=211';
const PLANET_NAV = PLANETS;
import { fmtDateLocal, fmtTimeLocal } from './astro.js?v=211';
import { assetURL } from './assets.js?v=211';

// 时区标签：中国用户显示"北京时间"，其他时区显示 UTC±X
const TZ_OFF = -new Date().getTimezoneOffset() / 60;
const TZ_LABEL = TZ_OFF === 8 ? '北京时间'
  : `UTC${TZ_OFF >= 0 ? '+' : ''}${TZ_OFF}`;
const TZ_SHORT = TZ_OFF === 8 ? '北京'
  : `UTC${TZ_OFF >= 0 ? '+' : ''}${TZ_OFF}`;

const NS = 'http://www.w3.org/2000/svg';

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

// 时间流速：0 = 暂停；其余都是"实时"基准的不同倍速
// （v 的单位是 儒略日/秒：1/86400 = 1 秒对 1 秒真实时间）
const SPEEDS = [
  { v: 0,              label: '暂停',  mult: 0 },
  { v: 1 / 86400,      label: '实时',  mult: 1 },
  { v: 60 / 86400,     label: '实时',  mult: 60 },
  { v: 3600 / 86400,   label: '实时',  mult: 3600 },
  { v: 86400 / 86400,  label: '实时',  mult: 86400 },
  { v: 864000 / 86400, label: '实时',  mult: 864000 },
];
const MULT_LABEL = m => m === 1 ? '实时'
  : m < 3600 ? `×${m}`
  : m === 3600 ? '×3600（1时/秒）'
  : m === 86400 ? '×86400（1天/秒）'
  : '（10天/秒）';

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
    // 淡入淡出代替 display 硬切：两种指针形态之间要有过渡
    this.hoverRing.style.opacity = '0';
    this.hoverRing.style.transition = 'opacity .22s ease';
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
    this._buildAimTag(root);
    this._buildTip(root);
    this._buildBuildTag(root);
    this._buildTimeline(root);

    // 准星跟随（触屏无鼠标：准星与跟随提示整体隐藏，静默降级）
    if (matchMedia('(pointer: coarse)').matches) {
      this.reticle.style.display = 'none';
      if (this.tip) this.tip.style.display = 'none';
    } else window.addEventListener('mousemove', e => {
      this.reticle.style.left = e.clientX + 'px';
      this.reticle.style.top = e.clientY + 'px';
      if (this.tip && this.tip.classList.contains('show')) {
        const w = this.tip.offsetWidth, h = this.tip.offsetHeight;
        const x = Math.min(e.clientX + 16, innerWidth - w - 12);
        const y = e.clientY - h - 14 < 8 ? e.clientY + 20 : e.clientY - h - 14;
        this.tip.style.left = x + 'px';
        this.tip.style.top = y + 'px';
      }
    }, { passive: true });

    // Esc 关闭浮层
    window.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      this.hideEvents();
    });
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

    // ---- 暂停 / 实时（悬停调倍速）----
    const group = el('div', 'spd-group');

    this.pauseBtn = el('button', 'spd', '暂停');
    this.pauseBtn.dataset.tip = '冻结模拟时间';
    this.pauseBtn.addEventListener('click', () => this.cb.onSpeed(0));

    this.realBtn = el('button', 'spd real', '实时');
    this.realBtn.dataset.tip = '跳到现在，行星按真实历表就位并开始运行（悬停可调倍速）';
    this.realBtn.addEventListener('click', () => this.cb.onRealtime());

    // 悬停弹出的倍速面板
    this.speedPop = el('div', 'spd-pop');
    this.speedPopBtns = SPEEDS.map((s, i) => {
      if (i === 0) return null;              // 暂停单独成按钮
      const b = el('button', '', MULT_LABEL(s.mult));
      b.dataset.idx = i;
      b.addEventListener('click', e => {
        e.stopPropagation();
        this.cb.onSpeed(i);
        this._hideSpeedPop();
      });
      this.speedPop.appendChild(b);
      return b;
    });

    this.realWrap = el('div', 'spd-wrap');
    this.realWrap.append(this.realBtn, this.speedPop);
    // 按钮与面板之间有几像素间隙，鼠标穿过时 mouseleave 会先触发——
    // 所以收起延迟 180ms，进到面板里再取消，否则面板永远点不中
    const openPop = () => { clearTimeout(this._popTimer); this._showSpeedPop(); };
    const closePop = () => {
      clearTimeout(this._popTimer);
      this._popTimer = setTimeout(() => this._hideSpeedPop(), 180);
    };
    this.realWrap.addEventListener('mouseenter', openPop);
    this.realWrap.addEventListener('mouseleave', closePop);
    this.speedPop.addEventListener('mouseenter', openPop);
    this.speedPop.addEventListener('mouseleave', closePop);
    // 触屏：没有悬停，点「实时」弹出倍速面板（flashSpeedPop 由 onRealtime 触发），
    // 点面板外任意处收起
    if (matchMedia('(pointer: coarse)').matches) {
      window.addEventListener('pointerdown', e => {
        if (!this.speedPop.classList.contains('show')) return;
        if (e.target.closest?.('.spd-wrap')) return;
        this._hideSpeedPop();
      }, { capture: true });
    }

    group.append(this.pauseBtn, this.realWrap);

    // 示意排布 / 实时轨道（对应参考站 SCHEMATIC / REAL）
    this.posBtn = el('button', 'posmode', '示意排布');
    this.posBtn.dataset.tip = '示意排布：行星按压缩距离排成一线，轨道线为同心导轨｜真实轨道：按 JPL 历表真实公转、散落各处，相机以太阳为中心取景，轨道线为真实椭圆';
    this.posBtn.addEventListener('click', () => this.cb.onTogglePosition());

    bar.append(this.bigDate, group, this.posBtn);
    root.appendChild(bar);
    this.timebar = bar;
    this.SPEEDS = SPEEDS;
  }

  _showSpeedPop() { this.speedPop.classList.add('show'); }
  _hideSpeedPop() { this.speedPop.classList.remove('show'); }
  // 点「实时」后自动闪一下倍速面板：1:1 真实时间下行星几乎不动，
  // 得让用户知道这里还能加速。触屏没有悬停回看，停留给长一倍
  flashSpeedPop(ms) {
    const wait = ms ?? (matchMedia('(pointer: coarse)').matches ? 4800 : 2200);
    this._showSpeedPop();
    clearTimeout(this._popTimer);
    this._popTimer = setTimeout(() => this._hideSpeedPop(), wait);
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
    const c = el('aside', 'sideCard');
    c.id = 'planetCard';
    c.innerHTML = `
      <div class="pc-head">
        <span class="pc-kicker" id="pc-kicker"></span>
        <span class="pc-auto" id="pc-auto">动效 · 自动</span>
        <button id="cardClose" class="card-close">关闭 ×</button>
      </div>
      <h1 id="pc-cn"></h1>
      <div class="pc-en" id="pc-en"></div>
      <div class="pc-sub" id="pc-sub"></div>
      <div class="pc-block">
        <div class="pc-block-k">探索这颗星球</div>
        <div class="pc-explore" id="pc-explore"></div>
      </div>
      <div class="pc-block" id="pc-moons-block" style="display:none">
        <div class="pc-block-k">它的卫星 · 点击前往</div>
        <div class="pc-views" id="pc-moons"></div>
      </div>
      <div class="pc-block">
        <div class="pc-block-k">观察这个世界</div>
        <div class="pc-views">
          <button data-v="sun">向阳面</button><button data-v="terminator">晨昏线</button><button data-v="dark">背光面</button>
        </div>
        <div class="pc-navrow"><button id="pc-prev">← 上一颗</button><span>地理标注</span><button id="pc-next">下一颗 →</button></div>
      </div>
      <div class="pc-desc" id="pc-desc"></div>
      <div class="stats" id="pc-stats"></div>
      <div class="pc-facts" id="pc-facts"></div>
      <div class="pc-src" id="pc-src"></div>`;
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

    showCard(info, kicker, moons) {
    this.card.querySelector('#pc-kicker').textContent = kicker;
    this.card.querySelector('#pc-cn').textContent = info.cn;
    this.card.querySelector('#pc-cn').classList.toggle('long', info.cn.length > 4);
    this.card.querySelector('#pc-en').textContent = info.en;
    this.card.querySelector('#pc-desc').innerHTML = (info.sections || [{ t: '', text: info.desc || '' }])
      .map(sec => sec.t ? `<div class="pc-sec"><h4>${sec.t}</h4><p>${sec.text}</p></div>` : `<p>${sec.text}</p>`)
      .join('');
    // 标题下的一句话提要 + 「探索这颗星球」里的关键数字
    this.card.querySelector('#pc-sub').textContent = info.desc || '';
    this.card.querySelector('#pc-explore').innerHTML = this._exploreChips(info);

    // 「它的卫星」：真实比例后卫星又小又远，给一排按钮直接跳到卫星特写
    const moonBlock = this.card.querySelector('#pc-moons-block');
    const moonRow = this.card.querySelector('#pc-moons');
    if (moons && moons.length) {
      moonBlock.style.display = '';
      moonRow.innerHTML = moons.map(m => `<button data-moon="${m.id}">${m.cn}</button>`).join('');
      moonRow.querySelectorAll('button').forEach(b =>
        b.addEventListener('click', () => this.cb.onSelectPlanet(b.dataset.moon)));
    } else {
      moonBlock.style.display = 'none';
      moonRow.innerHTML = '';
    }

    // 冷知识：一句话一条，给具体数字，读起来比正文轻
    const facts = info.facts || [];
    this.card.querySelector('#pc-facts').innerHTML = facts.length ? `
      <div class="pf-k">冷知识 · FIELD NOTES</div>
      <ul>${facts.map(f => `<li>${f}</li>`).join('')}</ul>` : '';

    // 资料来源：与目录面板最后一项对齐，也给数字一个出处
    const kind = info.kind || 'planet';
    const src = kind === 'moon'
      ? '轨道与影像：NASA / JPL 卫星数据表、旅行者与卡西尼任务公开影像 ｜ 表面贴图：Solar System Scope (CC BY 4.0)'
      : kind === 'comet'
      ? '轨道要素：JPL Small-Body Database ｜ 影像：ESA Rosetta / NASA Stardust'
      : kind === 'star'
      ? '数据：NASA Solar Dynamics Observatory、SOHO ｜ 影像：SDO / 太阳动力学天文台'
      : '轨道要素：JPL Approximate Positions of the Planets ｜ 数据：NASA Planetary Fact Sheet ｜ 表面贴图：Solar System Scope (CC BY 4.0)';
    this.card.querySelector('#pc-src').innerHTML =
      `<div class="ps-k">资料来源 · SOURCES</div><p>${src}</p><p class="ps-note">本站为演示性可视化：行星半径为视觉放大，轨道距离在「示意排布」下经过分段压缩。</p>`;

    const num = v => (v == null || v === '' || Number.isNaN(Number(v))) ? null : Number(v);
    const pd = num(info.periodDays);
    const rh = num(info.rotationHours);
    const rows = [
      ['半径', info.radiusKm ? info.radiusKm.toLocaleString() + ' km' : '—'],
      ['表面重力', info.gravity != null ? info.gravity + ' m/s²' : '—'],
      ['公转周期', pd == null ? '—'
        : pd < 0 ? Math.abs(pd) + ' 天（逆行）'
        : pd >= 700 ? (pd / 365.25).toFixed(1) + ' 年'
        : pd + ' 天'],
      ['自转周期', rh == null ? '—'
        : Math.abs(rh) >= 48 ? (Math.abs(rh) / 24).toFixed(1) + ' 天' + (rh < 0 ? '（逆行）' : '')
        : Math.abs(rh).toFixed(1) + ' 小时' + (rh < 0 ? '（逆行）' : '')],
      ['温度', info.tempC ?? '—'],
      ['卫星', info.moons ?? '—'],
    ];
    this.card.querySelector('#pc-stats').innerHTML = rows.map(r => `<div class="stat"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('');
    this.card.classList.add('show');
    this.card.scrollTop = 0;
  }
  _exploreChips(info) {
    const chips = [];
    const add = (k, v) => chips.push(`<span class="chip"><i>${k}</i><b>${v}</b></span>`);
    if (info.radiusKm) {
      add('直径', (info.radiusKm * 2).toLocaleString() + ' km');
      const rel = info.radiusKm / 6371;
      if (rel >= 0.02) add('地球', rel >= 1 ? rel.toFixed(rel >= 10 ? 0 : 1) + ' 倍' : (rel * 100).toFixed(0) + '%');
    }
    if (info.au != null) add('距日', Number(info.au).toFixed(2) + ' AU');
    const pd = Number(info.periodDays);
    if (pd) add('公转', Math.abs(pd) >= 700 ? (Math.abs(pd) / 365.25).toFixed(1) + ' 年' : Math.abs(pd).toFixed(1) + ' 天');
    if (info.kind === 'comet' && info.rotationHours) add('自转', info.rotationHours + ' 小时');
    return chips.join('');
  }

  hideCard() { this.card.classList.remove('show'); this.hideDirPanel(); this.hideFocusTitle(); }

  _buildEvents(root) {
    const p = el('div');
    p.id = 'eventsPanel';
    p.innerHTML = `
      <button id="eventsClose">✕</button>
      <h2>天象剧场</h2>
      <div class="sub">CELESTIAL EVENTS · 按真实轨道历表回放 · 时刻为世界时 UTC</div>
      <h3>日月食 · ECLIPSES</h3>
      <div id="ev-eclipses"></div>
      <h3>行星连珠 · ALIGNMENTS</h3>
      <div id="ev-aligns"><div class="row" style="color:var(--ink-dim);font-size:12px">正在扫描未来十年五星（水金火木土）天象……</div></div>
      <div class="panel-note">跳转后时间会停在事件发生的真实时刻，可点底部时间栏的速率按钮继续推进。「地面」机位模拟站在地表仰望的视角。</div>`;
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

  // 星座档案：和行星档案卡同一套侧边卡（位置/宽度/排版全一致），
  // 左边的画面负责"星座的样子"，右边只放文字与数据。
  _buildConstPanel(root) {
    const p = el('aside', 'sideCard');
    p.id = 'constPanel';
    p.innerHTML = `
      <div class="pc-head">
        <span class="pc-kicker" id="cp-kicker"></span>
        <button id="constClose" class="card-close">关闭 ×</button>
      </div>
      <h1 id="cp-cn"></h1>
      <div class="pc-en" id="cp-en"></div>
      <div class="pc-sub" id="cp-sub"></div>
      <div class="cp-img" id="cp-img"></div>
      <div class="cp-credit" id="cp-credit"></div>
      <div class="pc-desc" id="cp-desc"></div>
      <div class="stats" id="cp-stats"></div>
      <div class="pc-facts" id="cp-facts"></div>`;
    root.appendChild(p);
    this.constPanel = p;
    p.querySelector('#constClose').addEventListener('click', () => { this.hideConstPanel(); this.cb.onConstClose && this.cb.onConstClose(); });
  }
  // 星座卡与星云卡共用这一张（内容不同，版式一致）
  showSkyCard(o) {
    const q = id => this.constPanel.querySelector(id);
    q('#cp-kicker').textContent = o.kicker;
    q('#cp-cn').textContent = o.cn;
    q('#cp-cn').classList.toggle('long', o.cn.length > 4);
    q('#cp-en').textContent = o.en;
    q('#cp-sub').textContent = o.sub || '';
    const img = q('#cp-img');
    img.style.backgroundImage = o.img ? `url(${assetURL(o.img)})` : 'none';
    img.style.display = o.img ? '' : 'none';
    q('#cp-credit').textContent = o.credit || '';
    q('#cp-desc').innerHTML = (o.sections && o.sections.length
      ? [{ t: '概览', text: o.desc }, ...o.sections]
      : [{ t: '概览', text: o.desc }])
      .map(sec => `<div class="pc-sec"><h4>${sec.t}</h4><p>${sec.text}</p></div>`).join('');
    q('#cp-stats').innerHTML = (o.rows || [])
      .map(r => `<div class="stat"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('');
    q('#cp-facts').innerHTML = (o.facts && o.facts.length) ? `
      <div class="pf-k">冷知识 · FIELD NOTES</div>
      <ul>${o.facts.map(f => `<li>${f}</li>`).join('')}</ul>` : '';
    this.constPanel.classList.add('show');
    this.constPanel.scrollTop = 0;
  }
  showConstPanel(c) {
    this.showSkyCard({
      kicker: `CONSTELLATION · ${c.en}`,
      cn: c.cn, en: c.en,
      sub: c.season ? `最佳观测 ${c.season}　·　占天球 ${c.area} 平方度（第 ${c.rank}）` : '',
      img: c.img, desc: c.desc,
      sections: c.sections, facts: c.facts,
      credit: '影像：NASA / Spitzer 银河全景，按真实赤经赤纬裁切　·　金色连线为本项目依星表绘制',
      rows: [
        ['亮星', c.star || '—'],
        ['深空天体', c.dso || '—'],
        ['星数 / 连线', `${c.stars.length} 颗 · ${c.lines.length} 条`],
      ],
    });
  }
  showNebulaPanel(n) {
    this.showSkyCard({
      kicker: `DEEP SKY · ${n.abbr || n.en}`,
      cn: n.cn, en: n.en,
      sub: `${n.type}　·　${n.distance}`,
      img: n.img, desc: n.desc, sections: n.sections, facts: n.facts,
      credit: '影像：NASA / JPL-Caltech（Spitzer 红外 / Hubble 可见光公开影像）',
      rows: [
        ['类型', n.type],
        ['距离', n.distance],
        ['尺度', n.span],
        ['所在星座', n.where],
      ],
    });
  }
  hideConstPanel() { this.constPanel.classList.remove('show'); }

  // 深空星座标签（投影更新）
  updateConstLabels(list, camera, active) {
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
      const ok = active && c.id !== this.aimId && v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05;
      // 状态没变就不写样式：每帧重写 opacity 会打断过渡，看起来一闪一闪
      const op = ok ? '0.85' : '0';
      if (div._op !== op) { div.style.opacity = op; div._op = op; }
      div.style.pointerEvents = ok ? 'auto' : 'none';
      if (ok) {
        // 取整到像素：亚像素定位会让文字在缓慢移动时持续发虚、发颤
        div.style.left = Math.round((v.x * 0.5 + 0.5) * innerWidth) + 'px';
        div.style.top = Math.round((-v.y * 0.5 + 0.5) * innerHeight) + 'px';
      }
    }
  }

  _buildRail(root) {
    const rail = el('div');
    rail.id = 'planetRail';
    rail.innerHTML = '<div class="rail-line"></div>';
    this.railDots = [];
    const items = [
      { id: 'sun', cn: '太阳', au: null, color: '#ffb765' },
      ...PLANET_NAV.map(p => ({ id: p.id, cn: p.cn, au: p.au, color: p.color })),
    ];
    items.forEach((it, i) => {
      const auTxt = it.au == null ? '' : it.au.toFixed(2);
      const d = el('button', 'rail-dot',
        `<i></i><span class="rn">${it.cn}</span><span class="ra">${auTxt}</span>`);
      d.style.setProperty('--c', it.color || '#d8c49a');
      d.style.animationDelay = (0.12 + i * 0.055) + 's';
      d.dataset.id = it.id;
      d.addEventListener('click', () => this.cb.onSelectPlanet(it.id));
      rail.appendChild(d);
      this.railDots.push(d);
    });
    root.appendChild(rail);
    this.rail = rail;
  }

  // ---------- 天象时间轴 ----------
  // 日月食跳转只落在"食甚"这一个时刻，看不到前后过程。这条时间轴把
  // 食甚前后各 ±N 分钟映射到滑杆上，拖动即改写模拟时刻。
  _buildTimeline(root) {
    const bar = el('div');
    bar.id = 'evTimeline';
    bar.innerHTML = `
      <div class="et-head"><span id="et-label">天象 · 时间轴</span><span id="et-peak"></span></div>
      <input id="et-range" type="range" min="-1" max="1" step="0.0015" value="0" aria-label="天象时间轴">
      <div class="et-scale"><span id="et-l"></span><span class="mid" id="et-mid">食甚</span><span id="et-r"></span></div>
      <div class="et-now" id="et-now"></div>`;
    root.appendChild(bar);
    this.evTimeline = bar;
    this.tlRange = bar.querySelector('#et-range');
    this.tlLabel = bar.querySelector('#et-label');
    this.tlPeak = bar.querySelector('#et-peak');
    this.tlNow = bar.querySelector('#et-now');
    this.tlMid = bar.querySelector('#et-mid');
    this.tlL = bar.querySelector('#et-l');
    this.tlR = bar.querySelector('#et-r');

    // 拖动期间不要被每帧的"同步滑杆位置"打断
    this.tlDragging = false;
    this.tlRange.addEventListener('pointerdown', () => { this.tlDragging = true; bar.classList.add('drag'); });
    const endDrag = () => { this.tlDragging = false; bar.classList.remove('drag'); };
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    this.tlRange.addEventListener('input', () => {
      this.cb.onScrubTimeline(parseFloat(this.tlRange.value));
    });
  }

  static _span(min) {
    if (min >= 1440) return `${(min / 1440).toFixed(min % 1440 ? 1 : 0)} 天`;
    if (min >= 60) return `${(min / 60).toFixed(min % 60 ? 1 : 0)} 小时`;
    return `${Math.round(min)} 分`;
  }
  static _clock(min) {
    if (min >= 1440) return `${(min / 1440).toFixed(1)} 天`;
    if (min >= 60) return `${Math.floor(min / 60)} 小时 ${String(Math.round(min % 60)).padStart(2, '0')} 分`;
    return `${Math.round(min)} 分`;
  }

  showTimeline({ label, peakText, halfMin, mid = '食甚' }) {
    this._tlHalf = halfMin;
    this.tlLabel.textContent = `${label} · 时间轴`;
    this.tlPeak.textContent = peakText;
    this.tlMid.textContent = mid;
    this.tlL.textContent = '−' + UI._span(halfMin);
    this.tlR.textContent = '+' + UI._span(halfMin);
    this.tlRange.value = '0';
    this.tlNow.textContent = `${mid}　拖动查看前后过程`;
    this.evTimeline.classList.add('show');
  }
  hideTimeline() {
    this.evTimeline.classList.remove('show');
    this.tlDragging = false;
    this.evTimeline.classList.remove('drag');
  }
  updateTimeline(offMin) {
    if (!this.evTimeline.classList.contains('show')) return;
    const half = this._tlHalf || 150;
    if (!this.tlDragging) {
      this.tlRange.value = String(Math.max(-1, Math.min(1, offMin / half)));
    }
    // 用"← 距食甚 1 小时 36 分"这种写法：方向交给箭头，文字保持自然，
    // 连珠（mid = 最近）也能套用同一句
    const a = Math.abs(offMin);
    let txt;
    if (a < 0.6) {
      txt = this.tlMid.textContent;
    } else {
      const body = `距${this.tlMid.textContent} ${UI._clock(a)}`;
      txt = offMin < 0 ? `← ${body}` : `${body} →`;
    }
    if (this.tlNow.textContent !== txt) this.tlNow.textContent = txt;
  }

  // 右下角版本戳：一串"改了没生效/两个版本对不上"多半是缓存或旧离线包，
  // 把版本号常显出来，一眼就能确认当前跑的是哪一版。
  _buildBuildTag(root) {
    let label = window.__BUILD || '';
    if (!label) {
      const tag = document.querySelector('script[src*="loading-boot.js"]');
      const m = tag && /[?&]v=(\d+)/.exec(tag.src);
      label = m ? `v${m[1]} · 网页版` : '';
    }
    if (!label) return;
    const d = el('div', '', label);
    d.id = 'buildTag';
    d.title = '当前构建版本';
    root.appendChild(d);
  }

  _buildAimTag(root) {
    const t = el('div');
    t.id = 'aimTag';
    // 瞄准标记沿用主准星的十字造型（只是更大更亮），不再用圆圈
    t.innerHTML = `
      <svg class="cross" width="72" height="72" viewBox="0 0 34 34">
        <g stroke="rgba(240,217,168,.95)" stroke-width=".85" stroke-linecap="round">
          <line x1="17" y1="1.2" x2="17" y2="8.6"/>
          <line x1="17" y1="25.4" x2="17" y2="32.8"/>
          <line x1="1.2" y1="17" x2="8.6" y2="17"/>
          <line x1="25.4" y1="17" x2="32.8" y2="17"/>
          <circle cx="17" cy="17" r="12.2" fill="none" stroke="rgba(240,217,168,.5)"/>
        </g>
        <circle cx="17" cy="17" r="1.35" fill="rgba(255,247,228,.98)"/>
      </svg>
      <div class="txt"><b class="cn"></b><em class="en"></em></div>`;
    root.appendChild(t);
    this.aimTag = t;
  }

  // ---------- 知识库（已按需求移除入口与面板） ----------
  showConstAim(c, x, y) {
    this.aimId = c.id;                 // 被瞄准的星座不再显示常驻名字，避免和瞄准标记叠在一起
    this.aimKind = 'const';
    this.aimTag.classList.add('show');
    this.aimTag.style.left = x + 'px';
    this.aimTag.style.top = y + 'px';
    this.aimTag.querySelector('.cn').textContent = c.cn;
    this.aimTag.querySelector('.en').textContent = c.en + ' · 点击凝望';
  }
  showNebAim(n, x, y) {
    this.aimId = n.id;
    this.aimKind = 'neb';
    this.aimTag.classList.add('show');
    this.aimTag.style.left = x + 'px';
    this.aimTag.style.top = y + 'px';
    this.aimTag.querySelector('.cn').textContent = n.cn;
    this.aimTag.querySelector('.en').textContent = `${n.abbr || n.en} · ${n.type} · 点击查看`;
  }
  hideAim() { this.aimId = null; this.aimKind = null; this.aimTag.classList.remove('show'); }
  hideConstAim() { this.hideAim(); }

  // 提示框：原生 title 会跟鼠标飘、样式也不统一，这里自己画一个
  _buildTip(root) {
    const t = el('div');
    t.id = 'tip';
    root.appendChild(t);
    this.tip = t;
    document.addEventListener('mouseover', e => {
      const host = e.target.closest && e.target.closest('[data-tip]');
      if (!host) { this.tip.classList.remove('show'); return; }
      this.tip.textContent = host.dataset.tip;
      this.tip.classList.add('show');
    });
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
      d.classList.toggle('active', d.dataset.id === id);
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
    this.hideConstPanel();
    if (mode === 'deep') { this.hideCard(); this.hideEvents(); }
  }
  setActiveTab(id) {
    for (const k in this.tabEls) this.tabEls[k].classList.remove('active');
    this.tabEls[id]?.classList.add('active');
  }

  // ---- 每帧更新 ----
  updateDate(jd) {
    // 底部大字日期与顶栏时钟都用本地时区：不然"回到今天"之后
    // 屏幕上的时刻比手表慢 8 小时，看起来就像时间坏了
    this.clock.innerHTML = `<b>${TZ_SHORT}</b> ${fmtTimeLocal(jd)}`;
    const main = this.bigDate.querySelector('#jd-main');
    const sub = this.bigDate.querySelector('#jd-sub');
    main.textContent = fmtDateLocal(jd);
    sub.textContent = `${fmtTimeLocal(jd)} ${TZ_LABEL} · 模拟时间`;
  }
  setActiveSpeed(i) {
    const sp = SPEEDS[i] || SPEEDS[0];
    this.pauseBtn.classList.toggle('active', !i);
    this.realBtn.classList.toggle('active', !!i);
    this.realBtn.textContent = i ? (sp.mult === 1 ? '实时' : `实时 ×${sp.mult >= 86400 ? Math.round(sp.mult / 86400) + '天/秒' : sp.mult}`) : '实时';
    if (this.speedPopBtns) this.speedPopBtns.forEach((b, j) => b && b.classList.toggle('active', (j + 1) === i));
  }
  setPositionMode(m) {
    // 用"真实轨道"而非"实时轨道"，避免和左邻的时间按钮"实时"重名
    this.posBtn.textContent = m === 'real' ? '真实轨道' : '示意排布';
    this.posBtn.classList.toggle('on', m === 'real');
  }

  // 标签 + 悬停金环（主循环调用）
  updateOverlay(bodies, camera, mode, hoverId, selectedId, width, height) {
    const v = new (bodies.get('sun').worldPos.constructor)();
    let ringShown = false;

    const shown = [];   // 可见标签，用于重叠避让
    const nowMs = performance.now();
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
      // 卫星标签只在贴近母星时才显示；太阳太显眼交给左侧导航轨；彗星给足曝光
      const minR = b.isMoon ? 3 : (b.isComet ? 0.3 : (id === 'sun' ? 40 : 0.5));
      // ⚠️ 迟滞：已经显示的标签用更宽的阈值才允许退出。原先进出用同一组阈值，
      // 天体大小停在临界值附近时就会逐帧 显示→隐藏→显示，看起来像名字在抽搐。
      const lim = rec._vis ? 1.18 : 1.15;
      const maxR = rec._vis ? 118 : 110;
      const visible = mode === 'solar' && v.z < 1 && Math.abs(v.x) < lim && Math.abs(v.y) < lim
        && rpx0 < maxR && rpx0 >= minR;
      if (!visible) {
        if (rec._vis) { rec.div.style.opacity = '0'; rec.div.style.pointerEvents = 'none'; rec._op = 0; }
        rec._vis = false;
        continue;
      }
      const sx = (v.x * 0.5 + 0.5) * width, sy = (-v.y * 0.5 + 0.5) * height;
      shown.push({ id, rec, sx, sy, rpx: rpx0,
                   ring: id === hoverId && rpx0 > 2 && rpx0 < 90 });
      rec._vis = true;
    }

    // 标签避让：默认放上方；与已放置的标签冲突就翻到下方；连续几帧都挤才隐藏。
    // ⚠️ "名字抽搐"的两个成因都在这里：
    //   ① 尺寸每帧读 offsetWidth/offsetHeight —— 强制同步重排，量到的框会随
    //      字体加载、缩放在小范围内跳动，判定跟着抖。现在只在第一次量。
    //   ② 上下两侧每帧重新裁决 —— 两个挨得近的标签会逐帧互相把对方挤到另一侧。
    //      现在只有「当前位确实冲突 + 另一位干净 + 距上次翻面 >320ms」才翻。
    shown.sort((a, b) => a.sx - b.sx);
    const boxes = [];
    const pad = 10;
    const FLIP_HOLD = 480;
    for (const item of shown) {
      const rec = item.rec;
      // 标签偏移固定为「天体半径 + 14」，不要因为悬停而临时变远——
      // 那会在指针进入的一瞬间把名字弹开一大截，看起来同样像抽搐。
      // 锁定环改为紧贴天体（见下方 rr），环线自然落在名字左侧。
      const off = Math.max(item.rpx, 4);
      item._off = off;
      const gap = off + 10;
      const lx = Math.round(item.sx + off + 14);
      item._lx = lx;

      if (rec.w == null) {
        const w0 = rec.div.offsetWidth, h0 = rec.div.offsetHeight;
        if (w0 && h0) { rec.w = w0; rec.h = h0; }
      }
      const w = rec.w || 96, h = rec.h || 34;

      // inflate > 0 = 需要"压得更深"才算冲突；< 0 = 需要留出余量才算干净。
      // 用一正一负造一个死区：位置在临界线上时既不满足"当前位很挤"、
      // 也不满足"另一侧很空"，于是保持原样，不会被相邻标签推着来回跳。
      const clash = (above, inflate = 0) => {
        const ly = above ? item.sy - gap : item.sy + gap;
        const top = above ? ly - h : ly;
        return boxes.some(b => lx < b.x + b.w + pad + inflate && lx + w + pad + inflate > b.x &&
                               top < b.y + b.h + pad + inflate && top + h + pad + inflate > b.y);
      };

      let above = rec._above;
      if (above === undefined) {
        above = !clash(true);                                   // 首选上方
      } else if (clash(above, 4) && !clash(!above, -4) &&
                 nowMs - (rec._flipAt || -1e9) > FLIP_HOLD) {
        // 只在「当前位明显被压住 + 另一侧明显更空 + 距上次翻面够久」时才翻
        above = !above;
        rec._flipAt = nowMs;
      }
      rec._above = above;
      item._above = above;

      if (clash(above)) {
        rec._bad = (rec._bad || 0) + 1;
        if (rec._bad > 4) { item._hide = true; continue; }       // 连续 5 帧都挤才隐藏
      } else {
        rec._bad = 0;
      }
      const ly = above ? item.sy - gap : item.sy + gap;
      boxes.push({ x: lx, y: above ? ly - h : ly, w, h });
    }

    for (const item of shown) {
      const { id, rec, sx, sy, rpx } = item;
      if (item._hide) {
        if (rec._op !== 0) { rec.div.style.opacity = '0'; rec._op = 0; }
        rec.div.style.pointerEvents = 'none';
        continue;
      }
      const op = (id === selectedId || id === hoverId) ? 1 : 0.86;
      if (rec._op !== op) { rec.div.style.opacity = String(op); rec._op = op; }
      rec.div.style.pointerEvents = 'auto';
      // 整数像素定位：亚像素坐标会让文字在缓慢移动时发虚、发颤
      const gap = item._off + 10;
      const ly = Math.round(item._above ? sy - gap : sy + gap);
      rec.div.style.left = item._lx + 'px';
      rec.div.style.top = ly + 'px';
      rec.div.style.transform = item._above ? 'translate(0,-100%)' : 'translate(0,0)';

      if (item.ring) {
        // 环紧贴天体边缘：外沿 = rr+14 ≈ rpx+16，仍在标签（rpx+14 起）之前的
        // 一点点余量内不会压字；以前的 1.45r+8 会把环线画到名字正中。
        const rr = Math.max(rpx + 2, 10);
        const tk = rr + 7;
        this.hoverRing.style.opacity = '1';
        this.hoverRing.setAttribute('transform', `translate(${sx},${sy})`);
        this.ringFill.setAttribute('r', rr);
        this.ringCircle.setAttribute('r', rr);
        const seg = [[-tk - 7, 0, -tk, 0], [tk, 0, tk + 7, 0], [0, -tk - 7, 0, -tk], [0, tk, 0, tk + 7]];
        this.ringTicks.forEach((ln, i) => {
          ln.setAttribute('x1', seg[i][0]); ln.setAttribute('y1', seg[i][1]);
          ln.setAttribute('x2', seg[i][2]); ln.setAttribute('y2', seg[i][3]);
        });
        this.leader.style.display = 'none';   // 锁定环已经够清楚，不再拉引线（会像多出来一根指针）
        ringShown = true;
      }
    }

    if (!ringShown) {
      this.hoverRing.style.opacity = '0';
      this.leader.style.display = 'none';
      // 环没画出来（比如目标占屏超过 90px）就必须把准星还回来，
      // 否则准星藏了、环又没画——指针凭空消失
      if (this.hoverId) this.setReticleHover(false);
    }
  }

  setReticleHover(on) {
    // 悬停天体时整枚准星隐去，只留金色锁定环——否则两条十字叠在一起像重影
    this.reticle.classList.toggle('hovering', on);
    this.reticle.style.opacity = on ? '0' : '';
  }
}
