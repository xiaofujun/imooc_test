const {
    getLoginInfo,
} = require('../controller/user');
const {
    SuccessModal,
    FailModal,
} = require('../modal/msgModal');

const express = require('express');
const router = express.Router();

// 登录校验
router.post('/loginin', (req, res, next) => {
    const {
        username,
        password,
    } = req.body;

    // 账号和密码不能为空
    if(!(username && password)) {
        res.json(
            new FailModal('账号或者密码不能为空')
        );
        return;
    }
    
    // 判断账号和密码是否正确
    getLoginInfo(username, password).then(data => {
        if(data && data.length) {
            // 给session赋值
            req.session.username = data[0].username;
            req.session.password = data[0].password;

            res.json(
                new SuccessModal({realname: data[0].realname})
            );
        } else {
            // 给 session 赋值
            req.session.username = '';
            req.session.password = '';

            res.json(
                new FailModal('账号或者密码不正确')
            );
        }
    })
});

// 登录成功的验证
router.get('/checkCookie', (req, res, next) => {
    const {
        username,
    } = req.session;

    if(!username) {
        res.json({
            status: '登录失败'
        });
        return;
    } 
    res.json({
        status: '登录成功',
        username,
    })
    return;
})

module.exports = router;