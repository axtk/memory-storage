# memory-storage

*An in-memory storage with a localStorage-like API*

## `class MemoryStorage`

### Constructor

#### `MemoryStorage(capacity?: number)`

Creates an in-memory storage instance with the given `capacity`. When the number of entries reaches the `capacity` value and a new item is added to the storage, the first added item is removed from the storage to maintain the capacity. By default, the `capacity` is set to `Infinity`.

### Methods

The `MemoryStorage` API is in line with the [`Storage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage) interface.

```js
let storage = new MemoryStorage(10);

storage.setItem('x', 1);
let x = storage.getItem('x');
```

## Installation

```
npm i github:axtk/memory-storage
```

---

\#browser \#nodejs
