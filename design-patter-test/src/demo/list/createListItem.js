import Item from './Item';

function getProxyData(data) {
    return new Proxy(data, {
        get: function(target, key) {
            if('name' === key) {
                return `${target[key]}【打折】`;
            }
            if('price' === key) {
                return target[key] * 0.8;
            }
            return target[key];
        }
    });
}

export default function(list, data) {
    if(data.discount) {
        data = getProxyData(data);
    }
    return new Item(list, data);
}
