#!/usr/bin/env python3
"""
Local dev server for Ocean Explorers that ALWAYS serves fresh files.

The default `python -m http.server` lets the browser cache JS modules, so your
edits don't show up until a hard refresh — the cause of the "we're not updated
live" frustration. This server sends no-cache headers on every response, so a
normal browser refresh (F5) always gets the latest code. No ?v= bumping needed.

Usage:
    python serve.py            # serves on http://localhost:8000
    python serve.py 8080       # custom port
"""
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Force the browser to revalidate every file on each request.
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    # Bind to 127.0.0.1 explicitly. On Windows, "localhost" can resolve to IPv6
    # (::1) while browsers/curl hit IPv4 (127.0.0.1), which then fails to connect.
    server = HTTPServer(("127.0.0.1", port), NoCacheHandler)
    print(f"Ocean Explorers dev server (no-cache) -> http://127.0.0.1:{port}")
    print("Edit files, then just refresh the browser (F5). Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped.")


if __name__ == "__main__":
    main()
