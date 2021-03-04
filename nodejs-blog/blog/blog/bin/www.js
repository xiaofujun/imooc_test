const http = require('http');
const app = require('../app');
const PORT = normailzePort(process.env.PORT || 54188);

console.log('PORT', process.env.PORT);
console.log('NODE_ENV', process.env.NODE_ENV);

/**
 * 创建服务
 */
const server = http.createServer(app);

/**
 * 监听服务
 */
server.listen(PORT, () => {
    console.log('开启监听...');
});

function normailzePort(val) {
    let port = parseInt(val, 10);

    if(isNaN(port)) {
        return val;
    }

    if(port >= 0) {
        return port;
    }

    return false;
}