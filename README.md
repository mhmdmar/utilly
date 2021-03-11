# utily

Utils functions for javascript.


Utily is released under the [MIT license]<br>

## Installation

Using npm:
```shell
$ npm install utily
```
Note: add `--save` if you are using npm < 5.0.0

In Node.js:
```js
// Load the full build.
const utily = require('utily');

// Load specific function.
const { cloneObject } = require('utily');
```

## Why Utily?

Utily functions takes the magic out of javascript leaving you to worry only about the logic,<br>

## Examples
```js
const { isNil, cloneObject } = require('utily');

isNil(null) === true // true
isNil() === true // true
isNil(undefined) === true // true
isNil(false) === true // false

const array = [1,2]
const clonedArray = cloneObject(array)
clonedArray.push(3); // array equals [1,2]
```