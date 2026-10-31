// ============================================================
//  main.js — 总调度：渲染 / 模式状态机 / 拾取 / 时间 / 天象编排
// ============================================================

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { PLANETS, ECLIPSES } from './data.js?v=18';
import { dateToJD, jdToDate, planetPosition, moonPosition, geocentricLon, findAlignments, fmtDate } from './astro.js?v=18';
import { createDeepSpace } from './starfield.js?v=18';
import { SolarSystem } from './solar.js?v=18';
import { FlightController } from './flight.js?v=18';
import { UI } from './ui.js?v=18';

// ---------- 渲染基础 ----------
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020204);

const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 60000);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.72, 0.55, 0.82);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ---------- 世界 ----------
scene.add(createDeepSpace());
const solar = new SolarSystem(scene);
const flight = new FlightController(camera, canvas);

// ---------- 视角常量 ----------
const DEEP_CAM = new THREE.Vector3(9500, 4300, 9500);
const OVERVIEW_CAM = new THREE.Vector3(0, 2100, 3700);
const ORIGIN = new THREE.Vector3(0, 0, 0);

// ---------- 时间 ----------
let jd = dateToJD(new Date());
let speedIdx = 3;

// ---------- 状态 ----------
let mode = 'deep';            // 'deep' | 'solar'
let selectedId = null;        // 聚焦的天体
let hoverId = null;
let eclipseView = null;       // 'lunar' | 'solar' | null
let alignCache = null;

// ---------- UI ----------
const ui = new UI(document.body, {
  onEnterSolar: () => enterSolar(),
  onGoSolar: () => goOverview(),
  onTab: (id) => { if (id === 'deep') goDeep(); else goOverview(); },
  onOpenEvents: () => openEvents(),
  onCloseEvents: () => ui.hideEvents(),
  onSpeed: (i) => { speedIdx = i; ui.setActiveSpeed(i); },
  onToday: () => { jd = dateToJD(new Date()); },
  onCloseCard: () => closeCard(),
  onPlanetNav: (dir) => navPlanet(dir),
  onSelectPlanet: (id) => selectPlanet(id),
  onJumpEclipse: (ev) => jumpEclipse(ev),
  onJumpAlignment: (ev) => jumpAlignment(ev),
  onViewSpot: (id) => setViewSpot(id),
  onAutoOrbit: (on) => flight.setAutoOrbit(on),
});
ui.setActiveSpeed(speedIdx);
ui.fillEclipses(ECLIPSES);
ui.setMode('deep');
setInterval(() => { if (mode === 'deep' && !document.hidden) ui._setQuote(); }, 12000);

// ---------- 模式切换 ----------
function goDeep() {
  mode = 'deep';
  selectedId = null; hoverId = null; eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null); flight.setAutoOrbit(false);
  solar.setOrbitsVisible(false);          // 深空只看星野，轨道线收起
  flight.follow(null);
  ui.setMode('deep');
  ui.hideCard();
  flight.flyTo({
    camPos: DEEP_CAM.clone(), target: ORIGIN.clone(), duration: 3.6, arc: 0.4,
    onDone: () => flight.setRange(50, 30000),
  });
}

function enterSolar() {
  mode = 'solar';
  solar.setOrbitsVisible(true);
  ui.setMode('solar');
  flight.flyTo({
    camPos: OVERVIEW_CAM.clone(), target: ORIGIN.clone(), duration: 4.2, arc: 0.32,
    onDone: () => flight.setRange(5, 14000),
  });
}

function goOverview() {
  mode = 'solar';
  selectedId = null; hoverId = null; eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null); flight.setAutoOrbit(false);
  solar.setOrbitsVisible(true);
  flight.follow(null);
  ui.setMode('solar');
  ui.hideCard();
  ui.hideEvents();
  flight.flyTo({ camPos: OVERVIEW_CAM.clone(), target: ORIGIN.clone(), duration: 2.6, arc: 0.25 });
}

// ---------- 拾取 ----------
const pointer = new THREE.Vector2();
let downXY = null;

canvas.addEventListener('pointerdown', e => { downXY = [e.clientX, e.clientY]; });
canvas.addEventListener('pointerup', e => {
  if (!downXY) return;
  const moved = Math.hypot(e.clientX - downXY[0], e.clientY - downXY[1]);
  downXY = null;
  if (moved < 5 && hoverId && mode === 'solar' && !flight.isFlying) selectPlanet(hoverId);
});
canvas.addEventListener('pointermove', e => {
  pointer.x = (e.clientX / innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / innerHeight) * 2 + 1;
}, { passive: true });

// 屏幕空间容差拾取：总览时行星只有几个像素，几何射线点不中，
// 改为"鼠标到天体屏幕投影点的距离 < max(行星屏幕半径+6, 14px)"判定
const _hv = new THREE.Vector3();
function updateHover() {
  if (mode !== 'solar' || flight.isFlying) { setHover(null); return; }
  let bestId = null, bestD = Infinity;
  for (const [id, b] of solar.bodies) {
    _hv.copy(b.worldPos).project(camera);
    if (_hv.z > 1 || Math.abs(_hv.x) > 1.2 || Math.abs(_hv.y) > 1.2) continue;
    const dx = (_hv.x - pointer.x) * innerWidth / 2;
    const dy = (_hv.y - pointer.y) * innerHeight / 2;
    const d = Math.hypot(dx, dy);
    const dist = camera.position.distanceTo(b.worldPos);
    const rpx = (b.displayR / (dist * Math.tan(camera.fov * Math.PI / 360))) * (innerHeight / 2);
    if (d < Math.max(rpx + 6, 14) && d < bestD) { bestD = d; bestId = id; }
  }
  setHover(bestId);
}
function setHover(id) {
  if (hoverId === id) return;
  hoverId = id;
  ui.hoverId = id;
  ui.setReticleHover(!!id);
  canvas.style.cursor = id ? 'none' : 'none';
}

// ---------- 聚焦天体 ----------
const planetIds = PLANETS.map(p => p.id);

function selectPlanet(id) {
  const b = solar.get(id);
  if (!b) return;
  selectedId = id;
  eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null); flight.setAutoOrbit(false);
  ui.showCard(b.info, id === 'sun' ? 'STAR · SUN' : id === 'moon' ? 'SATELLITE · MOON' : `PLANET · ${b.info.en.toUpperCase()}`);

  const p = b.worldPos;
  const dist = b.displayR * 4.6 + 2.5;
  let dir;
  if (id === 'sun') dir = camera.position.clone().sub(p).normalize();
  else dir = p.clone().sub(ORIGIN).normalize();          // 由日向外
  const side = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
  const camPos = p.clone()
    .add(dir.clone().multiplyScalar(dist * 0.45))
    .add(side.clone().multiplyScalar(dist * 0.8))
    .add(new THREE.Vector3(0, dist * 0.4, 0));

  // 目标点沿"相机右方向"偏移，让行星落在画面左侧、不被档案卡遮住
  const viewDir = p.clone().sub(camPos).normalize();
  const camRight = new THREE.Vector3().crossVectors(viewDir, new THREE.Vector3(0, 1, 0)).normalize();
  const target = p.clone().add(camRight.multiplyScalar(dist * 0.42));
  flight.flyTo({ camPos, target, duration: 1.8, arc: 0.12, onDone: () => flight.setRange(b.displayR * 1.6, 900) });
  flight.follow(b);
}

function closeCard() {
  selectedId = null;
  ui.hideCard();
  flight.follow(null);
  flight.setRange(5, 14000);
}

function navPlanet(dir) {
  const cur = planetIds.indexOf(selectedId);
  const next = planetIds[(((cur === -1 ? 0 : cur) + dir) % planetIds.length + planetIds.length) % planetIds.length];
  selectPlanet(next);
}

// ---------- 日月食 ----------
function parseUTC(date, time) {
  const [y, m, d] = date.split('-').map(Number);
  const [hh, mm] = time.split(':').map(Number);
  return dateToJD(new Date(Date.UTC(y, m - 1, d, hh, mm)));
}

let eclipseEvent = null;      // 当前观看的日月食事件

function jumpEclipse(ev) {
  ui.hideEvents();
  mode = 'solar';
  solar.setOrbitsVisible(true);
  ui.setMode('solar');
  ui.hideCard();
  selectedId = null;
  speedIdx = 0; ui.setActiveSpeed(0);
  jd = parseUTC(ev.date, ev.time);
  eclipseEvent = ev;
  eclipseView = ev.kind;
  solar.setEclipseShadows(ev.kind);
  ui.showViewbar(ev.kind);
  flight.setAutoOrbit(true);
  setViewSpot('side');
}

// 观景位：同一场景的多套机位，全部支持自动环绕
function setViewSpot(id) {
  if (!eclipseEvent) return;
  ui.setViewActive(id);
  // 地面视角"站定看天"，默认不环绕；其余机位保持自转
  const orbitOn = id !== 'ground';
  flight.setAutoOrbit(orbitOn);
  ui.setOrbitActive(orbitOn);
  const earth = solar.get('earth');
  const moon = solar.get('moon');
  const ep = earth.worldPos;
  const antiSun = ep.clone().normalize();                        // 背阳方向
  const perp = new THREE.Vector3().crossVectors(antiSun, new THREE.Vector3(0, 1, 0)).normalize();
  flight.follow(earth);

  if (eclipseView === 'lunar') {
    const moonP = moon.worldPos;
    const spots = {
      // 远景：太阳—地球—月影锥整个几何关系
      far:    { cam: ep.clone().add(antiSun.clone().multiplyScalar(85)).add(perp.clone().multiplyScalar(120)).add(new THREE.Vector3(0, 55, 0)), target: ep.clone(), range: [30, 8000] },
      // 侧视：地影锥与红月同框
      side:   { cam: ep.clone().add(antiSun.clone().multiplyScalar(34)).add(perp.clone().multiplyScalar(38)).add(new THREE.Vector3(0, 10, 0)), target: ep.clone().add(antiSun.clone().multiplyScalar(25)), range: [6, 4000] },
      // 近景：贴着红月
      close:  { cam: moonP.clone().add(antiSun.clone().multiplyScalar(7)).add(perp.clone().multiplyScalar(5)).add(new THREE.Vector3(0, 2, 0)), target: moonP.clone(), range: [2.6, 1000] },
      // 地面：站上地球朝月面，看月亮被"吃"掉
      ground: { cam: ep.clone().add(moonP.clone().sub(ep).normalize().multiplyScalar(2.2 * 1.015)), target: moonP.clone(), range: [1.2, 800] },
    };
    const v = spots[id];
    flight.flyTo({ camPos: v.cam, target: v.target, duration: 2.2, arc: 0.12, onDone: () => flight.setRange(...v.range) });
  } else {
    const moonP = moon.worldPos;
    const toSun = ep.clone().normalize();                        // 地→日（日面方向）
    const toEarth = ep.clone().sub(moonP).normalize();
    const spots = {
      // 远景：日—月—地全线 + 投向地球的影子
      far:    { cam: ep.clone().add(toSun.clone().multiplyScalar(85)).add(perp.clone().multiplyScalar(110)).add(new THREE.Vector3(0, 48, 0)), target: ep.clone(), range: [30, 8000] },
      // 侧视：从太阳侧斜看地球——向阳面上能看到本影斑，月球影子迎面投来
      side:   { cam: ep.clone().add(toSun.clone().multiplyScalar(30)).add(perp.clone().multiplyScalar(46)).add(new THREE.Vector3(0, 13, 0)), target: ep.clone(), range: [6, 4000] },
      // 近景：月影锥与地球的接触面
      close:  { cam: ep.clone().add(toSun.clone().multiplyScalar(20)).add(perp.clone().multiplyScalar(16)).add(new THREE.Vector3(0, 6, 0)), target: ep.clone(), range: [6, 1000] },
      // 地面：白天面仰望太阳，看月亮吞日
      ground: { cam: ep.clone().add(toSun.clone().multiplyScalar(2.2 * 1.015)), target: ep.clone().add(toSun.clone().multiplyScalar(50)), range: [1.2, 800] },
    };
    const v = spots[id];
    flight.flyTo({ camPos: v.cam, target: v.target, duration: 2.2, arc: 0.12, onDone: () => flight.setRange(...v.range) });
  }
}

// ---------- 行星连珠 ----------
function openEvents() {
  ui.showEvents();
  if (!alignCache) {
    setTimeout(() => {
      alignCache = findAlignments(Math.floor(jd), 3650, 2);
      ui.fillAlignments(alignCache, fmtDate);
    }, 60);
  }
}

function jumpAlignment(ev) {
  ui.hideEvents();
  mode = 'solar';
  solar.setOrbitsVisible(true);
  ui.setMode('solar');
  ui.hideCard();
  selectedId = null; eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null); flight.setAutoOrbit(false);
  speedIdx = 0; ui.setActiveSpeed(0);
  jd = ev.jd;

  const T = (jd - 2451545.0) / 36525;
  const earth = solar.get('earth');
  const ids = ['mercury', 'venus', 'mars', 'jupiter', 'saturn'];
  const dirs = ids.map(id => {
    const p = planetPosition(id, T);
    return new THREE.Vector3(p.pos[0] - earth.worldPos.x, p.pos[1] - earth.worldPos.y, p.pos[2] - earth.worldPos.z).normalize();
  });
  const mean = dirs.reduce((a, b) => a.add(b), new THREE.Vector3()).normalize();
  const perp = new THREE.Vector3().crossVectors(mean, new THREE.Vector3(0, 1, 0)).normalize();
  flight.follow(earth);
  flight.flyTo({
    camPos: earth.worldPos.clone().add(mean.clone().multiplyScalar(150)).add(perp.clone().multiplyScalar(280)).add(new THREE.Vector3(0, 120, 0)),
    target: earth.worldPos.clone().add(mean.clone().multiplyScalar(160)),
    duration: 3.0, arc: 0.2, onDone: () => flight.setRange(10, 6000),
  });
}

// 月食染色：月亮钻进地影 → 半影变暗、本影染成红铜色
const _axis = new THREE.Vector3(), _rel = new THREE.Vector3();
function updateEclipseTint() {
  const moon = solar.get('moon'), earth = solar.get('earth');
  const mat = moon.mesh.material;
  if (eclipseView !== 'lunar') { mat.color.setScalar(1); mat.emissive.setScalar(0); return; }
  _axis.copy(earth.worldPos).normalize();               // 背阳方向
  _rel.copy(moon.worldPos).sub(earth.worldPos);
  const t = _rel.dot(_axis);
  const perp = _rel.addScaledVector(_axis, -t).length();
  let f = 0;                                            // 0 照常 → 1 全食
  if (t > 0 && t < 70) {
    const R = 3.4 - 1.5 * t / 70;                       // 本影半径
    if (perp < R) f = 1;
    else if (perp < 4.6) f = 1 - (perp - R) / (4.6 - R);
  }
  mat.color.setRGB(1 - 0.55 * f, 1 - 0.82 * f, 1 - 0.90 * f);
  // 全食红铜色自发光，不依赖光照
  mat.emissive.setRGB(0.55 * f, 0.13 * f, 0.05 * f);
}

// ---------- 主循环 ----------
const clock = new THREE.Clock();
let elapsed = 0;
let lastFrameAt = performance.now();

function frame(dt) {
  try {
    elapsed += dt;
    window.__frames = (window.__frames || 0) + 1;

    const speed = ui.SPEEDS[speedIdx].v;
    jd += speed * dt;
    solar.update(jd, speed);
    solar.camLight.position.copy(camera.position);
    updateEclipseTint();

    // 给每个 mesh 挂上 bodyId 供拾取
    for (const [id, b] of solar.bodies) b.mesh.userData.bodyId = id;

    flight.update(dt);
    updateHover();

    ui.updateDate(jd);
    ui.updateOverlay(solar.bodies, camera, mode, hoverId, selectedId, innerWidth, innerHeight);

    composer.render();
  } catch (err) {
    window.__frameErr = (window.__frameErr || []).concat(String(err && err.stack || err).slice(0, 400));
  }
}

function loop() {
  requestAnimationFrame(loop);
  lastFrameAt = performance.now();
  frame(Math.min(clock.getDelta(), 0.1));
}
loop();

// 兜底心跳：页签被节流（后台/遮挡）导致 rAF 饿死时，用低频定时器驱动飞行等时间线
setInterval(() => {
  if (performance.now() - lastFrameAt > 350) frame(Math.min(clock.getDelta(), 0.4));
}, 140);

// ---------- 自适应 ----------
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
});

// ---------- 启动 ----------
camera.position.copy(DEEP_CAM);
camera.lookAt(ORIGIN);
flight.setTarget(ORIGIN);
flight.setRange(50, 30000);
solar.setOrbitsVisible(false);
setTimeout(() => document.getElementById('loading').classList.add('done'), 900);

// 调试/验收句柄
window.__scene = { camera, flight, solar, setMode: (m) => { mode = m; }, get state() { return { mode, jd, speedIdx, eclipseView, selectedId }; } };
