const MemoryStorage = require('./');

let storage, keys, len;
let x, y, z;

storage = new MemoryStorage(2);
console.assert(storage.getCapacity() === 2, 'capacity');

storage.setItem('x', 0);
storage.setItem('y', 'test');

len = storage.length();
console.assert(len === 2, 'length');

x = storage.getItem('x');
console.assert(x === 0, 'numeric value of x');

storage.setItem('z', {a: [1, 2]});
console.assert(storage.length() === 2, 'length after overflow');

x = storage.getItem('x');
console.assert(x === undefined, 'removed value of x');

y = storage.getItem('y');
console.assert(y === 'test', 'string value of y');

z = storage.getItem('z');
console.assert(JSON.stringify(z) === JSON.stringify({a: [1, 2]}), 'object value of z');

keys = storage.keys();
console.assert(JSON.stringify(keys) === JSON.stringify(['y', 'z']), 'keys');

len = storage.length();
console.assert(len === 2, 'length');

storage.removeItem('y');

len = storage.length();
console.assert(len === 1, 'length');

keys = storage.keys();
console.assert(JSON.stringify(keys) === JSON.stringify(['z']), 'keys after removing y');

storage.clear();

keys = storage.keys();
console.assert(JSON.stringify(keys) === JSON.stringify([]), 'keys after clearing');

storage = new MemoryStorage();
console.assert(storage.getCapacity() === Infinity, 'infinite capacity');
