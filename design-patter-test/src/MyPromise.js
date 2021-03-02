import StateMachine from 'javascript-state-machine';

// Promise 的有限状态机
const fsm = new StateMachine({
    init: 'pending',
    transitions: [{
        name: 'resolve',
        from: 'pending',
        to: 'fulfilled',
    }, {
        name: 'reject',
        from: 'pending',
        to: 'rejected',
    }],
    methods: {
        onResolve: function(state, data, args) {
            // 处理 resolve 的逻辑, state 是状态机 new 出来的实例，data 是在使用时外部传递的参数
            
            data.successLists.forEach(fn => {
                args = fn(args);
            });
        },
        onReject: function(state, data, args) {
            // 处理 reject 的逻辑
            data.failLists.forEach(fn => {
                args = fn(args);
            });
        }
    } 
});

// Promise 类
class MyPromise {
    constructor(fn) {
        // .then 并不是立即执行，是在 promise 实例返回执行结果后再执行的内容
        this.successLists = [];
        this.failLists = [];

        // fn 是要执行的，执行结束，根据结果返回 resolve 或者 reject 中的内容
        fn((args) => {
            // 从 pending 到 fulfilled
            fsm.resolve(this, args);
        }, (args) => {
            // 从 pending 到 rejected
            fsm.reject(this, args);

        });
    }

    then(successFn, failFn) {
        console.log('进入到then方法里收集事件啦');
        if(successFn) {
            this.successLists.push(successFn);
        }
        if(failFn) {
            this.failLists.push(failFn);
        }
        return this;
    }
}

// 测试用例
let result = new MyPromise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = 'https://cn.bing.com/th?id=OHR.VolcanoLlaima_ZH-CN3436127573_1920x1080.jpg&rf=LaDigue_192';
    img.onload = function() {
        resolve(img);
    }
    img.onerror = function() {
        reject(img);
    }
});

result
    .then(function(img) {
        console.log('图片加载成功，图片的信息如下：');
        console.log(img.width, img.height);
        return img;
    }, function(img) {
        console.log(`图片加载失败，图片路径为${img.src}`);
    })
    .then(function(img) {
        console.log('图片的路径是：', img.src);
    });
