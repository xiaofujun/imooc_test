// 旧数据格式的接口
class Adaptee {
    specialRequest() {
        return `typec`;
    }
}

// 适配器
class Target {
    constructor() {
        this.adaptee = new Adaptee();
    }

    request() {
        let msg = this.adaptee.specialRequest();
        return `USB充电器插头支持${msg}`;
    }
}

// 测试用例
let target = new Target();;
console.log(target.request());
