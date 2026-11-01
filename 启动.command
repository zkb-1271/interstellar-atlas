#!/bin/zsh
# 双击启动：起本地服务并打开浏览器
cd "$(dirname "$0")"
port=8823
if ! lsof -i :$port -sTCP:LISTEN >/dev/null 2>&1; then
  (python3 serve.py $port >/dev/null 2>&1 &)   # serve.py 带禁缓存头，杜绝 Safari 吃旧缓存
  sleep 0.5
fi
open "http://127.0.0.1:$port"
