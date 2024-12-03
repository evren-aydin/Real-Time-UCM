const http = require("http");
const WebSocket = require("ws");

//http sunucusu oluşturma
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket sunucu çalışıyor");
});

//web socket sunucusu başlatma
const wss = new WebSocket.Server({ server });
//sunucuya bağlı olan tüm istemcilere mesaj yayınlama(broadcast işlemi)
function broadcast(data, ws) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data); //mesajı bağlı istemciye gönder
    }
  });
}

//websocket baglantısını dinle

wss.on("connection", (ws) => {
  console.log("Yeni bir istemci bağlandı.");

  //mesaj alındığında
  ws.on("message", (message) => {
    const messageString = message.toString();
    console.log("alınan mesaj", messageString);

    //mesajı tüm istemcilere yayınla
    broadcast(message, ws);
  });

  //baglantı kapandığında

  ws.on("close", () => {
    console.log("Bir istemci baplantıyı kapattı");
  });
});

// HTTP sunucusunu başlat

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`WebSocket sunucusu ${PORT} portunda çalışıyor.`);
});
