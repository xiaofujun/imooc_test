const {
    getLoginInfo,
} = require('../controller/user');
const {
    SuccessModal,
    FailModal,
} = require('../modal/msgModal');
const {
    set,
} = require('../db/redis');

const router = (req, res) => {
    const {
        path,
        method,
        body,
        session={},
    } = req, {
        username,
        password,
    } = body;

    if('POST' === method) {
        if('/api/user/loginin' === path) {
            // 账号和密码不能为空
            if(!(username && password)) {
                return new Promise((resolve, reject) => {
                    resolve(
                        JSON.stringify(
                            new FailModal('账号或者密码不能为空')
                        )
                    );
                })
            }
            
            // 判断账号和密码是否正确
            const loginResult = getLoginInfo(username, password);
            return loginResult.then(data => {
                if(data && data.length) {
                    // 给session赋值
                    const {
                        username,
                        password,
                        realname,
                    } = data[0];

                    session.username = username;
                    session.password = password;

                    return set(req.userId, JSON.stringify(session)).then(() => {
                        return JSON.stringify(
                            new SuccessModal({realname})
                        );
                    })

                } else {
                    return set(req.userId, JSON.stringify({})).then(() => {
                        return JSON.stringify(
                            new FailModal('账号或者密码不正确')
                        );
                    })
                }
            })
        }
    }
};

module.exports = router;