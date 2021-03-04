class People {
    constructor (name, house) {
        this.name = name;
        this.house = house;
    }

    eat() {
        alert(`${this.name} eat something`);
    }

    city() {
        alert(`${this.name} live ${this.house ? this.house.city : 'shanghai'}`);
    }
}

class Student extends People {
    constructor (name, number, house) {
        super(name, house);
        this.number = number;
    }

    study() {
        alert(`${this.name} studyNum ${this.number}`);
    }
}

class House {
    constructor (city) {
        this.city = city;
    }

    getCity() {
        alert(`${city}`);
    }
}

let xiaohong = new Student('xiaohong', 'A1');
xiaohong.study();

let house = new House('beijing');
let xiaoming = new Student('xiaoming', 'A2', house);
xiaoming.city();
console.log('ssfdd')