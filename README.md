# utilly

Utils functions for javascript.


utilly is released under the [MIT license]<br>

## Installation

Using npm:
```shell
$ npm install utilly
```
Note: add `--save` if you are using npm < 5.0.0

In Node.js:
```js
// Load the full library.
const utilly = require('utilly');

// Load specific function.
const { cloneObject } = require('utilly');
```

## Why utilly?

utilly functions takes the magic out of javascript leaving you to worry only about the logic.<br>

## Examples
```js
const { isNil, cloneObject } = require('utilly');

isNil(null) === true // true
isNil() === true // true
isNil(undefined) === true // true
isNil(false) === true // false

const array = [1,2]
const clonedArray = cloneObject(array)
clonedArray.push(3); // array equals [1,2]
// check utilly.d.ts file to see every function utilly supports.
```
