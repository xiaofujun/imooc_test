// 列表每一项 Item 类
import $ from 'jquery';
import StateMachine from 'javascript-state-machine';
import getCartInstance from '../shoppingCart/Cart';

export default class Item {
    constructor(list, data) {
        this.$el = $('<div style="margin: 5px 5px 10px">');
        this.list = list;
        this.data = data;
        this.cart = getCartInstance();
    }

    init() {
        this.initListItem();
        this.initCartBtn();
        this.render();
    }

    initListItem() {
        this.$el.append($(`<div>书名：${this.data.name}</div>`));
        this.$el.append($(`<div>价格：${this.data.price}</div>`));
    }

    initCartBtn() {
        let $btn = $('<button>');

        const fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: 'addToCart',
                    from: '加入购物车',
                    to: '从购物车删除'
                },
                {
                    name: 'delFromCart',
                    from: '从购物车删除',
                    to: '加入购物车',
                }
            ],
            methods: {
                onAddToCart: () => {
                    this.addItemToCart();
                    updateText();
                    delBtnBgColor();
                },
                onDelFromCart: () => {
                    this.delItemFromCart();
                    updateText();
                    addBtnBgColor();
                }
            }
        })

        $btn.on('click', function() {
            if(fsm.is('加入购物车')) {
                fsm.addToCart();
            } else {
                fsm.delFromCart();
            }
        })

        function updateText() {
            $btn.text(fsm.state);
        }

        function addBtnBgColor() {
            $btn.css({
                'background': 'green',
                'color': 'white'
            });
        }

        function delBtnBgColor() {
            $btn.css({
                'background': '',
                'color': 'black'
            });
        }

        updateText();
        addBtnBgColor();
        this.$el.append($btn);
    }

    // 加入购物车
    addItemToCart() {
        this.cart.add(this.data);   
    }

    // 从购物车删除
    delItemFromCart() {
        this.cart.del(this.data.id);
    }

    render() {
        this.list.$el.append(this.$el);
    }
}