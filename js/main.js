// ============================================================
//  main.js — 总调度：渲染 / 模式状态机 / 拾取 / 时间 / 天象编排
// ============================================================

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { PLANETS, ECLIPSES, CONSTELLATIONS, MOONS } from './data.js?v=207';
import { dateToJD, jdToDate, planetPosition, moonPosition, geocentricLon, findAlignments, fmtDateLocal, OVERVIEW_WIDTH, OVERVIEW_CX } from './astro.js?v=207';
import { createDeepSpace } from './starfield.js?v=207';
import { SolarSystem } from './solar.js?v=207';
import { FlightController } from './flight.js?v=207';
import { UI } from './ui.js?v=207';
import { initLoading } from './loading.js?v=207';

// ---------- 渲染基础 ----------
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020204);

// 参考站总览是正交投影的"图谱"构图。这里用透视 + 按视高反推距离，
// 在中心平面上的取景范围与正交完全一致（视宽 197.8）。
//
// ⚠️ 视角分两档，别再用一个固定 FOV：
//   全景（总览 / 拉远）用 60°，特写用 40°。
//   只用 40° 的话，天球背景（银河、星点）会被整体放大 1.6 倍，
//   在太阳系视图里看起来"银河被拉近了"。视高 viewHeight 才是构图基准，
//   FOV 只决定相机站多远，所以切换 FOV 不会动行星的位置。
const FOV_TIGHT = 40;      // 特写：透视收敛，行星占满画面
const FOV_WIDE = 60;       // 全景：背景回到正常尺度
function fovForVH(vh) {
  // 只在"总览尺度"附近放宽到 60°：贴太近（特写）和拉太远（深空）都回到 40°。
  // 深空保持窄视角是刻意的——那里银河占满画面才有尺度感；
  // 太阳系总览则必须用广角，否则整个天球背景会被放大 1.6 倍。
  const lg = Math.log(Math.max(vh, 0.5));
  const up   = Math.min(1, Math.max(0, (lg - Math.log(40))  / (Math.log(120)  - Math.log(40))));
  const down = Math.min(1, Math.max(0, (lg - Math.log(600)) / (Math.log(4000) - Math.log(600))));
  return FOV_TIGHT + (FOV_WIDE - FOV_TIGHT) * up * (1 - down);
}
const camera = new THREE.PerspectiveCamera(FOV_WIDE, innerWidth / innerHeight, 0.02, 200000);

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
const nebGroup = deepSky.getObjectByName('nebulae');
// 深空层（星座连线 + 星云）淡入淡出：切换视角时按透明度渐变，
// 不再"凭空出现 / 瞬间消失"。baseOp 记录每个材质的原始不透明度。
let skyFade = 0;
function applySkyFade(f) {
  skyFade = f;
  for (const g of [constGroup, nebGroup]) {
    if (!g) continue;
    g.visible = f > 0.012;
    g.traverse(o => {
      const m = o.material;
      if (!m || m.opacity === undefined) return;
      if (m.userData.baseOp === undefined) m.userData.baseOp = m.opacity;
      m.opacity = m.userData.baseOp * f;
    });
  }
}

// 轻量补间：给"太阳系缩小退场 / 星座淡入"这类一次性动画用
const tweens = [];
const easeInOutT = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
function addTween(dur, fn, done) { tweens.push({ t: 0, dur, fn, done }); }
function stepTweens(dt) {
  for (let i = tweens.length - 1; i >= 0; i--) {
    const tw = tweens[i];
    tw.t = Math.min(tw.dur, tw.t + dt);
    const e = tw.dur > 0 ? tw.t / tw.dur : 1;
    tw.fn(e);
    if (e >= 1) { tweens.splice(i, 1); if (tw.done) tw.done(); }
  }
}

function setSolarVisible(v) { solar.group.visible = v; }
const solar = new SolarSystem(scene);
const flight = new FlightController(camera, canvas);
flight.fovForVH = fovForVH;          // 让飞行层自己按视高调视角

// ---------- 视角常量 ----------
const DEEP_CAM = new THREE.Vector3(-5200, 5600, 12600);   // 对准银道带：带斜穿画面（参考站构图）

// 参考站相机（运行时 __atlasCamera 实测）：
//   target = (91.08, 0, 0)、可视高度 128.465（1512×982）、yaw 0、pitch 0
//   即"视宽 197.8 世界单位固定、太阳压在画面左缘 4%、行星沿 +X 一字排开"
// pitch 取 0.03 弧度（≈1.7°）：与参考站 0° 几乎一致，但让黄道面有极轻微的
// 椭圆厚度，小行星带才是一条有体的尘带而不是一根线。
const BASE_PITCH = 0.058;
const _tanHalf = () => Math.tan(FOV_TIGHT * Math.PI / 360);   // 特写取景用的半角
const distForViewHeight = vh => vh / (2 * Math.tan(FOV_WIDE * Math.PI / 360));

function computeOverviewCam(pitch = BASE_PITCH) {
  const vh = OVERVIEW_WIDTH / Math.max(camera.aspect, 0.42);
  const D = distForViewHeight(vh);
  const target = new THREE.Vector3(OVERVIEW_CX, 0, 0);
  const camPos = new THREE.Vector3(target.x, Math.sin(pitch) * D, Math.cos(pitch) * D);
  return { camPos, target, D };
}
const ORIGIN = new THREE.Vector3(0, 0, 0);

// ---------- 时间 ----------
let jd = dateToJD(new Date());   // 默认"今天"：打开页面显示当前时刻（可用速率按钮推进、回到今天一键对齐）
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
  onGoSolar: () => { positionMode === 'real' ? goRealOverview() : goOverview(); },
  onTab: (id) => { if (id === 'deep') goDeep(); else goOverview(); },
  onOpenEvents: () => openEvents(),
  onCloseEvents: () => ui.hideEvents(),
  onSpeed: (i) => { speedIdx = i; ui.setActiveSpeed(i); },
  // 拖动天象时间轴：把 -1..1 映射到「食甚 ±halfMin」的真实时刻
  onScrubTimeline: (v) => {
    if (!evTimeline) return;
    jd = evTimeline.peakJd + (v * evTimeline.halfMin) / 1440;
  },
  // 「实时」：跳到现在 → 切真实历表 → 从这一刻起按真实时间流动
  //（倍速在按钮的悬停面板里调，速度值仍是 SPEEDS 里的实时倍率）
  onRealtime: () => {
    // 回到"现在"就不再是某场天象的放映了，时间轴一并收起
    ui.hideTimeline();
    evTimeline = null;
    jd = dateToJD(new Date());
    positionMode = 'real';
    ui.setPositionMode('real');
    speedIdx = 1;            // 点击即回到 1:1 真实时间；想加速用悬停面板
    ui.setActiveSpeed(speedIdx);
    ui.flashSpeedPop?.();   // 提示倍速面板（1:1 下运动极慢）
    goRealOverview();      // 以太阳为中心的真实机位，行星按历表散落各处
  },
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
    // 两种排布各回各的机位：示意 = 参考站直线构图；实时 = 以太阳为中心
    if (positionMode === 'schematic') goOverview(); else goRealOverview();
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
let deepArrived = false;   // 防止 onDone / onFlightCancel 双触发

// 深空落地收尾：太阳系缩小退场 + 星座淡入。
// 无论飞行正常飞完还是被用户中途拖拽打断，都必须执行——
// 否则太阳系悬在半空不退场、星座永远不出现。
function arriveDeep() {
  if (deepArrived) return;
  deepArrived = true;
  deepReady = true;
  flight.onFlightCancel = null;   // 已落地，中断钩子作废，避免之后误触发
  // 太阳系退场：轨道盘跟着整体一起缩小，渐隐到看不见再收——
  // 以前先瞬间收掉轨道盘再做缩放，缩的是几个看不见的点，等于没做
  addTween(1.6, e => {
    solar.group.scale.setScalar(Math.max(0.001, 1 - easeInOutT(e)));
  }, () => {
    solar.setOrbitsVisible(false);
    setSolarVisible(false);
    solar.group.scale.setScalar(1);   // 复位，下次进场是正常尺寸
  });
  // 星座与星云淡入：随透明度慢慢浮现，不再凭空出现
  addTween(2.0, e => applySkyFade(e * e * (3 - 2 * e)));
  flight.setRange(50, 16000);      // 别拉出银河天球（半径 19700）之外
}

function goDeep() {
  mode = 'deep';
  tweens.length = 0;              // 换模式时作废未完成的过渡补间
  deepArrived = false;
  flight.setFreePitch(true);      // 深空：没有地平线，随便往哪转
  selectedId = null; hoverId = null; eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null);
  ui.hideTimeline();
  evTimeline = null; flight.setAutoOrbit(false);
  // 关键：飞行过程中太阳系必须还在，否则就是"对着空星空拉远"
  // 落地（3.6s）后太阳系整体缩小退场、星座淡入，形成"退场—抵达"的层次
  solar.setOrbitsVisible(true);
  setSolarVisible(true);
  solar.group.scale.setScalar(1);
  applySkyFade(0);
  ui.setRailActive(null);
  flight.follow(null);
  ui.setMode('deep');
  ui.hideCard();
  deepReady = false;
  flight.onFlightCancel = arriveDeep;
  flight.flyTo({
    camPos: DEEP_CAM.clone(), target: ORIGIN.clone(), duration: 3.8,
    onDone: arriveDeep,
  });
}

function enterSolar() {
  mode = 'solar';
  tweens.length = 0;
  deepReady = false;
  flight.setFreePitch(false);
  solar.setOrbitsVisible(true);
  setSolarVisible(true);
  solar.group.scale.setScalar(1);
  // 星座连线淡出，而不是瞬间消失
  if (skyFade > 0.01) addTween(1.1, e => applySkyFade(skyFade * (1 - e)), () => applySkyFade(0));
  ui.hideConstPanel();
  ui.setMode('solar');
  const oc = computeOverviewCam();
  flight.flyTo({
    camPos: oc.camPos, target: oc.target, duration: 3.3,
    onDone: () => { flight.setRange(60, 18500); },
  });
}

function goOverview() {
  mode = 'solar';
  tweens.length = 0;
  deepReady = false;
  flight.setFreePitch(false);
  selectedId = null; hoverId = null; eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null);
  ui.hideTimeline();
  evTimeline = null; flight.setAutoOrbit(false);
  solar.setOrbitsVisible(true);
  setSolarVisible(true);
  solar.group.scale.setScalar(1);
  // 星座连线淡出：从深空飞回来时随视野一起退场，而不是突然抽走
  if (skyFade > 0.01) addTween(1.1, e => applySkyFade(skyFade * (1 - e)), () => applySkyFade(0));
  ui.hideConstPanel();
  ui.setRailActive(null);
  flight.follow(null);
  ui.setMode('solar');
  ui.hideCard();
  ui.hideEvents();
  const oc2 = computeOverviewCam();
  flight.flyTo({
    camPos: oc2.camPos, target: oc2.target, duration: 3.3,
    onDone: () => { flight.setRange(0.9, 18500); },
  });
}

// 实时轨道总览：行星按真实历表散落各处（不再是一条直线），
// 相机也换成以太阳为中心的机位——对着太阳、取景收到木星轨道外侧，
// 别再沿用示意排布那套"给直线定制"的偏心构图
function goRealOverview() {
  mode = 'solar';
  tweens.length = 0;
  deepArrived = false;
  deepReady = false;
  flight.setFreePitch(false);
  selectedId = null; hoverId = null; eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null);
  ui.hideTimeline();
  evTimeline = null; flight.setAutoOrbit(false);
  solar.setOrbitsVisible(true);
  setSolarVisible(true);
  solar.group.scale.setScalar(1);
  if (skyFade > 0.01) addTween(1.1, e => applySkyFade(skyFade * (1 - e)), () => applySkyFade(0));
  ui.hideConstPanel();
  ui.setRailActive(null);
  flight.follow(null);
  ui.setMode('solar');
  ui.hideCard();
  ui.hideEvents();
  const vh = OVERVIEW_WIDTH / Math.max(camera.aspect, 0.42);   // 与示意总览同尺度
  const D = distForViewHeight(vh);
  flight.flyTo({
    camPos: new THREE.Vector3(0, Math.sin(BASE_PITCH) * D, Math.cos(BASE_PITCH) * D),
    target: new THREE.Vector3(0, 0, 0),     // 正对太阳
    duration: 2.7,
    onDone: () => flight.setRange(0.9, 18500),
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
  if (moved >= 5 || flight.isFlying) return;
  if (hoverId && mode === 'solar') selectPlanet(hoverId);
  else if (aimNeb && mode === 'deep') focusNebula(aimNeb.info.id);
  else if (aimConst && mode === 'deep') focusConst(aimConst.id);
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
  // 先收集所有投影在指针附近的候选，再做遮挡剔除：
  // 候选天体的中心若被"更近、且屏幕上更大"的天体圆面盖住，就不该被点到——
  // 否则月球特写时，藏在它背后的金星也会莫名其妙跳出锁定环。
  const cands = [];
  for (const [id, b] of solar.bodies) {
    _hv.copy(b.worldPos).project(camera);
    if (_hv.z > 1 || Math.abs(_hv.x) > 1.2 || Math.abs(_hv.y) > 1.2) continue;
    const dx = (_hv.x - pointer.x) * innerWidth / 2;
    const dy = (_hv.y - pointer.y) * innerHeight / 2;
    const dist = camera.position.distanceTo(b.worldPos);
    const rpx = (b.displayR / (dist * Math.tan(camera.fov * Math.PI / 360))) * (innerHeight / 2);
    if (b.isMoon && rpx < 3) continue;      // 总览时别误点到贴在行星上的卫星
    cands.push({ id, d: Math.hypot(dx, dy), dist, rpx,
                 sx: (_hv.x * 0.5 + 0.5) * innerWidth,
                 sy: (-_hv.y * 0.5 + 0.5) * innerHeight });
  }
  let bestId = null, bestD = Infinity;
  for (const c of cands) {
    if (c.d >= Math.max(c.rpx + 6, 14) || c.d >= bestD) continue;
    const occluded = cands.some(o => o !== c && o.dist < c.dist * 0.999 && o.rpx > c.rpx &&
      Math.hypot(o.sx - c.sx, o.sy - c.sy) < o.rpx * 0.96);
    if (occluded) continue;
    bestD = c.d; bestId = c.id;
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

// ---------- 深空：星座 / 星云瞄准 ----------
let aimConst = null, aimNeb = null;
const _cv = new THREE.Vector3();
const _cv2 = new THREE.Vector3();

function clearAim() {
  aimConst = null; aimNeb = null;
  constGroup?.userData.setHighlight?.(null);
  nebGroup?.userData.setHighlight?.(null);
  ui.hideAim();
  ui.setReticleHover(false);
}

function updateAim() {
  if (mode !== 'deep' || !constGroup || skyFade < 0.5) {
    if (aimConst || aimNeb) clearAim();
    return;
  }
  const mx = (pointer.x * 0.5 + 0.5) * innerWidth;
  const my = (-pointer.y * 0.5 + 0.5) * innerHeight;
  const tanH = Math.tan(camera.fov * Math.PI / 360);

  // 星座：识别区 85px（原来 110 太大，"还没到就有变化"）
  let bc = null, bcScore = 1;
  for (const c of window.__constData || []) {
    _cv.copy(c.center).project(camera);
    if (_cv.z > 1) continue;
    const sx = (_cv.x * 0.5 + 0.5) * innerWidth;
    const sy = (-_cv.y * 0.5 + 0.5) * innerHeight;
    const d = Math.hypot(sx - mx, sy - my);
    const score = d / 85;
    if (score < bcScore) { bcScore = score; bc = c; }
  }

  // 星云：容差按它在屏幕上的半径算（大星云更容易点中）
  let bn = null, bnScore = 1;
  for (const n of window.__nebData || []) {
    _cv2.copy(n.center).project(camera);
    if (_cv2.z > 1) continue;
    const sx = (_cv2.x * 0.5 + 0.5) * innerWidth;
    const sy = (-_cv2.y * 0.5 + 0.5) * innerHeight;
    const dist = camera.position.distanceTo(n.center);
    const rpx = (n.size * 0.5) / (dist * tanH) * (innerHeight / 2);
    if (rpx < 10) continue;
    const score = Math.hypot(sx - mx, sy - my) / Math.max(rpx * 0.8, 22);
    if (score < bnScore) { bnScore = score; bn = n; }
  }

  // 迟滞：已经瞄准的目标按 1.3 倍识别区保留，防止在边缘来回闪烁
  if (bc && aimConst && bc.id === aimConst.id) bcScore /= 1.3;
  if (bn && aimNeb && bn.info.id === aimNeb.info.id) bnScore /= 1.3;

  // 两者都命中时，按"离中心更近"的那一个算
  const kind = bn && (!bc || bnScore <= bcScore) ? 'neb' : (bc ? 'const' : null);
  const id = kind === 'neb' ? bn.info.id : (bc ? bc.id : null);
  const prev = aimNeb ? aimNeb.info.id : (aimConst ? aimConst.id : null);
  if (id !== prev) {
    aimNeb = kind === 'neb' ? bn : null;
    aimConst = kind === 'const' ? bc : null;
    constGroup.userData.setHighlight?.(aimConst ? aimConst.id : null);
    nebGroup.userData.setHighlight?.(aimNeb ? aimNeb.info.id : null);
    ui.setReticleHover(!!id);
    if (!id) ui.hideAim();
  }
  if (aimNeb) ui.showNebAim(aimNeb.info, mx, my);
  else if (aimConst) ui.showConstAim(aimConst, mx, my);
}

// ---------- 聚焦天体 ----------
const planetIds = PLANETS.map(p => p.id);

function selectPlanet(id) {
  const b = solar.get(id);
  if (!b) return;
  selectedId = id;
  eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null);
  ui.hideTimeline();
  evTimeline = null; flight.setAutoOrbit(true);   // 特写默认缓慢环绕
  ui.setAutoOrbitView(true);
  const kind = b.info.kind || (id === 'sun' ? 'star' : 'planet');
  const cat = kind === 'star' ? '恒星' : kind === 'moon' ? '卫星' : kind === 'comet' ? '彗星' : '行星';
  const enKind = kind === 'star' ? 'STAR' : kind === 'moon' ? 'SATELLITE' : kind === 'comet' ? 'COMET' : 'PLANET';
  ui.showFocusTitle(b.info, cat);
  // 「它的卫星」按钮列表：地球月球是特殊 id 'moon'，其余是 'moon-<名>'
  const moons = kind === 'moon' ? [] :
    id === 'earth' ? [{ id: 'moon', cn: '月球' }] :
    (MOONS[id] || []).map(md => ({ id: 'moon-' + md.id, cn: md.info.cn }));
  ui.showCard(b.info, `${enKind} · ${b.info.en.toUpperCase()}`, moons);
  ui.showDirPanel(b.info);

  const p = b.worldPos;
  // 特写距离：行星半径 ≈ 画面半高的 0.42（"占半屏"），按 fov 反解
  // 有卫星系的星球要退远一点；彗星用 focusR 取景（要看彗发和彗尾，不是看彗核）
  const frameR = b.focusR || b.displayR;
  const dist = Math.max(frameR * 5.6, 0.6, (b.moonOuter || 0) * 0.55);
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
  flight.flyTo({ camPos, target, duration: 2.4, arc: 0, onDone: () => flight.setRange(frameR * 1.2, 4000) });
  flight.follow(b);
  ui.setRailActive(id);
}

// 观察视角：相对太阳的三个方位（向阳面/晨昏线/背光面）
function setViewAngle(v) {
  const b = solar.get(selectedId);
  if (!b) return;
  const p = b.worldPos;
  const toSun = p.clone().negate().normalize();              // 行星→太阳（太阳在原点，取反向）
  const perp = new THREE.Vector3().crossVectors(toSun, new THREE.Vector3(0, 1, 0)).normalize();
  // 有卫星系的星球要退远一点；彗星用 focusR 取景（要看彗发和彗尾，不是看彗核）
  const frameR = b.focusR || b.displayR;
  const dist = Math.max(frameR * 5.6, 0.6, (b.moonOuter || 0) * 0.55);
  let dir;
  if (v === 'sun') dir = toSun.clone();                      // 向阳面：从太阳看
  else if (v === 'dark') dir = toSun.clone().negate();       // 背光面
  else dir = perp.clone().add(toSun.clone().multiplyScalar(0.15)).normalize();  // 晨昏线
  flight.follow(b);
  flight.flyTo({
    camPos: p.clone().add(dir.multiplyScalar(dist)),
    target: p.clone(),
    duration: 2.1, arc: 0.08,
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
// 天象时间轴：把"食甚/最近"前后一段时间映射到滑杆，拖动即改写模拟时刻
let evTimeline = null;        // { peakJd, halfMin, kind }

function jumpEclipse(ev) {
  ui.hideEvents();
  mode = 'solar';
  tweens.length = 0;
  flight.setFreePitch(false);
  solar.setOrbitsVisible(true);
  setSolarVisible(true);
  solar.group.scale.setScalar(1);
  applySkyFade(0);               // 从深空直接跳天象时，把星座/星云一起收干净
  ui.setMode('solar');
  ui.hideCard();
  selectedId = null;
  speedIdx = 0; ui.setActiveSpeed(0);
  jd = parseUTC(ev.date, ev.time);
  eclipseEvent = ev;
  eclipseView = ev.kind;
  // 日食 ±2.5 小时、月食 ±3.5 小时：足够覆盖初亏→食甚→复圆
  const halfMin = ev.kind === 'solar' ? 150 : 210;
  solar.eclipseAnnular = /环/.test(ev.label);
  solar.eclipsePartial = /偏/.test(ev.label);
  evTimeline = { peakJd: jd, halfMin, kind: ev.kind };
  ui.showTimeline({
    label: ev.label,
    peakText: `食甚 ${ev.date.replace(/-/g, '.')} ${ev.time} UTC`,
    halfMin,
  });
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
      // 远景：太阳—地球—月影锥整个几何关系（月球在 10 单位处，取景框要罩住全程）
      far:    { cam: ep.clone().add(antiSun.clone().multiplyScalar(9)).add(perp.clone().multiplyScalar(12)).add(new THREE.Vector3(0, 3.0, 0)), target: ep.clone().add(antiSun.clone().multiplyScalar(5)), range: [0.4, 800] },
      // 侧视：地影锥与红月同框
      side:   { cam: ep.clone().add(antiSun.clone().multiplyScalar(5)).add(perp.clone().multiplyScalar(9)).add(new THREE.Vector3(0, 1.5, 0)), target: ep.clone().add(antiSun.clone().multiplyScalar(5)), range: [0.3, 400] },
      // 近景：贴着红月
      close:  { cam: moonP.clone().add(antiSun.clone().multiplyScalar(0.85)).add(perp.clone().multiplyScalar(0.62)).add(new THREE.Vector3(0, 0.26, 0)), target: moonP.clone(), range: [0.08, 100] },
      // 地面：站上地球朝月面，看月亮被"吃"掉
      ground: { cam: ep.clone().add(moonP.clone().sub(ep).normalize().multiplyScalar(0.455 * 1.015)), target: moonP.clone(), range: [0.25, 800] },
    };
    const v = spots[id];
    // 近景贴月时相机跟着月球走：拖动时间轴月球会横向移动 ±0.6 单位，
    // 若还锁在地球上，红月会直接飘出画面
    flight.follow(id === 'close' ? moon : earth);
    flight.flyTo({ camPos: v.cam, target: v.target, duration: 2.5, arc: 0.12, onDone: () => flight.setRange(...v.range) });
  } else {
    const moonP = moon.worldPos;
    const toSun = ep.clone().negate().normalize();               // 地→日（太阳在原点，取反向）
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
    flight.flyTo({ camPos: v.cam, target: v.target, duration: 2.5, arc: 0.12, onDone: () => flight.setRange(...v.range) });
  }
}

// ---------- 行星连珠 ----------
function openEvents() {
  ui.showEvents();
  if (!alignCache) {
    setTimeout(() => {
      try {
        alignCache = findAlignments(Math.floor(jd), 3650, 2);
        ui.fillAlignments(alignCache, fmtDateLocal);
      } catch (err) {
        alignCache = [];
        ui.fillAlignments([], fmtDateLocal);   // 扫描出错也要把"正在扫描"占位替换掉
      }
    }, 60);
  }
}

function jumpAlignment(ev) {
  ui.hideEvents();
  mode = 'solar';
  tweens.length = 0;
  flight.setFreePitch(false);
  solar.setOrbitsVisible(true);
  ui.setMode('solar');
  ui.hideCard();
  selectedId = null; eclipseView = null; eclipseEvent = null;
  solar.setEclipseShadows(null);
  ui.showViewbar(null);
  ui.hideTimeline();
  evTimeline = null; flight.setAutoOrbit(false);
  setSolarVisible(true);
  solar.group.scale.setScalar(1);
  applySkyFade(0);
  ui.hideConstPanel();
  speedIdx = 0; ui.setActiveSpeed(0);
  jd = ev.jd;
  // 连珠是几天到几十天的过程，给 ±20 天的时间轴
  evTimeline = { peakJd: ev.jd, halfMin: 20 * 1440, kind: 'align' };
  ui.showTimeline({
    label: '行星连珠',
    peakText: `最接近 ${fmtDateLocal(ev.jd)}`,
    halfMin: evTimeline.halfMin,
    mid: '最近',
  });

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
    duration: 3.3, arc: 0.2, onDone: () => flight.setRange(2, 6000),
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
  if (t > 0 && t < 36) {
    // 本影随距离线性收缩（地球 R=0.455 → 月球距离 10 单位处 ≈0.33），半影为示意过渡带
    const R = Math.max(0, 0.455 - t * 0.0125);
    const P = R + 0.2;
    if (perp < R) f = 1;
    else if (perp < P) f = 1 - (perp - R) / 0.2;
  }
  mat.color.setRGB(1 - 0.55 * f, 1 - 0.82 * f, 1 - 0.90 * f);
  // 全食红铜色自发光，不依赖光照
  mat.emissive.setRGB(0.55 * f, 0.13 * f, 0.05 * f);
}

// ---------- 深空天体凝视（星座 / 星云共用） ----------
function flyToSky(dir) {
  const side = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
  const camPos = dir.clone().multiplyScalar(6200).add(side.clone().multiplyScalar(900)).add(new THREE.Vector3(0, 400, 0));
  const target0 = dir.clone().multiplyScalar(18500);
  // 目标点沿"相机右方向"偏移，让天体落在画面左侧、不被右边的档案卡压住
  const viewDir = target0.clone().sub(camPos).normalize();
  const camRight = new THREE.Vector3().crossVectors(viewDir, new THREE.Vector3(0, 1, 0)).normalize();
  const shift = camPos.distanceTo(target0) * _tanHalf() * camera.aspect * 0.30;
  flight.follow(null);
  flight.flyTo({
    camPos,
    target: target0.add(camRight.multiplyScalar(shift)),
    duration: 2.7, arc: 0.1,
    onDone: () => flight.setRange(2200, 14000),
  });
}

function focusConst(id) {
  const c = CONSTELLATIONS.find(x => x.id === id);
  if (!c) return;
  ui.hideCard();          // 星座卡与行星卡共用同一个位置，别叠在一起
  ui.showConstPanel(c);
  const data = (window.__constData || []).find(x => x.id === id);
  if (!data) return;
  flyToSky(data.center.clone().normalize());
}

// 星云：用真实的赤经赤纬方向取景
function focusNebula(id) {
  const rec = (window.__nebData || []).find(x => x.info.id === id);
  if (!rec) return;
  ui.hideCard();
  ui.showNebulaPanel({ ...rec.info, img: rec.img });   // 配图存在记录上，不在 data 里
  flyToSky(rec.center.clone().normalize());
}

function closeConst() {
  ui.hideConstPanel();
  flight.flyTo({
    camPos: DEEP_CAM.clone(), target: ORIGIN.clone(), duration: 2.5, arc: 0.25,
    onDone: () => flight.setRange(50, 16000),
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
    // 天象时间轴：把当前时刻换算成"距食甚多少分钟"，驱动食相几何与滑杆
    if (evTimeline) {
      const offMin = (jd - evTimeline.peakJd) * 1440;
      if (eclipseEvent) {
        solar.eclipsePhase = Math.max(-1, Math.min(1, offMin / evTimeline.halfMin));
        // 放映到头就自动停下，别让日期一路跑走、月面却卡在接触位置
        if (speed && Math.abs(offMin) > evTimeline.halfMin) {
          speedIdx = 0;
          ui.setActiveSpeed(0);
        }
      }
      ui.updateTimeline(offMin);
    }
    solar.update(jd, speed, camera, elapsed, positionMode);
    solar.camLight.position.copy(camera.position);
    updateEclipseTint();

    // 给每个 mesh 挂上 bodyId 供拾取
    for (const [id, b] of solar.bodies) b.mesh.userData.bodyId = id;

    flight.applyPitchLink(overviewViewHeight());
    flight.update(dt);
    stepTweens(dt);        // 太阳系缩小退场 / 星座淡入淡出
    solar.syncSunDisc(camera);   // 相机定稿后再定位太阳贴片（防"双太阳"错位）
    // 硬性保险：相机永远留在银河天球（半径 19700）之内，防"飞出天球穿模"
    const camL = camera.position.length();
    if (camL > 19000) camera.position.multiplyScalar(19000 / camL);
    updateHover();
    updateAim();

    ui.updateDate(jd);
    ui.updateOverlay(solar.bodies, camera, mode, hoverId, selectedId, innerWidth, innerHeight);
  ui.updateConstLabels(window.__constData || [], camera, mode === 'deep' && deepReady && skyFade > 0.5);

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
  solar.group.scale.setScalar(1);
  setSolarVisible(true);
  applySkyFade(0);
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
  setFreePitch: (v) => flight.setFreePitch(v),
  focusConst: (id) => focusConst(id),
  focusNebula: (id) => focusNebula(id),
  get state() { return { mode, jd, speedIdx, eclipseView, selectedId, positionMode, deepReady, flying: flight.isFlying }; },
};
