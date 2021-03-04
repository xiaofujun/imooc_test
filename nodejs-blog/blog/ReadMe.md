# blog 系统的搭建

## 介绍
本章主要分为两大内容：
- blog 后台服务的搭建
- blog 前端页面的联调

## 准备工作
使用前需要确保本地安装有 redis、mysql、mongodb、nginx 工具。 (mysql 和 mongodb 二选一即可)

## 下载使用
下载到本地后，在启动服务之前，需要先开启以下服务:
- redis
- mysql

运行命令 `npm run dev` 即可启动后台服务。