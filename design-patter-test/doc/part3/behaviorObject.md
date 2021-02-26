# 第三节：行为型

## 1. 观察者模式
- 描述
发布&订阅、一对N

- 生活场景
1. 订牛奶
2. 订报纸

- UML类图
![](./image/observer.png)

- 代码演示
```js
// 类 Subject
class Subject {
    constructor() {
        this.observers = [];
        this.state = 0;
    }

    // 更新状态
    updateState(state) {
        this.state = state;
        this.notifyObjs();
    }

    // 通知观察者状态发生变化
    notifyObjs() {
        this.observers.forEach(ob => {
            ob.update();
        })
    }

    // 添加观察者
    registryObserver(ob) {
        this.observers.push(ob);
    }
}

// 观察者 Observer
class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    update() {
        console.log(`${this.name} 状态发生了变化: ${this.subject.state}`);
    }

    getSubjectInstance() {
        this.subject.registryObserver(this);
    }
}

// 测试用例
// 创建一个 subject 实例
const subject = new Subject();

// 注册一个观察者
const ob1 = new Observer('o1', subject);
ob1.getSubjectInstance();
const ob2 = new Observer('o2', subject);
ob2.getSubjectInstance();
const ob3 = new Observer('o3', subject);
ob3.getSubjectInstance();

// 通知 observers，subject 中的 state 发生变化
subject.updateState('23');
subject.updateState('2');
subject.updateState('26');
```

- 应用场景
观察者模式的应用场景是最多的，如果23种设计模式，只选择一种，则一定是观察者模式。
1. 网页的点击等事件
2. jquery的Callbak事件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery Callback</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
</head>
<body>
    <p>使用 jquery.Callback 的方法</p>
    <ul>
        <li>
            <p> 1. 引入 jquery 包 </p>
        </li>
        <li>
            <p> 2. 实例化 jquery.Callbacks </p>
        </li>
        <li>
            <p> 3. 通过 callback.add 添加 observer </p>
        </li>
        <li>
            <p> 4. 通过 callback.fire() 触发状态的改变以及 observer 对应的操作 </p>
        </li>
    </ul>

    <script>
        // 实例化 callback
        var callback = jQuery.Callbacks();

        // 添加 observer
        callback.add(function(info) {
            console.log(`第一个：${info}`);
        })

        callback.add(function(info) {
            console.log(`第二个: ${info}`);
        })

        callback.add(function(info) {
            console.log(`第三个: ${info}`);
        })

        // subject 发生变化，触发 observer
        callback.fire('a1');
        callback.fire('a2'); 

    </script>
</body>
</html>
```

3. nodejs的自定义事件`require('events').EventEmitter`
```js
// 演示 nodejs 中的自定义事件
// 演示 nodejs 中的自定义事件
const EventEmitter  = require('events').EventEmitter;

const eventEmitter = new EventEmitter();

// 通过 EventEmitter.on 注册监听
eventEmitter.on('click', function(info) {
    console.log(`第一个：${info}`)
})

eventEmitter.on('click', function(info) {
    console.log(`第2个：${info}`)
})

eventEmitter.on('click', function(info) {
    console.log(`第3个：${info}`)
})

eventEmitter.on('change', function(info) {
    console.log(`第一个：${info}`)
})

eventEmitter.on('change', function(info) {
    console.log(`第2个：${info}`)
})

eventEmitter.on('change', function(info) {
    console.log(`第3个：${info}`)
})

eventEmitter.emit('click', '点击事件');
eventEmitter.emit('change', '值变化事件')


// 类的继承
class Dog extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }

    wang() {
        console.log(`${this.name}汪汪汪`);
    }
}

const xiaohei = new Dog('xiaohei');
xiaohei.on('hasPeople', xiaohei.wang);
xiaohei.emit('hasPeople');
```

## 2. 迭代器模式
- 描述
顺序访问一个集合(集成必须是有序的，例如对象就不可以。数组就符合规则)

- UML类图
- 代码演示
- 应用场景

## 3. 状态模式