const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 }); // اختر أي منفذ حر

wss.on('connection', (ws) => {
  console.log('عميل متصل');
  ws.send('مرحبا من السيرفر!');

  ws.on('message', (message) => {
    console.log('رسالة من العميل:', message);
  });
});
