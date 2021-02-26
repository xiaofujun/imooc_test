// Car
class Car {
    constructor(num) {
        this.num = num;
    }
}

// 摄像头
class Carema {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

// 出口显示器
class Screen {
    show(car, inTime) {
        console.log(`车牌号为${car.num}的车辆停车时间为${Date.now() - inTime}`)
    }
}


// 停车场
class Park {
    constructor(floors) {
        this.floors = floors || [];
        this.carema = new Carema();
        this.screen = new Screen();
        this.carList = {};
    }
    in(car) {
        // 随机停车
        const info = this.carema.shot(car);
        const place = this.floors[0].places[Math.floor(Math.random()*100)];
        place.in();
        info.place = place;

        this.carList[car.num] = info;
    }
    out(car) {
        const info = this.carList[car.num];
        info.place.out();
        this.screen.show(car, info.inTime);
        // 清空，防止内存泄露
        delete this.carList[car.num];
    }

    showEmpty() {
        let msg = this.floors && this.floors.map(floor => {
            return `第${floor.index}层有${floor.showEmptyPlace()}个车位`;
        }).join('\n');

        console.log(msg);
    }
}

// 层
class Floor {
    constructor(index, places) {
        this.index = index;
        this.places = places || [];
    }

    showEmptyPlace() {
        let num = 0;

        this.places && this.places.forEach(place => {
            if(place.isEmpty) {
                num+=1;
            }
        })

        return num;
    }
}

// 车位
class Place {
    constructor() {
        this.isEmpty = true;
    }

    in() {
        this.isEmpty = false;
    }

    out() {
        this.isEmpty = true;
    }
}


// 测试用例

// 初始化停车场
const floors = [];

for(let i = 0; i < 3; i++) {
    const places = [];
    for(let j = 0; j < 100; j++) {
        places[j] = new Place();
    }
    floors[i] = new Floor(i+1, places);
}
const park = new Park(floors);

// 初始化车辆
const car = new Car(100);
const car2 = new Car(101);
const car3 = new Car(102);

console.log('第一辆车进来了');
park.showEmpty();
park.in(car);
console.log('第二辆车进来了');
park.showEmpty();
park.in(car2);
for(let i = 0; i < 10000000; i++){}
console.log('第一辆车离开');
park.out(car);
console.log('第二辆车离开');
park.out(car2);
console.log('第三辆车进来了');
park.showEmpty();
park.in(car3);
console.log('第三辆车离开');
park.out(car3);

