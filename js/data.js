// ============================================================
//  data.js — 天文数据：轨道要素、行星档案、天象日期、名言
//  轨道要素来源：JPL Approximate Positions of the Planets
//  (J2000 元素 + 每儒略世纪变化率)，精度足够支撑月食/连珠演示
// ============================================================

export const AU = 100;            // 场景单位：1 AU = 100
export const EARTH_RADIUS = 6371; // km

// a     半长轴(AU)      e 离心率     I 倾角(°)
// L     平黄经(°)       ϖ 近日点经度  Ω 升交点经度
// 每行第二组为 每儒略世纪(T) 变化率
export const ORBITAL_ELEMENTS = {
  mercury: { a:[0.38709927,0.00000037], e:[0.20563593,-0.00001906], I:[7.00497902,-0.00594749], L:[252.25032350,149472.67411175], w:[77.45779628,0.16047689], O:[48.33076593,-0.12534081] },
  venus:   { a:[0.72333566,0.00000390], e:[0.00677672,-0.00004107], I:[3.39467605,-0.00078890], L:[181.97909950,58517.81538729], w:[131.60246718,0.00268329], O:[76.67984255,-0.27769418] },
  earth:   { a:[1.00000261,0.00000562], e:[0.01671123,-0.00004392], I:[-0.00001531,-0.01294668], L:[100.46457166,35999.37244981], w:[102.93768193,0.32327364], O:[0.0,0.0] },
  mars:    { a:[1.52371034,0.00001847], e:[0.09339410,0.00007882], I:[1.84969142,-0.00813131], L:[-4.55343205,19140.30268499], w:[-23.94362959,0.44441088], O:[49.55953891,-0.29257343] },
  jupiter: { a:[5.20288700,-0.00011607], e:[0.04838624,-0.00013253], I:[1.30439695,-0.00183714], L:[34.39644051,3034.74612775], w:[14.72847983,0.21252668], O:[100.47390909,0.20469106] },
  saturn:  { a:[9.53667594,-0.00125060], e:[0.05386179,-0.00050991], I:[2.48599187,0.00193609], L:[49.95424423,1222.49362201], w:[92.59887831,-0.41897216], O:[113.66242448,-0.28867794] },
  uranus:  { a:[19.18916464,-0.00196176], e:[0.04725744,-0.00004397], I:[0.77263783,-0.00242939], L:[313.23810451,428.48202785], w:[170.95427630,0.40805281], O:[74.01692503,0.04240589] },
  neptune: { a:[30.06992276,0.00026291], e:[0.00859048,0.00005105], I:[1.77004347,0.00035372], L:[-55.12002969,218.45945325], w:[44.96476227,-0.32241464], O:[131.78422574,-0.00508664] },
};

// 展示半径：2.2 * sqrt(真实半径/地球半径)——特写真实、总览可见
export const PLANETS = [
  { id:'mercury', en:'MERCURY', cn:'水星', type:'rocky', displayR:1.36, spin:0.017,
    radiusKm:2440,  gravity:3.7,  periodDays:87.97,  rotationHours:1407.6, tempC:'-173 ~ 427', moons:0,
    desc:'离太阳最近的行星，表面布满陨石坑。没有大气的保温，昼夜温差是太阳系里最极端的之一。' },
  { id:'venus',   en:'VENUS',   cn:'金星', type:'venus', displayR:2.15, spin:-0.004,
    radiusKm:6052,  gravity:8.87, periodDays:224.70, rotationHours:-5832.5, tempC:'464（均温）', moons:0,
    desc:'大小与地球相仿，却被浓密的二氧化碳大气与硫酸云包裹，表面气压是地球的 92 倍——同一颗太阳下走向两个极端的孪生兄弟。' },
  { id:'earth',   en:'EARTH',   cn:'地球', type:'earth', displayR:2.2, spin:1.0,
    radiusKm:6371,  gravity:9.81, periodDays:365.26, rotationHours:23.93, tempC:'15（均温）', moons:1,
    desc:'目前已知唯一存在生命的世界。液态海洋、活跃的岩 石圈、大气与生物圈相互作用，共同塑造了我们的生活环境。' },
  { id:'mars',    en:'MARS',    cn:'火星', type:'mars', displayR:1.60, spin:0.97,
    radiusKm:3390,  gravity:3.71, periodDays:686.98, rotationHours:24.62, tempC:'-63（均温）', moons:2,
    desc:'锈红色的沙漠世界，拥有太阳系最高的火山奥林帕斯山。干涸的河床暗示它曾经温暖湿润。' },
  { id:'jupiter', en:'JUPITER', cn:'木星', type:'jupiter', displayR:7.29, spin:2.4,
    radiusKm:69911, gravity:24.79, periodDays:4332.6, rotationHours:9.93, tempC:'-108（云顶）', moons:95,
    desc:'太阳系最大的行星，质量是其他七颗行星总和的 2.5 倍。大红斑是一场持续了至少三百年的风暴。' },
  { id:'saturn',  en:'SATURN',  cn:'土星', type:'saturn', displayR:6.65, spin:2.2, ring:true,
    radiusKm:58232, gravity:10.44, periodDays:10759, rotationHours:10.66, tempC:'-139（云顶）', moons:146,
    desc:'拥有太阳系最壮观的环系——由无数冰粒与碎石组成，宽度数十万公里，厚度却常常只有几十米。' },
  { id:'uranus',  en:'URANUS',  cn:'天王星', type:'ice', displayR:4.39, spin:-1.4,
    radiusKm:25362, gravity:8.69, periodDays:30687, rotationHours:-17.24, tempC:'-197（均温）', moons:28,
    desc:'一颗"躺着"自转的冰巨星，自转轴几乎平行于轨道面。大气中的甲烷吸收红光，让它呈现青蓝色。' },
  { id:'neptune', en:'NEPTUNE', cn:'海王星', type:'ice', displayR:4.32, spin:1.5,
    radiusKm:24622, gravity:11.15, periodDays:60190, rotationHours:16.11, tempC:'-201（均温）', moons:16,
    desc:'太阳系最外侧的行星，靠数学计算被预言、后被望远镜证实。这里刮着太阳系最猛烈的风，时速超过 2000 公里。' },
];

export const SUN_INFO = { en:'SUN', cn:'太阳', radiusKm:696000, gravity:274, tempC:'5,500（表面）',
  desc:'一颗 46 亿岁的黄矮星，占据太阳系 99.86% 的质量。它每秒把约 400 万吨物质转化为光与热。' };

export const MOON_INFO = { en:'MOON', cn:'月球', radiusKm:1737, gravity:1.62, periodDays:27.32,
  desc:'地球唯一的天然卫星，潮汐锁定使它永远以同一面朝向我们。' };

// 真实天象日期（极大时刻，UTC）
export const ECLIPSES = [
  { kind:'lunar', date:'2025-03-14', time:'06:58', label:'月全食', en:'TOTAL LUNAR ECLIPSE' },
  { kind:'lunar', date:'2025-09-07', time:'18:12', label:'月全食', en:'TOTAL LUNAR ECLIPSE' },
  { kind:'lunar', date:'2026-03-03', time:'11:33', label:'月全食', en:'TOTAL LUNAR ECLIPSE' },
  { kind:'lunar', date:'2026-08-28', time:'04:13', label:'月偏食', en:'PARTIAL LUNAR ECLIPSE' },
  { kind:'solar', date:'2025-09-21', time:'19:42', label:'日偏食', en:'PARTIAL SOLAR ECLIPSE' },
  { kind:'solar', date:'2026-02-17', time:'12:12', label:'日环食', en:'ANNULAR SOLAR ECLIPSE' },
  { kind:'solar', date:'2026-08-12', time:'17:46', label:'日全食', en:'TOTAL SOLAR ECLIPSE' },
  { kind:'solar', date:'2027-08-02', time:'10:07', label:'日全食', en:'TOTAL SOLAR ECLIPSE' },
];

export const QUOTES = [
  { text:'在某个地方，有某种不可思议的事物正等待着被发现。', who:'卡尔·萨根', year:'1980' },
  { text:'我望进了比任何前人都要深的太空。', who:'威廉·赫歇尔', year:'1783' },
  { text:'记住抬头看星，而不是低头看脚下。', who:'史蒂芬·霍金', year:'2018' },
  { text:'我们是宇宙认识自身的一种方式。', who:'卡尔·萨根', year:'1977' },
  { text:'宇宙比我们所能想象的更大、更古老，也更陌生。', who:'埃德温·哈勃', year:'1936' },
  { text:'行星只是光芒的碎屑，恒星才是夜空真正的主人。', who:'佚名', year:'—' },
];

// 深空模式导航星（用于远景锚定，非真实星表，按亮度/色温手排）
export const NAV_STARS_HINT = 'crosshair';
