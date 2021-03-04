const redis = require('redis');
const {redisConfig} = require('../conf/db');

// 创建连接
const client = redis.createClient(redisConfig);

// 连接错误时error事件
client.on('error', (error) => {
    console.error('【redis连接出错】');
})

// 关闭redis
closeRedis = () => {
    client.quit();
}

module.exports = {
    closeRedis,
    client
};