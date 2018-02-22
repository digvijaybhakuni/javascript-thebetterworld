const WebSocketClient = require('websocket').client;

const client = new WebSocketClient();

client.on('connectFailed', err => {
    console.error('Connection Failed => ', err.toString());
});


let ctr = 0;

client.on('connect', connection => {
    connection.on('error', err=> console.error('Connect Got Error => ', err.toString()));
    connection.on('close', () => console.error('Connection Close...'));

    connection.on('message', message => { 
        console.info('message => ', message);
    });
    sendText = () => {
        if(connection.connected){
            const number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
            ctr++;
        }
        setTimeout(sendText, 1000);
    }

    sendText();

});

client.connect('ws://localhost:8501');

setTimeout(()=> {
    client.abort();
}, 10000);