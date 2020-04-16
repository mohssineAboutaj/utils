const {
	removeDeplicated,
	merge,
	removeFromArray,
	removeTwins,
} = require('../index')

// removeDeplicated() testing
test("should removeDeplicated defined", () => {
	expect(removeDeplicated).toBeDefined()
})

test("should removeDeplicated is a function", () => {
	expect(typeof removeDeplicated).toBe('function')
})

test("should removeDeplicated() return an array", () => {
	let arr = [1,1,2,3,3,4,4,6,5]

	expect(Array.isArray(removeDeplicated(arr))).toBeTruthy()
})

test("should removeDeplicated() return exact values", () => {
	let arr = [1,1,2,3,3,4,4,6,5]

	expect(removeDeplicated(arr)).toEqual([ 1, 2, 3, 4, 6, 5 ])
})

// removeTwins() testing
test("should removeTwins defined", () => {
	expect(removeTwins).toBeDefined()
})

test("should removeTwins is a function", () => {
	expect(typeof removeTwins).toBe('function')
})

test("should removeTwins() return an array", () => {
	let arr = [1,2,3,4,5,6]
	let toRemove = [1,2,3]

	expect(Array.isArray(removeTwins(arr, toRemove))).toBeTruthy()
})

test("should removeTwins() return exact values", () => {
	let arr = [1,2,3,4,5,6,7,9]
	let toRemove = [1,2,7,8,3]

	expect(removeTwins(arr, toRemove)).toEqual([ 4, 5, 6, 9 ])
})

// merge() testing
test("should merge defined", () => {
	expect(merge).toBeDefined()
})

test("should merge is a function", () => {
	expect(typeof merge).toBe('function')
})

test("should merge() return an array", () => {
	expect(merge([1,2,3], [4,5,6], "a", {b: 1}, null, true, undefined, 20)).toEqual([1, 2, 3, 4, 5, 6, 'a', { b: 1 }, null, true, undefined, 20])
})

// remove from array testing
test("should removeDeplicated defined", () => {
	expect(removeDeplicated).toBeDefined()
})

test("should removeFromArray is a function", () => {
	expect(typeof removeFromArray).toBe('function')
})

test("should removeFromArray() return an array", () => {
	let list = ["a","b","c","d"]
	let toRemove = "a"

	expect(Array.isArray(removeFromArray(list, toRemove))).toBeTruthy()
})

test("should removeFromArray() return exact values", () => {
	let list = ["a","b","c","d"]
	let toRemove = "a"

	expect(removeFromArray(list, toRemove)).toEqual(["b","c","d"])
})
