#!/usr/bin/env python3
# 本地静态服务：与 http.server 等价，但每个响应都带禁缓存头——
# 否则 Safari 会拿缓存的旧 index.html（连带旧 ?v= 的 JS），
# 出现"改了代码页面却还是旧版"的问题。
import http.server
import socketserver
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8823


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, *args):   # 静默访问日志
        pass


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == '__main__':
    with Server(("", PORT), NoCacheHandler) as httpd:
        print(f"serving on http://127.0.0.1:{PORT}")
        httpd.serve_forever()
