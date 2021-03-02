// $.on 事件
import $ from 'jquery';

const $btn1 = $('#btn1');
// 为按钮添加点击事件
$btn1.on('click', function() {
    console.log('改变按钮的名称');
    $btn1.text('按钮');
})
// 触发点击事件
$btn1.trigger('click');


const $p = $('p');
$p.on('click', 'button', function() {
    console.log(this)
    $(this).css("background-color","pink");
})
