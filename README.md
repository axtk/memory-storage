[![npm](https://img.shields.io/npm/v/@axtk/memory-storage?labelColor=royalblue&color=royalblue&style=flat-square)](https://www.npmjs.com/package/@axtk/memory-storage)
![browser](https://img.shields.io/badge/browser-✓-blue?labelColor=dodgerblue&color=dodgerblue&style=flat-square)
![node](https://img.shields.io/badge/node-✓-blue?labelColor=dodgerblue&color=dodgerblue&style=flat-square)

*An in-memory storage with a localStorage-like API*

## `class MemoryStorage`

Usage:

```js
const MemoryStorage = require('@axtk/memory-storage');

const storage = new MemoryStorage(10);

storage.setItem('x', 1);

let x = storage.getItem('x');
```

#### `new MemoryStorage(capacity?)`

Creates an in-memory storage instance with the given `capacity`.

- **`capacity?: number`**
  - A maximum number of entries to be stored. When the number of entries reaches this value adding a new entry to the storage will cause the first added entry to be removed from the storage to maintain the capacity.
  - Default: `Infinity`.

The methods of the `MemoryStorage` class are in line with the [`Storage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage) interface.
