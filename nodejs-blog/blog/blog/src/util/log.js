const fs = require('fs');
const path = require('path');

// 创建写入文件流
function createWriteStream(fileName) {
    const filePath = path.join(__dirname, '../', '../', 'log', fileName);

    return fs.createWriteStream(filePath, {
        flags: 'a'
    });
}

const accessWriteStream = createWriteStream('access.log');
// const customWriteStream = createWriteStream('custom.log');
// const errorWriteStream = createWriteStream('error.log');


// 将内容写入文件
function writeLog(writeStream, data) {
    writeStream.write(data+'\n');
}

// 应用日志
function accessLog(data) {
    if(process.env.NODE_ENV === 'dev') {
        console.log(data);
    } else {
        writeLog(accessWriteStream, data);
    }
}

// // 自定义日志
// function customLog(data) {
//     if(process.env.NODE_ENV === 'dev') {
//         console.warn(data);
//     } else {
//         writeLog(customWriteStream, data);
//     }
// }

// // 错误日志
// function errorLog(data) {
//     if(process.env.NODE_ENV === 'dev') {
//         console.error(data);
//     } else {
//         writeLog(errorWriteStream, data);
//     }
// }

module.exports = {
    accessLog,
};