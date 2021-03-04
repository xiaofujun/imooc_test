// crypto是nodejs自带的一个加密功能的插件
const crypto = require('crypto');

const security_key = 'F!Z#@*501_high&Security';

// MD5加密
function md5(str) {
    let md5 = crypto.createHash('md5');
    return md5.update(str).digest('hex');
}

// 加密密码
function genPassword(str) {
    str = `password=${str}&securityKey=${security_key}`;

    return md5(str);
}

module.exports = {
    genPassword,
};