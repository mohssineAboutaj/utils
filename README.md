# Utils

a project contain simple javaScript functions to do something like merge arrays, remove duplicates elements, ...

## Features & Availabe functions
+ removeDuplicates

## Documentation
[Read the Documentation](https://mohssineaboutaj.github.io/utils/)

## Install
```sh
npm install -D @mohssineAboutaj/utils
```
or
```sh
yarn add -D @mohssineAboutaj/utils
```

## Usage
### Usage of *removeDeplicates()*
```js
const { removeDeplicates } = require('@mohssineAboutaj/utils')

let origin = [1,2,3,4,5,6]
let removes = [1,3,2,6]

let arr = removeDeplicates(origin, removes)

console.log(arr) // output is [4,5]
```
### Usage of *merge()*
```js
const { merge } = require('@mohssineAboutaj/utils')

let arr = merge([1,2,3], [4,5,6], "a", {b: 1}, null, true, undefined, 20)

console.log(arr) // output is [1, 2, 3, 4, 5, 6, 'a', { b: 1 }, null, true, undefined, 20]
```

## Changelog
[read more about changing in changelog file](./CHANGELOG.md)

## License
MIT
