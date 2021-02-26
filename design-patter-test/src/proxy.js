const star = {
    name: 'xfj',
    age: 24,
    tel: 'star: 130xxxx8888'
};

let obj = new Proxy(star, {
    get: function(target, key) {
        if('tel' === key) {
            return 'proxy: 189xxxx7618'
        } else if('money' === key) {
            return 120000;
        } else {
            return target[key];
        }
    },
    set: function(target, key, value) {
        if('subPrice' === key) {
            if(value < 100000) {
                throw new Error('价格太低')
            }else {
                target['money'] = value;
            }
        }
    }
})

console.log(obj.name)
console.log(obj.age)
console.log(obj.tel)
obj.subPrice = 110000;
console.log(obj.money)
// obj.subPrice = 90000;
// console.log(obj.money)