// 购物车按钮
import $ from 'jquery';
import getCartInstance from './Cart';

export default class ShoppingCart {
    constructor(app) {
        this.app = app;
        this.$el = $('<div style="margin: 10px">');
        this.cart = getCartInstance();
    }

    // 初始化购物车按钮
    init() {
        this.initCartBtn();
        this.render();
    }

    // 购物车按钮
    initCartBtn() {
        let $btn = $('<button>购物车列表</button>');
        $btn.on('click', () => {
            this.showCartInfo();
        });

        // 将购物车按钮 $btn 渲染到 this.$el 上
        this.$el.append($btn);
    }

    // 点击购物车时调用的事件
    showCartInfo() {
        alert(this.cart.showList());
    }

    // 将购物车按钮渲染到跟节点上
    render() {
        this.app.$el.append(this.$el);
    }
}