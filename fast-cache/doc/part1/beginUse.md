# 3. 初始化

- 初始化文件
    通过```gitbook init```命令可以初始化SUMMARY.md和README.md两个文件，并根据SUMMARY.md中的路径进行文件夹的自动生成

- README.md文件的介绍
    可以当做书籍的介绍

- SUMMARY.md文件的介绍
    书籍的目录

- 预览
    ```gitbook serve```
    执行后cmd会出现如下提示信息：
    ```
        Starting server ...
        Serving book on http://localhost:4000
    ```
    通过localhost:4000即可进行预览

- 生成html
    ```gitbook build```
    会自动生成_book文件夹