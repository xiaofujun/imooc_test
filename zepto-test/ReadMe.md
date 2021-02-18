# zepto源码分析

## 立即执行函数

- 立即执行可以避免全局变量的污染
- 函数表达式可以作为立即执行函数
  ```
    var showInfo = function() {
        alert('msg');
    }()
  ```

  如果匿名函数要作为立即执行函数则如下
  ```
    !(function() {
        alert('匿名函数');
    })()
  ```

  函数声明：
  ```
  (function showInfo1() {
    alert('声明函数');
  })();
  ```


函数有三种：
- 匿名函数
    ```
        setTimeout(function() {
            alert(1);
        }, 1000);
    ```
    setTimeout函数的第一个参数就是匿名函数。

- 函数表达式
  ```
    var showInf = function() {
        alert('msg');
    }
  ```
  类似定义变量的方法定义的函数叫做函数表达式。

- 函数声明
  ```
    function showInf() {
        alert('msg');
    }
  ```
  函数声明方式定义的函数可以在定义之前使用函数，其他两种定义函数的方式必须先定义再使用。


## 原型

## 源码分析