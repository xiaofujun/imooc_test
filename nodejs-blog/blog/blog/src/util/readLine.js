// readLine是nodejs自带的一个插件
const readLine = require('readline');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../', '../', 'log', 'access.log');
const readStream = fs.createReadStream(filePath, {
    encoding: 'utf-8'
});

const rl = readLine.createInterface({
    input: readStream
});

// 记录次数
let totalCounts = 0;
let chromeCounts = 0;
let firefoxCounts = 0;

rl.on('line', (input) => {
    totalCounts++;

    if(input.toLowerCase().indexOf('chrome') > -1) {
        chromeCounts++;
    }

    if(input.toLowerCase().indexOf('firefox') > -1) {
        firefoxCounts++;
    }
});

rl.on('close', () => {
    if(chromeCounts) {
        console.log('chrome访问所占的比例：', chromeCounts/totalCounts);
    }
    if(firefoxCounts) {
        console.log('firefox访问所占的比例：', firefoxCounts/totalCounts);
    }
})