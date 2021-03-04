// stream 写log文件的方法封装
const fs = require('fs');
const path = require('path');

function createWriteStream(fileName) {
    let filePath = path.join(__dirname, '../', 'stream-test', fileName);
    let writeStream = fs.createWriteStream(filePath, {
        flags: 'a'
    });
    return writeStream;
}

// 创建access写入文件流
let accessWriteStream = createWriteStream('access.log');

// 写入日志
function writeLog(writeStream, log) {
    writeStream.write(log);
}

// access.log中写入日志
function access(log) {
    writeLog(accessWriteStream, log);
}

// 引用access方式写入
access('这是日志的第3行'+'\n');

setTimeout(() => {
    access('这是日志的第4行'+'\n');
}, 3000);