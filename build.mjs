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
];

const assetMap = {};
let rawBytes = 0;
for (const abs of assetFiles) {
  const rel = path.relative(ROOT, abs).split(path.sep).join('/');
  const buf = fs.readFileSync(abs);
  rawBytes += buf.length;
  const mime = MIME[path.extname(abs).toLowerCase()];
  assetMap[rel] = `data:${mime};base64,${buf.toString('base64')}`;
}
console.log(`内联资源：${assetFiles.length} 个文件，原始 ${(rawBytes / 1048576).toFixed(1)} MB`);

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

// CSS 里的背景图（开屏银河）也内联
css = css.replace(/url\('([^']+)'\)/g, (m, u) => {
  if (u.startsWith('data:')) return m;
  const rel = path.normalize(path.join('css', u)).split(path.sep).join('/');
  const data = assetMap[rel];
  return data ? `url('${data}')` : m;
});

// ⚠️ 必须用函数式替换：压缩后的 JS 里含有 `$&` 等序列，
// 直接传字符串会被 String.replace 当作"插入匹配内容"的占位符，
// 把原 <script> 标签注进 bundle 里，导致离线版语法错误。
html = html
  .replace(/<link rel="stylesheet"[^>]*>/, () => `<style>\n${css}\n</style>`)
  .replace(/<script type="importmap">[\s\S]*?<\/script>\s*/, () => '')
  .replace(/<script src="js\/loading-boot\.js[^"]*"><\/script>/,
           () => `<script>\n${boot}\n</script>`)
  .replace(/<script type="module" src="js\/main\.js[^"]*"><\/script>/,
           () => `<script>window.__ASSET_MAP=${JSON.stringify(assetMap)};</script>\n<script>\n${bundleJs}\n</script>`);

// 加一条离线提示，双击打开时知道自己看的是便携版
html = html.replace('</body>', () => '<script>window.__PORTABLE__=true;</script>\n</body>');

fs.mkdirSync(DIST, { recursive: true });
const outFile = path.join(DIST, '星际模拟-离线版.html');
fs.writeFileSync(outFile, html);

const size = fs.statSync(outFile).size;
console.log(`\n✅ 已生成：${path.relative(ROOT, outFile)}  （${(size / 1048576).toFixed(1)} MB）`);
console.log('   双击即可在浏览器打开，无需服务器、无需联网。');
