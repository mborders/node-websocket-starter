const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
  const location = url.parse(req.url, true);

  ws.on('message', (message) => {
    let obj = JSON.parse(message);
    console.log(`Received: ${obj.msg}`);
  });
});

server.listen(8080, () => {
  console.log(`Listening on ${server.address().port}`);
});