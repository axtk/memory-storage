const MemoryStorage = require('./');

let storage = new MemoryStorage(2);
console.assert(storage.getCapacity() === 2, 'capacity');

storage.setItem('x', 0);
storage.setItem('y', 'test');

let len = storage.length();
console.assert(len === 2, 'length');

let x = storage.getItem('x');
console.assert(x === 0, 'numeric value of x');

storage.setItem('z', {a: [1, 2]});
console.assert(storage.length() === 2, 'length after overflow');

let x2 = storage.getItem('x');
console.assert(x2 === undefined, 'removed value of x');

let y = storage.getItem('y');
console.assert(y === 'test', 'string value of y');

let z = storage.getItem('z');
console.assert(JSON.stringify(z) === JSON.stringify({a: [1, 2]}), 'object value of z');

let keys = storage.keys();
console.assert(JSON.stringify(keys) === JSON.stringify(['y', 'z']), 'keys');

let len2 = storage.length();
console.assert(len2 === 2, 'length');

storage.removeItem('y');

let len3 = storage.length();
console.assert(len3 === 1, 'length');

let keys2 = storage.keys();
console.assert(JSON.stringify(keys2) === JSON.stringify(['z']), 'keys after removing y');

storage.clear();

let keys3 = storage.keys();
console.assert(JSON.stringify(keys3) === JSON.stringify([]), 'keys after clearing');

storage = new MemoryStorage();
console.assert(storage.getCapacity() === Infinity, 'infinite capacity');
