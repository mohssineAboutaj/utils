const {
	removeDeplicates,
	merge
} = require('../index')

test("should removeDeplicates defined", () => {
	expect(removeDeplicates).toBeDefined()
})

test("should removeDeplicates is a function", () => {
	expect(typeof removeDeplicates).toBe('function')
})

test("should removeDeplicates() return an array", () => {
	let origin = [1,2,3,4,5]
	let toRemove = [1,4,1,4,4,3]

	expect(removeDeplicates(origin, toRemove)).toEqual([2,5])
})

test("should merge defined", () => {
	expect(merge).toBeDefined()
})

test("should merge is a function", () => {
	expect(typeof merge).toBe('function')
})

test("should merge() return an array", () => {
	expect(merge([1,2,3], [4,5,6], "a", {b: 1}, null, true, undefined, 20)).toEqual([1, 2, 3, 4, 5, 6, 'a', { b: 1 }, null, true, undefined, 20])
})
