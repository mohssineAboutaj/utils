# Utils

a project contain simple javaScript functions to do something like merge arrays, remove duplicates elements, ...

## Features & Availabe functions
+ removeDuplicates

## Install
```sh
npm install -D @mohssineAboutaj/utils
```
or
```sh
yarn add -D @mohssineAboutaj/utils
```

## Usage

```js
const {
	removeDeplicates
} = require('@mohssineAboutaj/utils')

let origin = [1,2,3,4,5,6]
let removes = [1,3,2,6]

let arr = removeDeplicates(origin, removes)

console.log(arr) // output is [4,5]
```

## Changelog
[read more about changing in changelog file](./CHANGELOG.md)

## License
MIT