import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print("serving at port: ", PORT)
httpd.serve_forever()
