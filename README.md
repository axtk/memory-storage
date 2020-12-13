# memory-storage

*An in-memory storage with a localStorage-like API*

## `class MemoryStorage`

### Constructor

#### `MemoryStorage(capacity?: number)`

Creates an in-memory storage instance with the given `capacity`. When the number of entries reaches the `capacity` value and a new item is added to the storage, the first added item is removed from the storage to maintain the capacity. By default, the `capacity` is set to `Infinity`.

### Methods

The `MemoryStorage` API is pretty much in line with the [`Storage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage) interface implemented by `window.localStorage`, `window.sessionStorage`, and [`localForage`](https://github.com/localForage/localForage#readme).

## Installation

```
npm i github:axtk/memory-storage
```
