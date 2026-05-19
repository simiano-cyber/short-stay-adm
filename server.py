#!/usr/bin/env python3
"""
Servidor HTTP local simples para Short Stay ADM
Use: python server.py
Depois acesse: http://localhost:8000
"""

import http.server
import socketserver
import os
from pathlib import Path

PORT = 8000
DIRETORIO = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRETORIO), **kwargs)

    def end_headers(self):
        # Permitir CORS para desenvolvimento local
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

if __name__ == '__main__':
    os.chdir(DIRETORIO)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"""
╔════════════════════════════════════════════╗
║   SHORT STAY ADM - Servidor Local           ║
╚════════════════════════════════════════════╝

✅ Servidor rodando em: http://localhost:{PORT}
📂 Diretório: {DIRETORIO}

Abra no navegador:
  👉 http://localhost:{PORT}

Pressione CTRL+C para parar.
""")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Servidor parado.")
