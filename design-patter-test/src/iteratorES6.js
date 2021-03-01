//  es6 语法中的迭代器 iterator

function each(data) {
    
    // const iterator = data[Symbol.iterator]();

    // let item = {done: false};
    // while(!item.done) {
    //     item = iterator.next();
    //     if(!item.done) {
    //         console.log(item.value);
    //     }
    // }

    // 带有 Symbol.iterator 属性的对象才可以使用 for...of...
    for(let item of data) {
        console.log(item);
    }

    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
}

const arr = [1, 2, 3, 4, 5, 6];
const nodeListArrs = document.getElementsByTagName('p');
const m = new Map();
m.set('a', 100);
m.set('b', 200);

each(arr);
each(nodeListArrs);
each(m);
