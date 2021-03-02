// 原型模式
let prototype = {
    getName: function() {
        console.log(`${this.first} ${this.last}`);
    },
    say: function() {
        console.log('hello');
    }
}

let x = Object.create(prototype);
x.first = 'zhang';
x.last = 'san';
x.getName();
x.say();

let y = Object.create(prototype);
y.first = 'li';
y.last = 'si';
y.getName();
y.say();