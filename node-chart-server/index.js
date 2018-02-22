const WebSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer((req, res) =>{
});

server.listen(8501);

const ws = new WebSocketServer({ httpServer: server });

const connectedClients = [];

ws.on('request', req => { 
    const connection = req.accept(null, req.origin);


    const index = connectedClients.push(connection) - 1;

    connection.on('message', message => {
        if(message && message.type === 'utf8'){
            const data = message.utf8Data;
            connectedClients.forEach(cli => cli.sendUTF(data));
        }
        console.info('message => ', message);
    });

    connection.on('close', con => { 
        console.log('On Drop => ', connection === con);
        connectedClients.splice(index, 1);
        console.info('A connection drop');
        console.info('Still Connected is ', connectedClients.length);
    });
});