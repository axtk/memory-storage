const MemoryStorage = require('./');

let storage, keys, keys0, len, len0;
let x, y, z;

storage = new MemoryStorage(2);
console.assert(storage.getCapacity() === 2, 'capacity');

storage.setItem('x', 0);

len0 = storage.length();
keys0 = storage.keys();
storage.setItem('x', 1);
len = storage.length();
keys = storage.keys();
console.assert(len0 === len, 'same length after adding existing key');
console.assert(JSON.stringify(keys0) === JSON.stringify(keys), 'same keys after adding existing key');

storage.setItem('y', 'test');

len = storage.length();
console.assert(len === 2, 'length after adding x, y');

x = storage.getItem('x');
console.assert(x === 1, 'numeric value of x');

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
