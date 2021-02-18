# package.json中的配置
1. version: 规范版本号。设置为0.0.1；1开头的一般代表是发布的，0开头代表开发版本。
    版本号分为3级：
    一级，重构版本
    二级，重大功能改进
    三级，小升级或者bug修复

2. 规范一级目录
    src---源码
    release---发布结果（build）
    test--- 测试用例
    doc----文档
    example---示例demo

3. webpack构建工具
    将es6语法解析成浏览器可识别的js语法。
    .babelrc
    webpack.config.js
    webpack解析打包文件是通过【webpack】命令执行的

4. 写文档&写测试用例
    1. npm i gitbook-cli -g
    2. SUMMARY.md，具体目录查看截图
    3. gitbook init 将SUMMARY.md中使用到的不存在的目录创建出来
    4. gitbook build 将SUMMARY.md转换为html格式，转换后的html存放在_book文件夹下
   
5. 该章节内容具体参考视频