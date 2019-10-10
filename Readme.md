# Sanitize Object

![Build Status](https://github.com/charliewilco/sanitize-object/workflows/nodejs/badge.svg)

When you need a cloned object without the stowaways.

## Install

```
yarn add @charliewilco/sanitize-object
```

## Example

```js
const sanitize = require('@charliewilco/sanitize-object')

const cloned = sanitize(
  { dateAdded: '2017-11-21T15:57:28.109Z', title: 'Some Entry' },
  ['dateAdded']
)

console.log(cloned)

// Result: { title: 'Some Entry' }
```
