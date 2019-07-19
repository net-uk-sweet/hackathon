const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 1337 })

console.log('ws serving from localhost:1337');

// Broadcast to all.
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState == WebSocket.OPEN && data != undefined)
            client.send(data);
    });
};

wss.on('connection', ws => {
    console.log('client connected');
    ws.on('message', message => {
        console.log('broadcasting message', message);
        wss.broadcast(message);
    });
});