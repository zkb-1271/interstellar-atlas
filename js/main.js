// ============================================================
//  main.js — 总调度：渲染 / 模式状态机 / 拾取 / 时间 / 天象编排
// ============================================================

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { PLANETS, ECLIPSES, CONSTELLATIONS } from './data.js?v=119';
import { dateToJD, jdToDate, planetPosition, moonPosition, geocentricLon, findAlignments, fmtDate, OVERVIEW_WIDTH, OVERVIEW_CX } from './astro.js?v=119';
import { createDeepSpace } from './starfield.js?v=119';
import { SolarSystem } from './solar.js?v=119';
import { FlightController, easeOutQuint } from './flight.js?v=119';
import { UI } from './ui.js?v=119';
import { initLoading } from './loading.js?v=119';

// ---------- 渲染基础 ----------
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020204);

// 参考站总览是正交投影的"图谱"构图。这里用 40° 透视 + 按视高反推距离，
// 在中心平面上的取景范围与正交完全一致（视宽 197.8），但行星特写更有立体感。
const OVERVIEW_FOV = 40;
const camera = new THREE.PerspectiveCamera(OVERVIEW_FOV, innerWidth / innerHeight, 0.02, 200000);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.5, 0.5, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ---------- 世界 ----------
initLoading();                    // 先挂钩加载管理器，后面的贴图请求才会被统计
const deepSky = createDeepSpace();
scene.add(deepSky);
const constGroup = deepSky.getObjectByName('constellations');
function setConstVisible(v) { if (constGroup) constGroup.visible = v; }
function setSolarVisible(v) { solar.group.visible = v; }
const solar = new SolarSystem(scene);
const flight = new FlightController(camera, canvas);

// ---------- 视角常量 ----------
const DEEP_CAM = new THREE.Vector3(-5200, 5600, 12600);   // 对准银道带：带斜穿画面（参考站构图）

// 参考站相机（运行时 __atlasCamera 实测）：
//   target = (91.08, 0, 0)、可视高度 128.465（1512×982）、yaw 0、pitch 0
//   即"视宽 197.8 世界单位固定、太阳压在画面左缘 4%、行星沿 +X 一字排开"
// pitch 取 0.03 弧度（≈1.7°）：与参考站 0° 几乎一致，但让黄道面有极轻微的
// 椭圆厚度，小行星带才是一条有体的尘带而不是一根线。
const BASE_PITCH = 0.058;
const _tanHalf = () => Math.tan(OVERVIEW_FOV * Math.PI / 360);
const distForViewHeight = vh => vh / (2 * _tanHalf());

function computeOverviewCam(pitch = BASE_PITCH) {
  const vh = OVERVIEW_WIDTH / Math.max(camera.aspect, 0.42);
  const D = distForViewHeight(vh);
  const target = new THREE.Vector3(OVERVIEW_CX, 0, 0);
  const camPos = new THREE.Vector3(target.x, Math.sin(pitch) * D, Math.cos(pitch) * D);
  return { camPos, target, D };
}
const ORIGIN = new THREE.Vector3(0, 0, 0);

// ---------- 时间 ----------
let jd = dateToJD(new Date(Date.UTC(1974, 3, 12)));   // 参考站默认历元 1974.28
let speedIdx = 0;                                     // 默认静止

// ---------- 状态 ----------
let mode = 'deep';            // 'deep' | 'solar'
let selectedId = null;        // 聚焦的天体
let hoverId = null;
let eclipseView = null;       // 'lunar' | 'solar' | null
let alignCache = null;
// 'schematic' = 参考站图谱排布（行星压缩距离排成一线，默认）；'real' = 真实历表
let positionMode = 'schematic';
let deepReady = false;        // 深空"落地"后才亮星座标签，避免飞行途中提前出现

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
  onViewAngle: (v) => setViewAngle(v),
  onAutoOrbit: (on) => flight.setAutoOrbit(on),
  onTogglePosition: () => {
    positionMode = positionMode === 'schematic' ? 'real' : 'schematic';
    ui.setPositionMode(positionMode);
    // 切回示意时回到总览机位，方便对比
    if (positionMode === 'schematic') goOverview();
  },
  onOpenConst: (id) => focusConst(id),
  onConstClose: () => closeConst(),
});
ui.setActiveSpeed(speedIdx);
ui.setPositionMode(positionMode);
ui.fillEclipses(ECLIPSES);
ui.setMode('deep');
setInterval(() => { if (mode === 'deep' && !document.hidden) ui._setQuote(); }, 12000);

// ---------- 模式切换 ----------
function goDeep() {
  mode = 'deep';
  selectedId = null; hoverId = null; eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null); flight.setAutoOrbit(false);
  // 关键：飞行过程中太阳系必须还在，否则就是"对着空星空拉远"
  // 落地（3.6s）后再收起太阳系、点亮星座连线，形成"退场—抵达"的层次
  solar.setOrbitsVisible(true);
  setSolarVisible(true);
  setConstVisible(false);
  ui.setRailActive(null);
  flight.follow(null);
  ui.setMode('deep');
  ui.hideCard();
  deepReady = false;
  flight.flyTo({
    camPos: DEEP_CAM.clone(), target: ORIGIN.clone(), duration: 3.6,
    onDone: () => {
      deepReady = true;
      setSolarVisible(false);
      setConstVisible(true);
      solar.setOrbitsVisible(false);
      flight.setRange(50, 18500);      // 别拉出银河天球（半径 19700）之外
    },
  });
}

function enterSolar() {
  mode = 'solar';
  deepReady = false;
  solar.setOrbitsVisible(true);
  setSolarVisible(true);
  ui.hideConstPanel();
  ui.setMode('solar');
  const oc = computeOverviewCam();
  flight.flyTo({
    camPos: oc.camPos, target: oc.target, duration: 3.0,
    onDone: () => { setConstVisible(false); flight.setRange(60, 18500); },
  });
}

function goOverview() {
  mode = 'solar';
  deepReady = false;
  selectedId = null; hoverId = null; eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null); flight.setAutoOrbit(false);
  solar.setOrbitsVisible(true);
  setSolarVisible(true);
  ui.hideConstPanel();
  ui.setRailActive(null);
  flight.follow(null);
  ui.setMode('solar');
  ui.hideCard();
  ui.hideEvents();
  const oc2 = computeOverviewCam();
  // 星座连线留到落地再收：从深空飞回来时，连线随视野一起退场更自然
  flight.flyTo({
    camPos: oc2.camPos, target: oc2.target, duration: 3.0,
    onDone: () => { setConstVisible(false); flight.setRange(0.9, 18500); },
  });
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
  ui.showViewbar(null); flight.setAutoOrbit(true);
  ui.setAutoOrbitView(true);
  const cat = id === 'sun' ? '恒星' : id === 'moon' ? '卫星' : '行星';
  ui.showFocusTitle(b.info, cat);
  ui.showCard(b.info, `${cat === '恒星' ? 'STAR' : cat === '卫星' ? 'SATELLITE' : 'PLANET'} · ${b.info.en.toUpperCase()}`);
  ui.showDirPanel(b.info);
  flight.setAutoOrbit(false);
  ui.setAutoOrbitView(false);

  const p = b.worldPos;
  // 特写距离：行星半径 ≈ 画面半高的 0.42（"占半屏"），按 fov 反解
  const dist = Math.max(b.displayR * 5.6, 0.6);
  let dir;
  if (id === 'sun') dir = camera.position.clone().sub(p).normalize();
  else dir = p.clone().negate().normalize();              // 行星 → 太阳（亮面朝向相机）
  const side = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
  const camPos = p.clone()
    .add(dir.clone().multiplyScalar(dist * 0.62))
    .add(side.clone().multiplyScalar(dist * 0.62))
    .add(new THREE.Vector3(0, dist * 0.26, 0));

  // 目标点沿"相机右方向"偏移，让行星落在画面左侧、不被档案卡遮住
  const viewDir = p.clone().sub(camPos).normalize();
  const camRight = new THREE.Vector3().crossVectors(viewDir, new THREE.Vector3(0, 1, 0)).normalize();
  const shift = dist * _tanHalf() * camera.aspect * 0.30;
  const target = p.clone().add(camRight.multiplyScalar(shift));
  flight.flyTo({ camPos, target, duration: 2.0, arc: 0, easing: easeOutQuint, onDone: () => flight.setRange(b.displayR * 1.6, 4000) });
  flight.follow(b);
  ui.setRailActive(id);
}

// 观察视角：相对太阳的三个方位（向阳面/晨昏线/背光面）
function setViewAngle(v) {
  const b = solar.get(selectedId);
  if (!b) return;
  const p = b.worldPos;
  const toSun = p.clone().normalize();                       // 行星→太阳
  const perp = new THREE.Vector3().crossVectors(toSun, new THREE.Vector3(0, 1, 0)).normalize();
  const dist = Math.max(b.displayR * 5.6, 0.6);
  let dir;
  if (v === 'sun') dir = toSun.clone();                      // 向阳面：从太阳看
  else if (v === 'dark') dir = toSun.clone().negate();       // 背光面
  else dir = perp.clone().add(toSun.clone().multiplyScalar(0.15)).normalize();  // 晨昏线
  flight.follow(b);
  flight.flyTo({
    camPos: p.clone().add(dir.multiplyScalar(dist)),
    target: p.clone(),
    duration: 1.8, arc: 0.08,
    onDone: () => flight.setRange(b.displayR * 12, 2000),
  });
}

function closeCard() {
  selectedId = null;
  ui.hideCard();
  ui.hideFocusTitle();
  flight.setAutoOrbit(false);
  flight.follow(null);
  flight.setRange(2, 14000);
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
      far:    { cam: ep.clone().add(antiSun.clone().multiplyScalar(3.6)).add(perp.clone().multiplyScalar(4.4)).add(new THREE.Vector3(0, 2.0, 0)), target: ep.clone().add(antiSun.clone().multiplyScalar(0.4)), range: [0.4, 800] },
      // 侧视：地影锥与红月同框
      side:   { cam: ep.clone().add(antiSun.clone().multiplyScalar(2.0)).add(perp.clone().multiplyScalar(2.4)).add(new THREE.Vector3(0, 0.70, 0)), target: ep.clone().add(antiSun.clone().multiplyScalar(0.75)), range: [0.3, 400] },
      // 近景：贴着红月
      close:  { cam: moonP.clone().add(antiSun.clone().multiplyScalar(0.85)).add(perp.clone().multiplyScalar(0.62)).add(new THREE.Vector3(0, 0.26, 0)), target: moonP.clone(), range: [0.08, 100] },
      // 地面：站上地球朝月面，看月亮被"吃"掉
      ground: { cam: ep.clone().add(moonP.clone().sub(ep).normalize().multiplyScalar(0.455 * 1.015)), target: moonP.clone(), range: [0.25, 800] },
    };
    const v = spots[id];
    flight.flyTo({ camPos: v.cam, target: v.target, duration: 2.2, arc: 0.12, onDone: () => flight.setRange(...v.range) });
  } else {
    const moonP = moon.worldPos;
    const toSun = ep.clone().normalize();                        // 地→日（日面方向）
    const toEarth = ep.clone().sub(moonP).normalize();
    const spots = {
      // 远景：日—月—地全线 + 投向地球的影子
      far:    { cam: ep.clone().add(toSun.clone().multiplyScalar(3.6)).add(perp.clone().multiplyScalar(4.0)).add(new THREE.Vector3(0, 1.9, 0)), target: ep.clone(), range: [0.4, 800] },
      // 侧视：从太阳侧斜看地球——向阳面上能看到本影斑，月球影子迎面投来
      side:   { cam: ep.clone().add(toSun.clone().multiplyScalar(1.9)).add(perp.clone().multiplyScalar(2.3)).add(new THREE.Vector3(0, 0.66, 0)), target: ep.clone(), range: [0.3, 400] },
      // 近景：月影锥与地球的接触面
      close:  { cam: ep.clone().add(toSun.clone().multiplyScalar(1.15)).add(perp.clone().multiplyScalar(0.95)).add(new THREE.Vector3(0, 0.38, 0)), target: ep.clone(), range: [0.08, 100] },
      // 地面：白天面仰望太阳，看月亮吞日
      ground: { cam: ep.clone().add(toSun.clone().multiplyScalar(0.455 * 1.015)), target: ep.clone().add(toSun.clone().multiplyScalar(10)), range: [0.25, 800] },
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
  setSolarVisible(true);
  setConstVisible(false);
  ui.hideConstPanel();
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
    camPos: earth.worldPos.clone().add(mean.clone().multiplyScalar(31)).add(perp.clone().multiplyScalar(58)).add(new THREE.Vector3(0, 24.8, 0)),
    target: earth.worldPos.clone().add(mean.clone().multiplyScalar(33)),
    duration: 3.0, arc: 0.2, onDone: () => flight.setRange(2, 6000),
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
  if (t > 0 && t < 1.9) {
    const R = 0.55 * (1 - t / 1.9);                     // 本影半径
    const P = 0.78 * (1 - t / 3.0);                     // 半影半径
    if (perp < R) f = 1;
    else if (perp < P) f = 1 - (perp - R) / Math.max(P - R, 1e-4);
  }
  mat.color.setRGB(1 - 0.55 * f, 1 - 0.82 * f, 1 - 0.90 * f);
  // 全食红铜色自发光，不依赖光照
  mat.emissive.setRGB(0.55 * f, 0.13 * f, 0.05 * f);
}

// ---------- 星座凝视 ----------
function focusConst(id) {
  const c = CONSTELLATIONS.find(x => x.id === id);
  if (!c) return;
  ui.showConstPanel(c);
  const data = (window.__constData || []).find(x => x.id === id);
  if (!data) return;
  const dir = data.center.clone().normalize();
  const side = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
  flight.follow(null);
  flight.flyTo({
    camPos: dir.clone().multiplyScalar(6200).add(side.clone().multiplyScalar(900)).add(new THREE.Vector3(0, 400, 0)),
    target: dir.clone().multiplyScalar(18500),
    duration: 2.4, arc: 0.1,
    onDone: () => flight.setRange(1500, 26000),
  });
}
function closeConst() {
  ui.hideConstPanel();
  flight.flyTo({
    camPos: DEEP_CAM.clone(), target: ORIGIN.clone(), duration: 2.2, arc: 0.25,
    onDone: () => flight.setRange(50, 30000),
  });
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
    solar.update(jd, speed, camera, elapsed, positionMode);
    solar.camLight.position.copy(camera.position);
    updateEclipseTint();

    // 给每个 mesh 挂上 bodyId 供拾取
    for (const [id, b] of solar.bodies) b.mesh.userData.bodyId = id;

    flight.applyPitchLink(overviewViewHeight());
    flight.update(dt);
    // 从深空飞回时，接近太阳系的过程中把星座连线收掉（别等到最后一帧才跳变）
    if (mode === 'solar' && constGroup && constGroup.visible && flight.viewHeight < 900) setConstVisible(false);
    updateHover();

    ui.updateDate(jd);
    ui.updateOverlay(solar.bodies, camera, mode, hoverId, selectedId, innerWidth, innerHeight);
  ui.updateConstLabels(window.__constData || [], camera, mode === 'deep' && deepReady);

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
// 直接进太阳系总览（用户要求：打开就是参考站那个画面）
function overviewViewHeight() { return OVERVIEW_WIDTH / Math.max(camera.aspect, 0.42); }

function bootSolar() {
  const oc = computeOverviewCam();
  const pose = flight._poseFrom(oc.camPos, oc.target);
  flight.target.copy(pose.target);
  flight.viewHeight = pose.viewHeight;
  flight.yaw = pose.yaw;
  flight.pitch = pose.pitch;
  flight._syncTargets();
  flight.setRange(0.9, 6000);
  camera.position.copy(oc.camPos);
  camera.lookAt(oc.target);
  camera.updateMatrixWorld();
  mode = 'solar';
  solar.setOrbitsVisible(true);
  solar.group.visible = true;
  setSolarVisible(true);
  setConstVisible(false);
  ui.setMode('solar');
  ui.setRailActive(null);
}
bootSolar();

// 调试/验收句柄
window.__scene = {
  camera, flight, solar,
  setMode: (m) => { mode = m; },
  select: (id) => selectPlanet(id),
  overview: () => goOverview(),
  setPositionMode: (m) => { positionMode = m; },
  get state() { return { mode, jd, speedIdx, eclipseView, selectedId, positionMode }; },
};
