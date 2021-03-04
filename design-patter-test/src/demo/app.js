// app.js 应用的初始化
import $ from 'jquery';
import List from './list/List';
import ShoppingCart from './shoppingCart/ShoppingCart';

export default class App {
    // app init 后内容渲染到 $el 元素上
    constructor($el) {
        this.$el = $('#'+$el);  
    }
    
    // 初始化文件主入口
    init() {
        this.initShoppingCart();
        this.initList();
    }

    // 初始化购物车按钮
    initShoppingCart() {
        const shoppingCart = new ShoppingCart(this);
        shoppingCart.init();
    }

    // 初始化列表
    initList() {
        const list = new List(this);
        list.init();
    }
}