// 购物车类
import {log} from '../util/log';

class Cart {
    constructor() {
        this.list = [];
    }

    @log('add')
    add(data) {
        this.list.push(data);
    }

    @log('del')
    del(id) {
        this.list = this.list.filter(item => {
            if(item.id === id) {
                return false;
            }
            return true;
        })
    }

    showList() {
        return this.list && this.list.map(item => item.name).join('\n');
    }
}

let getCartInstance = (function() {
    let cart = null;
    return function() {
        if(!cart) {
            cart = new Cart();
        }
        return cart;
    }
})();

export default getCartInstance;