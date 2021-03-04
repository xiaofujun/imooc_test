# 第二节：express 框架实现后台服务的搭建

- session

    express-session 中间件实现 session
- redis

    connect-redis 配合 express-session 实现 session 存储在 redis 中

- 检测登录权限的中间件

    将检测中间件的函数封装成组件

- 日志

    使用 morgan 实现日志，需要区分 dev 和 pro 环境