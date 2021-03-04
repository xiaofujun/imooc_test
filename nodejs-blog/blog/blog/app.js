const queryString = require('querystring');
const blogRoute = require('./src/routes/blog');
const userRoute = require('./src/routes/user');
const {
  getPostData,
} = require('./src/util');
const {
  get,
  set,
} = require('./src/db/redis');
const {
    accessLog,
} = require('./src/util/log');

// 解析cookie信息
const parseStr = (str) => {
    let cookie = {};

    if(str) {
        let cookieArrs = str.split(';');

        cookieArrs && cookieArrs.forEach(item => {
            let index = item.indexOf('=');
            let key = item.slice(0, index).trim();
            let value = item.slice(index+1).trim();

            cookie[key] = value;
        })
    }
    return cookie;
}

// 中间件app
const app = (req, res) => {
    // 设置响应头
    res.setHeader('content-type', 'application/json');

    // 用来测试 pm2 的进程守护
    // if(req.url === '/api/err') {
    //     throw new Error();
    // }

    // 使用redis处理session
    let cookie = parseStr(req.headers.cookie);
    let userId = cookie.userId;

    if(!userId) {
        // 筛入userId并提示登录
        userId = `${new Date().getTime()}_${Math.random()}`;

        set(userId, JSON.stringify({})).then(() => {
            res.setHeader('set-cookie', `userId=${userId}; path=/; httpOnly;`);
        })
    }

    // 获取session信息
    get(userId).then(session => {
        req.session = session;
        req.userId = userId;

        // 处理请求中的参数以及路径
        return getPostData(req, res);
    }).then(data => {
        req.path = req.url.split('?')[0];
        req.query = queryString.parse(req.url.split('?')[1]);
        req.body = data;

        // 记录日志
        accessLog(`${new Date().toLocaleTimeString()} -- ${req.path} -- ${req.method} -- ${req.headers['user-agent']}`);

        // 博客路由
        let blogResult = blogRoute(req, res);
        if(blogResult) {
            blogResult.then(data => {
                if(data) {
                    res.end(data);
                }
            })
            return;
        }

        // 用户路由
        let userResult = userRoute(req, res);
        if(userResult) {
            userResult.then(data => {
                if(data) {
                    res.end(data);
                }
            })
            return;
        }

        // 否则404
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('NOT FOUNT');
    })


};

module.exports = app;