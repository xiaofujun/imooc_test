# 原型(prototype)
    1. 每个函数都有prototype属性，且prototype.constructor指向本身
        var fn = function() {};
        fn.prototype.constructor === fn   // true

    2. 所有通过函数 new 出来的东西，这个东西上都有一个__proto__指向这个函数的prototype。
        起个别名容易记忆：
            __proto__  隐式原型
            prototype  （显示）原型

    3. 当要使用一个对象（或者数组）的某个功能时(new 出来的实例)，如果该对象本身具有这个功能，则直接使用；如果该对象没有这个功能，则去__proto__中找。
        var a = new Array();
        a.__proto__ === Array.prototype;

# __proto__
    1. __proto__是可修改的
