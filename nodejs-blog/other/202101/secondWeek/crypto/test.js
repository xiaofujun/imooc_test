const crypto = require('crypto');
const key = 'F!Z#@*501_high&Security';

function md5(data) {
    let md5 = crypto.createHash('md5');
    return md5.update(data).digest('hex');
}

function genEncrypt(data) {
    return md5(`password=${data}&securityKey=${key}`);
}

console.log(genEncrypt('111111'));
console.log(genEncrypt('000000'));
console.log(genEncrypt('abc1d0'));
console.log(genEncrypt('jia@11'));

