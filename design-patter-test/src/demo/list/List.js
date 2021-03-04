// 商品列表类
import $ from 'jquery';
import createListItem from './createListItem';

export default class List {
    constructor(app) {
        this.app = app;
        this.$el = $('<div style="margin: 10px 0 0">');
    }

    // 列表内容渲染的入口
    init() {
        this.initData()
            .then(data => {
                this.initList(data);
            })
            .then(() => {
                this.render();
            })
            .catch(err => {
                console.log('err')
            })
    }

    // 获取数据
    initData() {
        // 采用 fetch 请求接口获取数据，返回的是个 Promise
        return fetch('/api/list.json').then(data => {
            return data.json(); // 将返回数据转换为 json 
        });
    }

    // 渲染列表
    initList(data) {
        data && data.forEach(itemData => {
            let item = createListItem(this, itemData);
            item.init();
        })
    }

    // render 根节点
    render() {
        this.app.$el.append(this.$el);
    }
}