const {
    exec,
    escape,
} = require('../db/mysql');
const {
    genPassword,
} = require('../util/cryp');

const getLoginInfo = (username, password) => {
    let sql = `select username, password, realname from users where 1=1 `;

    if(username) {
        username = escape(username);
        sql += `and username=${username} `;
    }

    if(password) {
        password = genPassword(password);
        password = escape(password);
        sql += `and password=${password}`; 
    }
    return exec(sql);
};


module.exports = {
    getLoginInfo,
};