# 第二节：SOLID五大设计原则

- S: 单一职责原则
- O: 开放封闭原则

    对扩展开放，对修改封闭

- L：李氏置灰原则

    子类继承父类，子类能覆盖父类的所有方法。
    继承就是抽出公共的方法作为父类。

- I: 接口独立原则

    保持接口的单一独立，避免出现"胖接口"

- D: 依赖倒置原则

    面向接口编程，依赖于抽象而不依赖于具体

通过promise应用说明S O
```js
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
```
扩展只需要通过添加`then`即可   