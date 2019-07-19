const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 1337 })

wss.on('connection', ws => {
    ws.onconnection = () => console.log('app connected');

  ws.on('message', message => {
    console.log(message);
    ws.send(message);
  })
  //ws.send('connected');
})