// (function showInfo() {
//     alert('msg');
// })();

var showInfo = function() {
    alert('函数表达式');
}();

(function showInfo1() {
    alert('声明函数');
}());

(function() {
    alert('匿名函数');
}())