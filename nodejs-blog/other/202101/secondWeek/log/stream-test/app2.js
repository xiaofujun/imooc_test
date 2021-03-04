// 将data.txt文件内容写入data-bak.txt文件
// 通过time，记录此段代码写入耗时12ms左右，比app3的方式节省一半的时间
const fs = require('fs');
const path = require('path');

const readFilePath = path.resolve(__dirname, 'data.txt');
const writeFilePath = path.resolve(__dirname, 'data-bak.txt');

const readStream = fs.createReadStream(readFilePath);
const WriteStream = fs.createWriteStream(writeFilePath);
console.time('test');
readStream.pipe(WriteStream);

// 'data'和'end'事件是对pipe的每个读取写入步骤的解析
readStream.on('data', (chunk) => {
    // 通过console，可以发现data-bak.txt中的写入是读取到一部分写入到一部分的
    console.log(chunk.toString());
})

readStream.on('end', () => {
    console.timeEnd('test');
})
