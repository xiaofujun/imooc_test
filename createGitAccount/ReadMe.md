# 账号的类型
1. 组织账号
    组织账号中包含很多的项目（多个主流产品），例如facebook。

2. 项目账号
    其下只有一个主流产品。

推荐注册项目账号，原因：官网地址简短明了（通过github配置创建的官网）。

# 账号注册中的注意事项
1. description： 要有特色，凸出，能吸引用户；
2. public/private: 开源的项目一般用public，用户可以随便下载；企业公司的code一般用private，他人不可随意下载，类似交给github托管；
3. license: 选择无纠纷的MIT。
4. 添加ssk：ssk是连接本地电脑和github服务器的钥匙，只有添加成功才能将本地代码提交到github上。
    `ssh-keygen -t rsa -C "your_email@example.com"`

5. 设置name和email： 
   设置：git config user.name 'xfj'
   获取：git config user.name
