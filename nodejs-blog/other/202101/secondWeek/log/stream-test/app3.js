// 此示例是与app2.js形成对比的
// 通过time，记录此段代码写入耗时30ms左右
const path = require('path');
const fs = require('fs');

const readFilePath = path.resolve(__dirname, 'data.txt');
const writeFilePath = path.resolve(__dirname, 'data-bak.txt');

console.time('test');
fs.readFile(readFilePath, function(err, data){
    if(err) throw err;
    if(data) {
        fs.writeFile(writeFilePath, data, (err, data1) => {
            if(err) throw err;
            console.timeEnd('test');
        })
    }
})