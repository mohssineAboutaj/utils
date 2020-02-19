/**
 * @function removeDuplicated 
 * @description A simple function to remove duplicated elements between two arrays
 * 
 * @param {Array} array The original array
 * @param {Array} toRemove the Array of elements to remove
 * 
 * @returns New Array without duplicates element
 */
function removeDuplicated(array, toRemove) {
	let newArray;
	toRemove.forEach((subEl) => {
		array = array.filter(el => el !== subEl)
	})
	return newArray = array
}

module.exports = removeDuplicated