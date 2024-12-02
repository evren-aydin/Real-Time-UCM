const http = require("http");
const WebSocket = require("ws");

//http sunucusu oluşturma
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket sunucu çalışıyor");
});

//web socket sunucusu başlatma
