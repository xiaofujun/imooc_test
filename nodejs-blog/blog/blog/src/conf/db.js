
const {
    NODE_ENV,
} = process.env;

let dbConfig = null;
let redisConfig = null;

if('dev' === NODE_ENV) {
    dbConfig = {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'myblog',
    };

    // redis的配置（用来存储session）
    redisConfig = {
        host: 'localhost',
        port: '6379'
    }
}

if('pro' === NODE_ENV) {
    dbConfig = {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'myblog',
    };

    // redis的配置（用来存储session）
    redisConfig = {
        host: 'localhost',
        port: '6379'
    }
}


module.exports = {
    dbConfig,
    redisConfig,
};