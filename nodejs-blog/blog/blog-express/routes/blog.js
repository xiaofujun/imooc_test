const {
    getList,
    getDetail,
    addBlog,
    editBlog,
    deleteBlog,
} = require('../controller/blog');
const {
    SuccessModal,
    FailModal,
} = require('../modal/msgModal');
const checkUserLogin = require('../middleware/checkUserLogin');

const express = require('express');
const router = express.Router();

// 查询列表 
router.get('/list', checkUserLogin, (req, res, next) => {
    const {
        title,
    } = req.query, {
        username,
    } = req.session;

    getList(username, title).then(data => {
        res.json(
            new SuccessModal(data)
        );
        return;
    });
});

// 查询某条数据
router.get('/detail', (req, res, next) => {
    const {
        id,
    } = req.query;

    getDetail(id).then(data => {
        res.json(
            new SuccessModal(data)
        );
        return;
    });
});

// 新增博客
router.post('/add', checkUserLogin, (req, res, next) => {
    addBlog(req.body, req.session.username).then(data => {
        res.json(
            new SuccessModal({
                id: data.insertId
            }, '保存成功')
        );
        return;
    });
})

// 更新博客
router.post('/edit', checkUserLogin, (req, res, next) => {
    editBlog(req.query.id, req.body).then(data => {
        if(data.affectedRows > 0) {
            res.json(
                new SuccessModal(
                    '更新成功'
                )
            );
            return;
        }
        res.json(
            new FailModal(
                '更新失败'
            )
        );
        return;
    })
})

// 删除博客
router.post('/delete', checkUserLogin, (req, res, next) => {
    deleteBlog(req.query.id, req.session.username)
        .then(data => {
            if(data.affectedRows > 0) {
                res.json(
                    new SuccessModal(
                        '删除成功'
                    )
                );
                return;
            } 
            res.json(
                new SuccessModal(
                    '删除失败'
                )
            );
            return;
        });
})

module.exports = router;
