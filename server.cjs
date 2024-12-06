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

wss.on("connection", (ws, req) => {
  const ip = req.socket.remoteAddress;
  const startTime = Date.now();

  const client = { ws, ip, startTime };
  clients.add(client);

  const userCount = {
    type: "update",
    count: clients.size,
    users: Array.from(clients).map((client) => ({
      ip: client.ip,
      connectionTime: `${Math.floor(
        (Date.now() - client.startTime) / 1000
      )} saniye`,
    })),
  };
  broadcast(JSON.stringify(userCount));

  ws.on("message", (message) => {
    const chatMessage = { type: "message", text: message.toString() };
    broadcast(JSON.stringify(chatMessage));
  });

  ws.on("close", () => {
    clients.delete(client);
    console.log("kullanıcı sayısı:", clients.size);
    const userCount = {
      type: "update",
      count: clients.size,
      users: Array.from(clients).map((client) => ({
        ip: client.ip,
        connectionTime: `${Math.floor(
          (Date.now() - client.startTime) / 1000
        )} saniye`,
      })),
    };
    broadcast(JSON.stringify(userCount));
  });
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`WebSocket sunucusu ${PORT} portunda çalışıyor.`);
});
