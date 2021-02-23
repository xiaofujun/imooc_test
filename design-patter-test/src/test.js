// 验证单例模式

class ShoppingCar {
    constructor(counts) {
        this.counts = counts;
    }

    showCounts() {
        alert(this.counts);
    }
}

// 通过在类上添加静态方法，结合闭包，初步实现单例
ShoppingCar.getInstance = (function() {
    let instance;

    return function(counts) {
        if(!instance) {
            instance = new ShoppingCar(counts);
        }
    
        return instance;
    }
})(); 

// 测试
let obj1 = ShoppingCar.getInstance('1');
obj1.showCounts(); // 1

let obj2 = ShoppingCar.getInstance('3');
obj2.showCounts(); // 1

let obj3 = new ShoppingCar('5');
obj3.showCounts(); // 5

console.log('obj1 === obj2', obj1 === obj2);  // true
console.log('obj1 === obj3', obj1 === obj3); // false