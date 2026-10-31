// ============================================================
//  textures.js — 程序化贴图工厂（全部 Canvas 生成，离线可用）
// ============================================================

// ---- 简易 fBm 值噪声 ----
function makeNoise(seed) {
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  let s = seed >>> 0;
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) { s = (s * 1664525 + 1013904223) >>> 0; const j = s % (i + 1); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  const fade = t => t * t * (3 - 2 * t);
  const grad = (h, x, y) => { const g = h & 3; const u = g < 2 ? x : y, v = g < 2 ? y : x; return ((g & 1) ? -u : u) + ((g & 2) ? -v : v); };
  function noise2(x, y) {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
    x -= Math.floor(x); y -= Math.floor(y);
    const u = fade(x), v = fade(y);
    const a = perm[X] + Y, b = perm[X + 1] + Y;
    return (grad(perm[a], x, y) * (1 - u) + grad(perm[b], x - 1, y) * u) * (1 - v)
         + (grad(perm[a + 1], x, y - 1) * (1 - u) + grad(perm[b + 1], x - 1, y - 1) * u) * v;
  }
  return function fbm(x, y, oct = 4) {
    let v = 0, amp = 0.5, f = 1;
    for (let i = 0; i < oct; i++) { v += amp * noise2(x * f, y * f); amp *= 0.5; f *= 2.1; }
    return v;
  };
}

function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }

function wrapX(x, w) { return ((x % w) + w) % w; }

// 让噪声在经度方向无缝：左右取样混合
function seamless(fbm, x, y, w) {
  const a = fbm(x, y), b = fbm(x - w, y);
  return (a * (w - x) + b * x) / w;
}

function hexToRgb(hex) { const n = parseInt(hex.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
function mix(c1, c2, t) { return [c1[0] + (c2[0] - c1[0]) * t, c1[1] + (c2[1] - c1[1]) * t, c1[2] + (c2[2] - c1[2]) * t]; }
function css(c) { return `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`; }

// ================= 行星表面 =================
// texW=1024, texH=512 等距柱状投影
export function makePlanetTexture(type, seed = 7) {
  const W = 1024, H = 512;
  const [cv, ctx] = canvas(W, H);
  const img = ctx.createImageData(W, H);
  const fbm = makeNoise(seed);
  const fbm2 = makeNoise(seed + 100);
  const put = (x, y, r, g, b) => { const i = (y * W + x) * 4; img.data[i] = r; img.data[i + 1] = g; img.data[i + 2] = b; img.data[i + 3] = 255; };

  for (let y = 0; y < H; y++) {
    const lat = y / H;                       // 0 顶 → 1 底
    for (let x = 0; x < W; x++) {
      const nx = x / W * 8, ny = y / H * 4;
      let c = [128, 128, 128];
      if (type === 'rocky' || type === 'moon') {
        const isMoon = type === 'moon';
        const base = isMoon ? [134, 130, 124] : [144, 132, 118];
        const dark = isMoon ? [82, 78, 75] : [90, 80, 70];
        const light = isMoon ? [192, 188, 180] : [200, 186, 168];
        const n1 = seamless(fbm, nx * 1.6, ny * 1.6, 13) * 0.5 + 0.5;
        const n2 = seamless(fbm2, nx * 5, ny * 5, 40) * 0.5 + 0.5;
        const n3 = seamless(fbm, nx * 12 + 7, ny * 12, 96) * 0.5 + 0.5;
        const t = Math.min(1, (n1 * 0.55 + n2 * 0.3 + n3 * 0.15) * 1.25);
        c = mix(dark, base, t);
        if (t > 0.62) c = mix(c, light, (t - 0.62) * 1.8);
        if (isMoon) {                                  // 月海：大块暗斑
          const mare = seamless(fbm2, nx * 0.55 + 3, ny * 0.55, 4.4) * 0.5 + 0.5;
          if (mare > 0.60) c = mix(c, [56, 54, 57], Math.min(0.75, (mare - 0.60) * 2.4));
        }
        const pit = seamless(fbm2, nx * 22, ny * 22, 176) * 0.5 + 0.5;   // 细密凹坑
        if (pit > 0.86) c = mix(c, [42, 40, 38], (pit - 0.86) * 2.2);
        else if (pit < 0.10) c = mix(c, light, (0.10 - pit) * 3);
      } else if (type === 'venus') {
        const n = seamless(fbm, nx * 0.5, ny * 2.2 + Math.sin(nx * 0.8) * 0.6, 4);
        const c1 = [214, 188, 148], c2 = [166, 138, 104];
        c = mix(c2, c1, 0.45 + n * 0.55);
      } else if (type === 'earth') {
        const n = seamless(fbm, nx, ny, 8) * 0.5 + 0.5;
        const cont = n + 0.18 * (seamless(fbm2, nx * 2.3, ny * 2.3, 18) + 0.5);
        const polar = Math.abs(lat - 0.5) * 2;
        if (cont > 0.62) {                                   // 陆地
          const t = Math.min(1, (cont - 0.62) * 4);
          let land = mix([64, 110, 52], [168, 148, 96], t);  // 绿 → 褐
          if (polar > 0.78) land = mix(land, [235, 240, 245], (polar - 0.78) / 0.22);
          c = land;
        } else {                                             // 海洋
          const d = Math.min(1, (0.62 - cont) * 3);
          c = mix([44, 84, 130], [16, 38, 74], d);
        }
        if (polar > 0.92) c = mix(c, [240, 245, 250], (polar - 0.92) / 0.08);
      } else if (type === 'mars') {
        const n = seamless(fbm, nx, ny, 8) * 0.5 + 0.5;
        const m = seamless(fbm2, nx * 0.5 + 3, ny * 0.5, 4) * 0.5 + 0.5;
        c = mix([120, 58, 34], [204, 122, 74], n);
        c = mix(c, [86, 44, 28], m * 0.45);
        const polar = Math.abs(lat - 0.5) * 2;
        if (polar > 0.93) c = mix(c, [232, 226, 218], (polar - 0.93) / 0.07);
      } else if (type === 'jupiter') {
        const warp = seamless(fbm, nx * 0.7, ny * 3, 5) * 0.35;
        const band = Math.sin((lat * 14 + warp) * Math.PI);
        const t = band * 0.5 + 0.5;
        c = mix([148, 106, 76], [222, 198, 168], t);
        const storm = seamless(fbm2, nx * 1.4, ny * 1.4, 4) * 0.5 + 0.5;
        c = mix(c, [104, 74, 54], (1 - storm) * 0.3);
        // 大红斑
        const sx = 0.30 * W, sy = 0.66 * H;
        const dx = Math.min(Math.abs(x - sx), W - Math.abs(x - sx)), dy = y - sy;
        const e = (dx * dx) / (85 * 85) + (dy * dy) / (30 * 30);
        if (e < 1) c = mix([188, 92, 62], c, e * 0.8 + 0.2);
      } else if (type === 'saturn') {
        const warp = seamless(fbm, nx * 0.4, ny * 2, 4) * 0.18;
        const t = Math.sin((lat * 18 + warp) * Math.PI) * 0.5 + 0.5;
        c = mix([196, 168, 122], [234, 216, 180], t);
        const polar = Math.abs(lat - 0.5) * 2;
        if (polar > 0.85) c = mix(c, [150, 148, 128], (polar - 0.85) / 0.15);
      } else if (type === 'ice') {
        const warp = seamless(fbm, nx * 0.5, ny * 2, 4) * 0.12;
        const t = Math.sin((lat * 10 + warp) * Math.PI) * 0.5 + 0.5;
        c = mix([122, 168, 190], [168, 210, 224], t);
        const n = seamless(fbm2, nx, ny, 4) * 0.5 + 0.5;
        c = mix(c, [92, 140, 168], (1 - n) * 0.25);
      }
      put(x, y, c[0], c[1], c[2]);
    }
  }
  ctx.putImageData(img, 0, 0);
  return cv;
}

// 陨石坑叠加（水星/月球）
export function addCraters(cv, count, seed = 3) {
  const ctx = cv.getContext('2d');
  const fbm = makeNoise(seed);
  for (let i = 0; i < count; i++) {
    const x = fbm(i * 2.7, i * 1.3, 2) * 0.5 + 0.5, y = fbm(i * 1.1 + 40, i * 2.3, 2) * 0.5 + 0.5;
    const r = 2 + (fbm(i * 3.1, i * 4.7, 1) * 0.5 + 0.5) * 9;
    const cx = x * cv.width, cy = y * cv.height * 0.9 + cv.height * 0.05;
    for (const ox of [-cv.width, 0, cv.width]) {
      const g = ctx.createRadialGradient(cx + ox, cy, r * 0.1, cx + ox, cy, r);
      g.addColorStop(0, 'rgba(0,0,0,0.15)');
      g.addColorStop(0.62, 'rgba(0,0,0,0.05)');
      g.addColorStop(0.80, 'rgba(0,0,0,0)');
      g.addColorStop(0.92, 'rgba(255,250,240,0.09)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx + ox, cy, r, 0, Math.PI * 2); ctx.fill();
    }
  }
  return cv;
}

// 地球云层（独立透明贴图）
export function makeCloudTexture(seed = 21) {
  const W = 1024, H = 512;
  const [cv, ctx] = canvas(W, H);
  const img = ctx.createImageData(W, H);
  const fbm = makeNoise(seed);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const n = seamless(fbm, x / W * 10, y / H * 5 + 3, 10) * 0.5 + 0.5;
    const a = Math.max(0, (n - 0.52) * 2.6);
    const i = (y * W + x) * 4;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = 255;
    img.data[i + 3] = Math.min(210, a * 255);
  }
  ctx.putImageData(img, 0, 0);
  return cv;
}

// 土星环（径向条带，透明度变化）
export function makeRingTexture() {
  const W = 512, H = 32;
  const [cv, ctx] = canvas(W, H);
  const fbm = makeNoise(99);
  for (let x = 0; x < W; x++) {
    const t = x / W;
    const n = fbm(t * 40, 0.5, 3) * 0.5 + 0.5;
    let a = 0.55 + n * 0.45;
    if (t < 0.06 || t > 0.97) a *= 0.15;              // 内外边缘淡出
    if (t > 0.62 && t < 0.70) a *= 0.12;              // 卡西尼缝
    if (t < 0.30) a *= 0.55 + t * 1.5;
    const r = 216 + n * 24, g = 200 + n * 20, b = 172 + n * 16;
    ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${a})`;
    ctx.fillRect(x, 0, 1, H);
  }
  return cv;
}

// ================= 辉光 / 精灵 =================
export function makeGlowSprite(inner, outer, size = 256) {
  const [cv, ctx] = canvas(size, size);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.25, outer);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
  return cv;
}

export function makeStarSprite(size = 64) {
  const [cv, ctx] = canvas(size, size);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.3, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
  return cv;
}

// 太阳表面：暖色米粒组织
export function makeSunTexture(seed = 55) {
  const W = 1024, H = 512;
  const [cv, ctx] = canvas(W, H);
  const img = ctx.createImageData(W, H);
  const fbm = makeNoise(seed);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const n = seamless(fbm, x / W * 16, y / H * 8, 16) * 0.5 + 0.5;
    const m = fbm(x / 30, y / 30, 3) * 0.5 + 0.5;
    const t = n * 0.7 + m * 0.3;
    const c = mix(mix([255, 120, 30], [255, 190, 70], t), [255, 236, 160], Math.max(0, t - 0.72) * 2.4);
    const i = (y * W + x) * 4;
    img.data[i] = c[0]; img.data[i + 1] = c[1]; img.data[i + 2] = c[2]; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return cv;
}

// 暖褐星云团块
export function makeNebulaSprite(hue = 30, size = 512) {
  const [cv, ctx] = canvas(size, size);
  const fbm = makeNoise(hue * 7 + 13);
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const dx = (x - size / 2) / (size / 2), dy = (y - size / 2) / (size / 2);
    const d = Math.sqrt(dx * dx + dy * dy);
    const n = fbm(x / 90, y / 90, 5) * 0.5 + 0.5;
    const a = Math.max(0, 1 - d) * Math.max(0, n - 0.35) * 1.5;
    const i = (y * size + x) * 4;
    const warm = n;
    img.data[i]     = 110 + warm * 145;
    img.data[i + 1] = 62 + warm * 82;
    img.data[i + 2] = 38 + warm * 52;
    img.data[i + 3] = Math.min(215, a * 330);
  }
  ctx.putImageData(img, 0, 0);
  return cv;
}
