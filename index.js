class MemoryStorage {
    constructor(capacity) {
        this._storage = Object.create(null);
        this._keys = [];
        this.setCapacity(capacity);
    }
    setCapacity(capacity) {
        this.capacity = typeof capacity === 'number' ? capacity : Infinity;
        this.revise();
    }
    getCapacity() {
        return this.capacity;
    }
    revise() {
        let deleteCount = this._keys.length - Math.max(this.capacity, 0);
        if (deleteCount > 0) {
            for (let i = 0; i < deleteCount; i++)
                delete this._storage[this._keys[i]];
            this._keys.splice(0, deleteCount);
        }
    }
    getItem(key) {
        return this._storage[key];
    }
    setItem(key, value) {
        this._keys.push(key);
        this._storage[key] = value;
        this.revise();
    }
    removeItem(key) {
        let k = this._keys.indexOf(key);

        if (k !== -1) {
            delete this._storage[key];
            this._keys.splice(k, 1);
        }
    }
    clear() {
        this._storage = Object.create(null);
        this._keys = [];
    }
    key(index) {
        return this._keys[index];
    }
    keys() {
        return this._keys.slice();
    }
    length() {
        return this._keys.length;
    }
}

module.exports = MemoryStorage;
