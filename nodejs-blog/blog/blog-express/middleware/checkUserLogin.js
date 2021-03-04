const {FailModal} = require('../modal/msgModal');

module.exports = function(req, res, next) {
    if(!req.session.username) {
        res.json(
            new FailModal('当前用户未登录，请先登录')
        );
    }
    next();
}