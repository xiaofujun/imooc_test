//  迭代器模式 iterator

// 使用类
class Context {
    constructor(list) {
        this.list = list;
    }

    getIterator() {
        return new MyIterator(this);
    }
}

// 迭代器
class MyIterator {
    constructor(context) {
        this.list = context.list;
        this.index = 0;
    }

    // 是否有下一个
    hasNext() {
        if(this.list.length <= this.index) {
            return false;
        }
        return true;
    }

    // next
    next() {
        if(this.hasNext()) {
            return this.list[this.index++];
        }
    }
}

// 测试用例
const arr = [1, 2, 3, 4, 5];
const context = new Context(arr);
const iterator = context.getIterator();

while(iterator.hasNext()) {
    console.log(iterator.next());
}
