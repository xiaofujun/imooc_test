// 画图工具
@addTargetName
class Circle {
    @log
    draw() {
        console.log('画个图形');
    }
}

function addTargetName(traget) {
    traget.prototype.enable = 'xfj';  // 实例上添加
    traget.enable1 = 'xfj1'; // 类对象上添加
}

function log(target, name, decorators) {
    const oldValue = decorators.value;

    decorators.value = function() {
        console.log(`你在使用Circle类中的${name}方法`);
        oldValue.apply(this, arguments);
    }
}

// 测试
let circle = new Circle();
console.log(circle.enable); // 'xfj'
console.log(circle.enable1); // undefined
circle.draw(); // 你在使用Circle中的draw方法； 画个圆形
console.log(Circle.enable1); // 'xfj1'
console.log(Circle.enable); // undefined

// // 装饰器
// class Target {
//     constructor(circle) {
//         this.circle = circle;
//     }

//     draw() {
//         this.circle.draw();
//         this.setRedBorder();
//     }

//     setRedBorder() {
//         console.log('设置红色边框');
//     }
// }

// // 测试代码
// const circle = new Circle();
// circle.draw();
// const target = new Target(circle);
// target.draw(); 