// ============================================================
//  loading.js — 加载进度桥接层
//  启动屏的星系动画、星点背景、文案轮播、退场流程都在
//  js/loading-boot.js（经典脚本，页面一打开就跑，不等模块）。
//  这里只做一件事：把 THREE.DefaultLoadingManager 的真实贴图
//  加载进度接进启动屏。所以百分比是真加载量，不是假动画。
// ============================================================

import * as THREE from 'three';

export function initLoading({ minMs = 1700 } = {}) {
  const boot = window.__loadingBoot;
  if (!boot) return;                       // 启动脚本没跑（异常情况），静默降级

  const M = THREE.DefaultLoadingManager;
  M.onProgress = (url, loaded, total) => {
    if (!boot.finished) boot.paint(loaded / Math.max(total, 1));
  };
  M.onLoad = () => {
    if (!boot.finished) boot.scheduleFinish(minMs);
  };
  // 贴图 404 / 加载失败不能让进度条永远停住：失败也按"已处理"推进
  M.onError = () => {
    if (!boot.finished) boot.paint(Math.min(0.97, boot.value + 0.04));
  };
}
