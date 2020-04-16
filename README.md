# Utils

a project contain simple javaScript functions to do something like merge arrays, remove duplicates elements, ...

## Features & Availabe functions
+ removeDeplicated
+ merge
+ removeTwins
+ removeFromArray

## Documentation
[Read the Documentation](https://mohssineaboutaj.github.io/utils/)

## Install
```sh
npm install --save @mohssineAboutaj/utils
```
or
```sh
yarn add --save @mohssineAboutaj/utils
```

## Usage
### Usage of *removeDeplicated()*
```js
const { removeDeplicated } = require('@mohssineAboutaj/utils')

let origin = [1,2,3,4,5,6]
let removes = [1,3,2,6]

let arr = removeDeplicated(origin, removes)

console.log(arr) // output is [4,5]
```
### Usage of *removeTwins()*
```js
const { removeTwins } = require('@mohssineAboutaj/utils')

let origin = [1,2,3,4,5,6]
let removes = [1,3,2,6] // not required

let arr = removeTwins(origin, removes)

console.log(arr) // output is [4,5]
```
### Usage of *merge()*
```js
const { merge } = require('@mohssineAboutaj/utils')

let arr = merge([1,2,3], [4,5,6], "a", {b: 1}, null, true, undefined, 20)

console.log(arr) // output is [1, 2, 3, 4, 5, 6, 'a', { b: 1 }, null, true, undefined, 20]
```
### Usage of *removeFromArray()*
```js
const { removeFromArray } = require('@mohssineAboutaj/utils')

let origin = [1,2,3,4,5,6]
let removes = 2 // not required

let arr = removeFromArray(origin, removes)

console.log(arr) // output is [1,3,4,5,6]
```


## Changelog
[read more about changing in changelog file](./CHANGELOG.md)

## License
MIT
