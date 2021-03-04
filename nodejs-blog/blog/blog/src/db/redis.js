const redis = require('redis');
const {redisConfig} = require('../conf/db');

// 创建连接
const client = redis.createClient(redisConfig);

// 连接错误时error事件
client.on('error', (error) => {
    console.error('【redis连接出错】');
})

// 设置值
const set = (key, value) => {
    return new Promise((resolve, reject) => {
        console.log(`【redis设置】 -- key:${key}`);
        client.set(key, value, (err, res) => {
            if(err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}

// 根据key获取值
const get = (key) => {
    console.log(`【redis获取】 -- key:${key}`);
    return new Promise((resolve, reject) => {
        client.get(key, (err, res) => {
            if(err) {
                reject(err);
            } else {
                let value = res;

                try{
                    value = JSON.parse(res);
                } catch(err) {
                    value = res;
                }

                resolve(value);
            }
        })
    })
}

// 关闭redis
closeRedis = () => {
    client.quit();
}


module.exports = {
    set,
    get,
    closeRedis,
};