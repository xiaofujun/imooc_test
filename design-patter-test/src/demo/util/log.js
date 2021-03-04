export function log(type) {
    return function(target, name, decorator) {
        const oldValue = decorator.value;

        decorator.value = function() {
            console.log(`购物车${type}`);
            return oldValue.apply(this, arguments);
        }

        return decorator;
    }
}