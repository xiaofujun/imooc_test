// 访问接口localhost:8080时，将data.txt的内容作为响应数据返回
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if(req.method.toLowerCase() == 'get') {
        res.setHeader('content-type', 'text/html');
        const filePath = path.resolve(__dirname, 'data.txt');
        const readStream = fs.createReadStream(filePath, 'utf8');
        readStream.pipe(res);
    }
});

server.listen(3000, () => {
    console.log('ok');
});