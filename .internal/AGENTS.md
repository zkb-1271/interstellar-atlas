# AGENTS.md — 星际模拟 · 唯一权威交接源

> 最后更新：2026-11-02
> 任何 Agent 接手前必读本文件；通用开发经验见同目录《开发经验库.md》。

## 这是什么

一个 three.js 太阳系 + 深空天文可视化站（参考 multiple 天文网站的设计语言）。
纯静态、无构建依赖（除 esbuild 打包离线版）。数据在 `js/data.js`，轨道力学在
`js/astro.js`（简化历表：行星开普勒要素 + 月球平黄经/出差）。

## 标准命令（可直接复制执行）

```bash
cd ~/projects/星际模拟
npm run dev            # python3 serve.py 8823 —— 带禁缓存头的本地服务
open http://127.0.0.1:8823

npm run build          # 全尺寸离线单文件 → dist/星际模拟-离线版.html (~65MB)
npm run build:web      # 压缩版（与网页版资源一致 ~27MB）

# 版本号统一 bump（改完代码必做，否则吃旧缓存）
perl -pi -e 's/\?v=208/?v=209/g' index.html css/style.css js/*.js

# 语法检查（本环境 grep 有假阴性，关键检查用 node --check + python）
for f in js/*.js; do cp "$f" /tmp/c.mjs && node --check /tmp/c.mjs || echo "$f FAILED"; done

# 提交（含特殊字符的 message 用文件）
git add -A && git commit -F /tmp/commit-msg.txt
```

## 关键文件与职责

| 文件 | 职责 | 坑 |
|---|---|---|
| `js/data.js` | 行星/卫星/星座/星云/日月食数据 + 文案 | 文案数值要逐条对公开数据 |
| `js/astro.js` | JD⇄公历、开普勒、月历表、连珠搜索 | 简化历表对不准黄白交点 |
| `js/solar.js` | 天体注册、食相合成、贴图加载、大气辉光 | 贴片同步必须在相机定稿后（syncSunDisc） |
| `js/flight.js` | 相机 rig：拖拽/惯性/缩放/飞行/过渡锁 | inputLock 上锁在 flyTo 之后 |
| `js/main.js` | 渲染循环、模式状态机、拾取、天象编排 | 模式切换用 finishTweens() 不用 tweens.length=0 |
| `js/ui.js` | 全部 DOM 面板/标签/时间轴/卡片 | 标签避让带死区+冷却，尺寸只量一次 |
| `js/loading-boot.js` | 启动屏（经典脚本，先于模块执行） | 进度=指数渐近下限+真实 tick |
| `js/assets.js` | assetURL：网页原样 / 离线版映射 data URI | |
| `build.mjs` | 单文件打包 | 替换必须函数式（$& 坑）；CSS 背景固定读压缩版 |
| `serve.py` | 本地服务（no-store 头） | 换回 http.server 会吃 Safari 缓存 |
| `assets/full/` | 离线版同名高清贴图（q95/4096） | 8K 银河在 assets/tex/sky/ 原位引用，不入库 |
| `.internal/开发经验库.md` | 本会话全部通用经验（35 条） | 改代码前扫一眼相关条目 |

## 环境事实

- three r160 在 `lib/`（离线可用）；`?v=` 查询串是缓存键，bump 必须全覆盖。
- 贴图源：Solar System Scope（CC BY 4.0）、USGS/NASA（公共领域）；署名在 README 与档案卡。
- NASA SVS 服务器 ~8KB/s 且断连 → 用分块 Range 下载；Solar System Scope ~44KB/s。
- 本机 grep 偶发假阴性 → 关键检查用 python；无头浏览器 Chromium 下载超时 →
  用 DOM 桩/数值测试替代真机点击。

## 流程认知（改代码的固定顺序）

1. 改 js/css → 2. `node --check` 全部模块 → 3. 版本号 bump → 4. `npm run build`
（动了贴图/打包逻辑才需要）→ 5. 重启 serve.py（若被杀）→ 6. 回复里提醒 ⌘Shift+R。

## 用户偏好（本项目的裁决记录）

- 过渡动画不可打断（拖拽曾把状态弄丢）。
- 拖拽方向：深空跟手、太阳系反号（由 freePitch 派生，勿改回统一）。
- 顶栏只有 深空/太阳系/天象；知识库面板已删（相关 CSS 也已清）。
- 时间栏只有 暂停/实时（悬停倍速）/真实轨道；无「回到今天」。
- 所有星球必须真实 NASA/USGS 影像贴图，"纯色球/程序灰球"不可接受；
  介绍图必须真实影像，程序生成的不要。
- 双通道画质：网页压缩（q84/4K 银河 4K）、离线全尺寸（q95/8K 银河）。
- 交付验收标准：写完必须自检（API 交叉引用 + 数值验证 + 资产存在性），
  bug 修完再交，不能只给代码。

## 已废弃路线（别再试）

- 程序生成螺旋星系开屏 → 已改真实银河全景图（8K 源）。
- `tweens.length = 0` 丢半路补间 → finishTweens()。
- 逐通道 autocontrast 调贴图 → 保色相调对比。
- 圆盘照反解柱面贴图 → 黑极冠+拉伸，弃用（改同类影像着色）。
- 知识库面板、`forceMoonOnAxis`、`setConstVisible`、`speedBtns/回到今天`、`#hint`。

## 版本

当前 v208。版本戳在页面右下角；`?v=` 与 `window.__BUILD` 必须一致。

## 触屏 / 平板适配（2026-11-05，v=209）

- 检测：`matchMedia('(pointer: coarse)')`，各模块各自判（main.js `IS_TOUCH`、ui.js、flight.js 经指针计数），**不弹任何提示，静默生效**
- flight.js：`_bind()` 里有 `pointers` Map——1 指=旋转（原逻辑），2 指=捏合缩放（`_pinch`，d0/vh0 基准，vh0×d0/d，等效滚轮的 viewHeight）；抬一根后剩指无缝续接旋转；三指以上忽略
- main.js：`updateHover()` 触屏直接 `setHover(null)`（无悬停环）；拾取核心拆成 `pickAt()`；canvas pointerup 触屏分支——落点写回 `pointer` → `updateAim()`（深空）+ `pickAt()`（太阳系）→ 走原 selectPlanet/focus 流程
- ui.js：触屏隐藏 #reticle 与跟随提示；倍速面板无 mouseenter 可用——点「实时」→ onRealtime → flashSpeedPop（触屏 4800ms，桌面 2200ms），window pointerdown 捕获阶段点外部收起
- CSS：`canvas#scene { touch-action: none }`（必须，否则浏览器抢手势）+ `@media (pointer: coarse)` 隐藏准星/恢复 cursor；index.html viewport 加了 `maximum-scale=1, user-scalable=no, viewport-fit=cover`
- 验证：Playwright `hasTouch+isMobile` + CDP `Input.dispatchTouchEvent` 派发双指；点按命中注意行星本体在标签文字附近 ±25px 内

## 特写拖拽行星钉死（2026-11-06，v=211）

- 旧做法：selectPlanet / flyToSky 把 target 沿"相机右方向"搬走 0.30 半屏（世界空间固定方向），拖拽绕的是偏移点 → 天体满屏跑，且偏移方向不随视角更新
- 新做法：flight.screenShift（半屏宽比例）+ `camera.setViewOffset(w, h, shift*w/2, 0, w, h)` 投影层镜头偏移；target 始终钉在天体上
- flyTo 新增 `shift` 参数（不传=维持当前值，所以退出特写的过渡飞行都显式传 `shift: 0`；setViewAngle 不传→保持 0.30，卡片还开着）
- 屏幕位置恒定的原理：偏移在投影矩阵上，与 yaw/pitch/视高无关，像素偏移 = shift×半屏宽
- 实测：拖 260×120px，木星标签位移 0.0px；构图 = 行星在 960-288≈672px 处（1920 宽）
- 模块间 import 的 `?v=N` 缓存键这次统一升到 v=211（此前几轮只换了入口，内部模块的键从 208 就没动过——Pages 10 分钟缓存掩盖了问题，但 Safari 自己的缓存会更久）

## 老设备黑屏修复：esbuild 兼容包分轨（2026-11-08，v=212）

- 症状：老 iPad Safari 打开 = 纯黑（加载屏 9 秒兜底退场后 canvas 无内容）。es-module-shims 只补 import map 不转译语法，老 Safari 上模块照样死
- 方案：设备分轨——`HTMLScriptElement.supports('importmap')` false（Safari<16.4）→ document.write 注入 `js/main.compat.js`（esbuild --bundle --format=iife --target=safari15 --alias:three=./lib/three.module.js --alias:three/addons=./lib/addons，646KB）；现代浏览器 → 原生模块，零影响
- 为什么 target=safari15：three r160 硬性要求 WebGL2（Safari 15 才有），更老设备救不活；且 esbuild 不支持向 safari13 降级解构
- loading-boot.js 新增启动失败可见化：WebGL2 探测 + window error/unhandledrejection 捕获 → 原因写进状态栏、进度条变红、**加载屏不再自动退场**（finish/assetTick/tick 全加 failed 守卫）——下次出问题截图即可诊断
- 验证：WebKit 双轨（模块路径 8s / 强制兼容路径 12s）都进场景 0 错误
- 维护提醒：改了 js/* 记得重打兼容包（命令见上），否则老设备跑的是旧逻辑

## 贴图加载重试（2026-11-09，v=213）

- 满血贴图后单张 0.3–3.8MB（8K 银河 18MB），弱网下单次失败 = 材质无 map = 行星白球（用户截图复现）
- solar.js：loadRealMap 改走 loadTexRetry（指数退避 700ms×2^n，最多 5 次）
- starfield.js：8K 天球 loadSky 重试（最多 6 次），成功后 skyTex.image = t.image + needsUpdate
- 验证：Playwright route.abort 拦首次请求 → 重试成功拉到，0 错误
- 改 js/* 后必须重打 main.compat.js（命令在"老设备黑屏修复"节），否则老设备跑旧逻辑

## 地球白球真凶（2026-11-11，v=214）

- 白球不是地表贴图失败：地表有程序化蓝绿兜底；真凶是**云壳球**——初始材质 map:null + 白色 + opacity 0.9（几乎不透明白球），云图 JPG 加载成功才切成 alphaMap 透明云雾；而这条加载路径是裸 texLoader.load 没重试，弱网失败一次 = 白球永驻（蓝边是大气辉光，地表全被盖住）
- 修复：云壳初始 visible=false + opacity 0；loadTexRetry 重试；全败保持隐形（程序化/真实地表可见）
- 顺手把太阳表面、土星环两处裸加载也换成 loadTexRetry——全项目已无裸贴图加载
- 回归：route.abort 永久屏蔽云图 → 地球正常渲染 NASA 地表，0 错误
- 教训：加重试时只扫了 loadRealMap，漏了同文件里另外三处裸 texLoader.load——"贴图加载"必须全文 grep texLoader.load/TextureLoader 而不是只改一条
