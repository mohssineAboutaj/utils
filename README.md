<h1>Utils</h1>

## Table Of Content

- [Table Of Content](#table-of-content)
- [About](#about)
- [Features & Functions](#features--functions)
- [Documentation](#documentation)
- [Install](#install)
- [Usage](#usage)
	- [Usage of _removeDeplicated()_](#usage-of-removedeplicated)
	- [Usage of _removeTwins()_](#usage-of-removetwins)
	- [Usage of _merge()_](#usage-of-merge)
	- [Usage of _removeFromArray()_](#usage-of-removefromarray)
- [Changelog](#changelog)
- [License](#license)

## About

a project contain simple javaScript functions to do something like merge arrays, remove duplicates elements, ...

## Features & Functions

- removeDeplicated
- merge
- removeTwins
- removeFromArray

## Documentation

[Read the Documentation](https://mohssineaboutaj.github.io/utils/)

## Install

```sh
npm install @mohssineAboutaj/utils
```

or

```sh
yarn add @mohssineAboutaj/utils
```

## Usage

### Usage of _removeDeplicated()_

```js
const { removeDeplicated } = require("@mohssineAboutaj/utils");

let origin = [1, 2, 3, 4, 5, 6];
let removes = [1, 3, 2, 6];

let arr = removeDeplicated(origin, removes);

console.log(arr); // output is [4,5]
```

### Usage of _removeTwins()_

```js
const { removeTwins } = require("@mohssineAboutaj/utils");

let origin = [1, 2, 3, 4, 5, 6];
let removes = [1, 3, 2, 6]; // not required

let arr = removeTwins(origin, removes);

console.log(arr); // output is [4,5]
```

### Usage of _merge()_

```js
const { merge } = require("@mohssineAboutaj/utils");

let arr = merge([1, 2, 3], [4, 5, 6], "a", { b: 1 }, null, true, undefined, 20);

console.log(arr); // output is [1, 2, 3, 4, 5, 6, 'a', { b: 1 }, null, true, undefined, 20]
```

### Usage of _removeFromArray()_

```js
const { removeFromArray } = require("@mohssineAboutaj/utils");

let origin = [1, 2, 3, 4, 5, 6];
let removes = 2; // not required

let arr = removeFromArray(origin, removes);

console.log(arr); // output is [1,3,4,5,6]
```

## Changelog

[read more about changing in changelog file](./CHANGELOG.md)

## License

MIT
