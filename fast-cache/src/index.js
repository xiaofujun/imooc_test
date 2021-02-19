class FastCache {
    constructor() {
        this.list = [];
    }

    set(key, value) {
        this.list[key] = value;
    }

    get(key) {
        if(key) {
            return this.list[key];
        }

        return null;
    }

    clean() {
        this.list = [];
    }
}

window.FastCache = FastCache;