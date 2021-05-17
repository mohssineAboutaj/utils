<h1>Utils</h1>

- [About](#about)
- [Features & Functions](#features--functions)
- [Documentation](#documentation)
- [Install](#install)
- [Usage](#usage)
  - [Usage of _removeDeplicates()_](#usage-of-removedeplicates)
  - [Usage of _removeTwins()_](#usage-of-removetwins)
  - [Usage of _merge()_](#usage-of-merge)
  - [Usage of _removeFromArray()_](#usage-of-removefromarray)
  - [Usage of _toggleArrayValue()_](#usage-of-togglearrayvalue)
- [Changelog](#changelog)
- [License](#license)

## About

a project contain simple javaScript functions to do something like merge arrays, remove duplicates elements, ...

## Features & Functions

- removeDeplicates
- merge
- removeTwins
- removeFromArray
- toggleArrayValue

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

### Usage of _removeDeplicates()_

```js
const { removeDeplicates } = require("@mohssineAboutaj/utils");

let origin = [1, 2, 3, 4, 5, 6];
let removes = [1, 3, 2, 6];

let arr = removeDeplicates(origin, removes);

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

### Usage of _toggleArrayValue()_

```js
const { toggleArrayValue } = require("@mohssineAboutaj/utils");

let origin = ["a", "b", "c"];
let value = 2; // not required

let arr = toggleArrayValue(origin, value);

console.log(arr); // output is ['a','b','c',2]
```

## Changelog

[read more about changing in changelog file](./CHANGELOG.md)

## License

MIT
