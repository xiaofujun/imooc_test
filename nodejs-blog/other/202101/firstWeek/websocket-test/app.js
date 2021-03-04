const ws = require('ws');

// 创建ws
const webSocket = new ws.Server({
    port: 8080,
    host: "127.0.0.1",
});

// 创建链接 
webSocket.on("connection", connectionWS);
function connectionWS(obj) {
    obj.on('message', receiveRequestMessage);
    obj.on('close', closeWSConnect);
    obj.on('error', connectError);
}

// websocket链接出错
function connectError() {
    console.log('websocket出错');
}

// 服务端或者客户端一方关闭websocket链接即可
function closeWSConnect() {
    console.log('request端关闭了websocket请求');
}

// 接受到客户端的消息
function receiveRequestMessage(data) {
    console.log('从请求中接收到的data：', data);
    // 向客户端推送最新数据
    getCurrentDatas(this);
}

function getCurrentDatas(obj) {
    // 数据库数据删除后，更新 稍后做
    obj.send('时隔一秒后发送的消息：'+new Date().getTime());
    // obj.close();
}