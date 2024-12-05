const http = require("http");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket sunucu çalışıyor");
});

const wss = new WebSocket.Server({ server });
let clients = new Set();
function broadcast(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    clients.add(ws);
    const userCount = { type: "update", count: clients.size };

    broadcast(JSON.stringify(userCount));

    const chatMessage = { type: "message", text: message.toString() };
    broadcast(JSON.stringify(chatMessage));
  });
  ws.on("close", () => {
    clients.delete(ws);
    const userCount = { type: "update", count: clients.size };
    broadcast(JSON.stringify(userCount));
  });
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`WebSocket sunucusu ${PORT} portunda çalışıyor.`);
});
