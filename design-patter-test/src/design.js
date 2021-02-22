// 主要演示5中设计原则中的S O
function createSrc(src) {
    return new Promise(function(resolve, reject) {
        let img = document.createElement('img');
        img.src = src;

        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject('加载出错');
        }
    })
}

createSrc('https://tva1.sinaimg.cn/large/007Tv3Vmly1gnvlopazhjj31hc0u07d9.jpg')
.then(function(img){
    console.log(img.width);
    return img;
})
.then(function(img) {
    console.log(img.src);
    return img;
})
.catch(function(err){
    console.log(err);
})