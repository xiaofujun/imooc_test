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

const hasRight = (req) => {
    if(!(req.session && req.session.username)) {
        return Promise.resolve(
            JSON.stringify(
                new FailModal('当前用户未登录，请先登录')
            )
        );
    }
}

const router = (req, res) => {
    const {
        path,
        method,
        query,
        body,
        session={},
    } = req;

    if('GET' === method) {
        if('/api/blog/list' === path) {
            // 处理接口允许跨域
            // res.setHeader('Access-Control-Allow-Origin', '*');   
            if(hasRight(req)) {
                return hasRight(req);
            }

            const {
                title,
            } = query, {
                username,
            } = session;

            return getList(username, title).then(data => {
                return JSON.stringify(
                    new SuccessModal(data)
                )
            });

        } else if('/api/blog/detail' === path) {
            // 详情
            if(hasRight(req)) {
                return hasRight(req);
            }

            const {
                id,
            } = query;

            return getDetail(id).then(data => {
                return JSON.stringify(
                    new SuccessModal(data)
                );
            });
        } 
    } else if('POST' === method) {
        if('/api/blog/add' === path) {

            // 新增
            if(hasRight(req)) {
                return hasRight(req);
            }

            return addBlog(body, session.username).then(data => {
                return JSON.stringify(
                    new SuccessModal({
                        id: data.insertId
                    }, '保存成功')
                )
            });
        } else if('/api/blog/edit' === path) {
            // 更新
            if(hasRight(req)) {
                return hasRight(req);
            }

            return editBlog(query.id, body).then(data => {
                if(data.affectedRows > 0) {
                    return JSON.stringify(
                        new SuccessModal(
                            '更新成功'
                        ),
                    );
                } else {
                    return JSON.stringify(
                        new FailModal(
                            '更新失败'
                        ),
                    );
                }
            })
        } else if('/api/blog/delete' === path) {
            // 删除
            if(hasRight(req)) {
                return hasRight(req);
            }

            return deleteBlog(query.id).then(data => {
                if(data.affectedRows > 0) {
                    return JSON.stringify(
                        new SuccessModal(
                            '删除成功'
                        ),
                    );
                } else {
                    return JSON.stringify(
                        new SuccessModal(
                            '删除失败'
                        ),
                    );
                }
            })
        }
    }
};

module.exports = router;