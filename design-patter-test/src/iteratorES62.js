import $ from 'jquery';

const $p = $('p');
const arrList = [1, 2, 3, 4];
const m = new Map();
m.set('a', 100);
m.set('b', 200);
m.set('c', {
    key: 'c'
})

function eachData(data) {
    data = $(data);
    data.each((key, value) => {
        console.log(key, value);
    })
}

function each(data) {
    let iterator = null;
    // 判断 data 上是否有 Symbol.iterator 属性，如果存在，则创建 iterator 实例
    if(data[Symbol.iterator]) {
        iterator = data[Symbol.iterator]();
    }
    // 如果 iterator 实例创建失败，则退出
    if(!iterator) {
        return;
    }
    // 遍历 data 内容
    let item = {done: false};
    while(!item.done) {
        // 获取数据的元素内容
        item = iterator.next();
        // item.done 为 false, 代表还有数据可遍历
        if(!item.done) {
            console.log(item.value);
        }
    }
}

eachData($p);
eachData(arrList);
console.log(m);

console.log('--------------------------------------------');
each($p);
each(arrList);
each(m);