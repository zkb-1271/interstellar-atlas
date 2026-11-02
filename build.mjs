// ============================================================
//  build.mjs — 打包"双击即开"的单文件离线版
//  用法：npm run build   （产出 dist/星际模拟-离线版.html）
//
//  为什么必须单文件：file:// 协议下浏览器会拦截 ES 模块请求与
//  fetch/XHR 读取本地图片，且本地图片会污染画布导致 WebGL 上传失败。
//  所以这里把 JS 打成传统脚本、把所有图片转成 data URI 全部内联。
// ============================================================

import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');

const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };

// ---------- 1) 收集需要内联的资源 ----------
function collectAssets(dir) {
  const out = [];
  const walk = d => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) { walk(p); continue; }
      if (!MIME[path.extname(ent.name).toLowerCase()]) continue;
      if (ent.name.includes('-8k')) continue;          // 8K 原图不参与打包（已用 4K 版）
      out.push(p);
    }
  };
  walk(dir);
  return out;
}

const assetFiles = [
  ...collectAssets(path.join(ROOT, 'assets/tex')),
  ...collectAssets(path.join(ROOT, 'assets/constellations')),
  ...collectAssets(path.join(ROOT, 'assets/nebulae')),
];

// assets/full/ 下放"全尺寸版"：同名同路径、分辨率/质量更高。
// 离线包默认用它（双击本地打开，不受带宽限制）；
// 加 --web 参数则只用压缩版，与 GitHub Pages 上的资源完全一致。
const FULL_DIR = path.join(ROOT, 'assets/full');
const USE_FULL = !process.argv.includes('--web');

const assetMap = {};
let rawBytes = 0, fullCount = 0;
for (const abs of assetFiles) {
  const rel = path.relative(ROOT, abs).split(path.sep).join('/');
  let override = path.join(FULL_DIR, rel.replace(/^assets\//, ''));
  // 银河全景的全尺寸版就是项目里的 8K 原图，不另存副本（省 18MB 仓库体积）
  if (rel === 'assets/tex/sky/milky-way-4k.jpg') {
    const big = path.join(ROOT, 'assets/tex/sky/milky-way-8k.jpg');
    if (fs.existsSync(big)) override = big;
  }
  const useOverride = USE_FULL && fs.existsSync(override);
  const src = useOverride ? override : abs;
  if (useOverride) fullCount++;

  const buf = fs.readFileSync(src);
  rawBytes += buf.length;
  const mime = MIME[path.extname(src).toLowerCase()];
  const data = `data:${mime};base64,${buf.toString('base64')}`;
  assetMap[rel] = data;
}
console.log(`内联资源：${assetFiles.length} 个文件，原始 ${(rawBytes / 1048576).toFixed(1)} MB` +
            (USE_FULL ? `（其中 ${fullCount} 个使用全尺寸版）` : '（压缩模式）'));

// ---------- 2) esbuild 打包（剥离 ?v= 查询、别名 three） ----------
const resolvePlugin = {
  name: 'resolve-atlas',
  setup(b) {
    b.onResolve({ filter: /\.js\?v=\d+$/ }, args => ({
      path: path.resolve(args.resolveDir, args.path.split('?')[0]),
    }));
    b.onResolve({ filter: /^three\/addons\// }, args => ({
      path: path.join(ROOT, 'lib/addons', args.path.replace('three/addons/', '')),
    }));
    b.onResolve({ filter: /^three$/ }, () => ({ path: path.join(ROOT, 'lib/three.module.js') }));
  },
};

const result = await build({
  entryPoints: [path.join(ROOT, 'js/main.js')],
  bundle: true,
  format: 'iife',
  minify: true,
  target: ['es2020'],
  write: false,
  plugins: [resolvePlugin],
  logLevel: 'warning',
});
const bundleJs = result.outputFiles[0].text;
console.log(`JS 打包：${(bundleJs.length / 1048576).toFixed(2)} MB`);

// ---------- 3) 拼装单文件 HTML ----------
let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
let css = fs.readFileSync(path.join(ROOT, 'css/style.css'), 'utf8');
const boot = fs.readFileSync(path.join(ROOT, 'js/loading-boot.js'), 'utf8');

// 构建版本号：从 index.html 的 ?v= 取，用于右下角版本戳（离线版会标注"离线版"）
const VER = (html.match(/\?v=(\d+)/) || [])[1] || '';

// CSS 里的背景图（开屏银河）也内联——固定用压缩版，8K 只进 3D 天球
css = css.replace(/url\('([^']+)'\)/g, (m, u) => {
  if (u.startsWith('data:')) return m;
  const rel = path.normalize(path.join('css', u)).split(path.sep).join('/');
  // 直接从磁盘读压缩版：assets/full 里的 8K 银河只该进 3D 天球，不能在这里再内联一遍
  const disk = path.join(ROOT, rel);
  if (!fs.existsSync(disk)) return m;
  const buf = fs.readFileSync(disk);
  const mime = MIME[path.extname(disk).toLowerCase()] || 'image/jpeg';
  return `url('data:${mime};base64,${buf.toString('base64')}')`;
});

// ⚠️ 必须用函数式替换：压缩后的 JS 里含有 `$&` 等序列，
// 直接传字符串会被 String.replace 当作"插入匹配内容"的占位符，
// 把原 <script> 标签注进 bundle 里，导致离线版语法错误。
html = html
  .replace(/<link rel="stylesheet"[^>]*>/, () => `<style>\n${css}\n</style>`)
  .replace(/<script type="importmap">[\s\S]*?<\/script>\s*/, () => '')
  .replace(/<script src="js\/loading-boot\.js[^"]*"><\/script>/,
           () => `<script>\n${boot}\n</script>`)
  .replace(/<script type="module" src="js\/main\.js[^"]*"><\/script>/, () => {
    // ⚠️ 不要把 40MB+ 的图片压成一个巨大的 <script>：那样浏览器要一口气解析完，
    // 主线程被独占，加载屏的 rAF 直接停摆，进度条会卡在个位数百分比。
    // 按资源逐条内联，每条结束回报一次进度，浏览器在条目之间能继续渲染。
    const keys = Object.keys(assetMap);
    const head = `<script>window.__ASSET_MAP={};window.__ASSET_TOTAL=${keys.length};` +
                 `window.__BUILD="v${VER} · 离线版";</script>`;
    const parts = keys.map((k, i) =>
      `<script>window.__ASSET_MAP[${JSON.stringify(k)}]=${JSON.stringify(assetMap[k])};` +
      `if(window.__assetTick)window.__assetTick(${i + 1});</script>`);
    return [head, ...parts, `<script>\n${bundleJs}\n</script>`].join('\n');
  });

// 加一条离线提示 + 版本戳：双击打开时能一眼确认自己看的是哪一版。
// 用户多次遇到"两个版本对不上/改了没生效"，右下角常显版本号是最省事的解法。
html = html.replace('</body>', () => '<script>window.__PORTABLE__=true;</script>\n</body>');

fs.mkdirSync(DIST, { recursive: true });
const outFile = path.join(DIST, '星际模拟-离线版.html');
fs.writeFileSync(outFile, html);

const size = fs.statSync(outFile).size;
console.log(`\n✅ 已生成：${path.relative(ROOT, outFile)}  （${(size / 1048576).toFixed(1)} MB）`);
console.log('   双击即可在浏览器打开，无需服务器、无需联网。');
