# 第一节：原生 js 实现后台服务的搭建

- 服务稳定性
    - PM2
- 内存和 CPU 的优化
    - CPU 优化：使用流 stream 进行文件的写入和读取
    - 内存的扩展：使用 redis 进行 session 的存储；PM2 开启多进程，充分利用内存和 CPU 
- 安全
    - 防止 sql 注入：mysql 自带的 escape
    - 防止 xss 攻击: xss 插件
    - 为数据库的密码加密: nodejs 自带的 crypto
- 日志
    - 使用 nodejs 自带的 readline 插件进行日志的按行读取分析
- 集成部署和负载均衡
    - 安装 pm2 进行进程的守护
        - pm2 的命令
            - pm2 start xxx.js/xxx.config.json: 启动进程
            - pm2 stop AppName/id: 停止进程
            - pm2 delete AppName/id: 删除进程
            - pm2 restart AppName/id: 重启进程
            - pm2 list: 查看进程
            - pm2 info AppName/id: 查看某个进程的信息
            - pm2 logs AppName/id: 查看进程的日志
            - pm2 monit: 监控进程      

        - 通过 watch 进行进程的重启
    - 多进程机制：提高内存和 CPU 的使用率
        - 内存：单个进程的内存是受限的，会空出一大部分的内存
        - CPU：现在 CPU 是多核的，N 核可以跑 N 个进程
    - pm2 可以使 console 输出到日志文件中
           
