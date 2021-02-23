class Product {
    constructor(name) {
        this.name = name;
    }

    getName() {
        alert(this.name);
    }
}

class Creator {
    create(name) {
        return new Product(name); 
    }
}

// 测试：
let creator = new Creator();
let xiaofujun = creator.create('xiaofujun');
xiaofujun.getName();