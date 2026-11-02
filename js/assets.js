// ============================================================
//  assets.js — 资源路径解析
//  普通网页（HTTP 或本地服务器）：原样返回相对路径。
//  单文件离线版：build.mjs 会注入 window.__ASSET_MAP（路径 → data URI），
//  这里替换成内联数据——file:// 下既不受跨源限制，也不会污染画布。
// ============================================================

export function assetURL(url) {
  const map = typeof window !== 'undefined' ? window.__ASSET_MAP : null;
  return (map && map[url]) || url;
}
