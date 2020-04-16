/**
 * @function removeDuplicated 
 * @description A simple function to remove duplicated elements between two arrays
 * 
 * @param {Array} array The original array
 * @param {Array} toRemove the Array of elements to remove
 * 
 * @returns New Array without duplicates element
 */
function removeDuplicated(array) {
	let newArray = [];

	array.forEach((el) => {
		if (! newArray.includes(el)) {
			newArray.push(el)
		}
	})

	return newArray
}

module.exports = removeDuplicated