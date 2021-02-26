// 类 Subject
class Subject {
    constructor() {
        this.observers = [];
        this.state = 0;
    }

    // 更新状态
    updateState(state) {
        this.state = state;
        this.notifyObjs();
    }

    // 通知观察者状态发生变化
    notifyObjs() {
        this.observers.forEach(ob => {
            ob.update();
        })
    }

    // 添加观察者
    registryObserver(ob) {
        this.observers.push(ob);
    }
}

// 观察者 Observer
class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    update() {
        console.log(`${this.name} 状态发生了变化: ${this.subject.state}`);
    }

    getSubjectInstance() {
        this.subject.registryObserver(this);
    }
}

// 测试用例
// 创建一个 subject 实例
const subject = new Subject();

// 注册一个观察者
const ob1 = new Observer('o1', subject);
ob1.getSubjectInstance();
const ob2 = new Observer('o2', subject);
ob2.getSubjectInstance();
const ob3 = new Observer('o3', subject);
ob3.getSubjectInstance();

// 通知 observers，subject 中的 state 发生变化
subject.updateState('23');
subject.updateState('2');
subject.updateState('26');