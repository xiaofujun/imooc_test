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