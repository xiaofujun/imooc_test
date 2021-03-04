const mysql = require('mysql');
const {
    dbConfig,
} = require('../conf/db');

const con = mysql.createConnection(dbConfig);

con.connect(err => {
    if(err) {
        console.error(`【数据库连接失败】 -- 请查看数据库服务是否开启`);
    }
})

const exec = (sql) => {
    console.log(`【执行的sql语句】 -- ${sql}`);
    
    return new Promise((resolve, reject) => {
        con.query(sql, (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

const closeDB = () => {
    con.end();
}

module.exports = {
    exec,
    closeDB,
    escape: mysql.escape,   // 安全：防止sql注入安全问题的一种解决方案
}