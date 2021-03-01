// javascript-state-machine
import StateMachine from 'javascript-state-machine';
import $ from 'jquery';

let fsm = new StateMachine({
    init: '收藏',
    transitions: [{
        name: 'deleteStore',
        from: '取消收藏',
        to: '收藏'
    }, {
        name: 'doStore',
        from: '收藏',
        to: '取消收藏'
    }],
    methods: {
        onDoStore: function(obj) {
            console.log(`当前状态是：${obj.from}, 收藏成功`);
            updateText();
        },
        onDeleteStore: function(obj) {
            console.log(`当前状态是: ${obj.from}, 取消收藏成功`);
            updateText();
        }
    }
})

const $btn = $('#btn1');

function updateText() {
    $btn.text(fsm.state);
}

$btn.click(function() {
    if(fsm.is('收藏')) {
        fsm.doStore();
    } else {
        fsm.deleteStore();
    }
})

updateText();