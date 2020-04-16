/**
 * @function removeTwins 
 * @description A simple function to remove the element & it twins elements between two arrays
 * 
 * @param {Array} array The original array
 * @param {Array} toRemove the Array of elements to remove
 * 
 * @returns New Array without duplicates element
 */
function removeTwins(array, toRemove = []) {
	let newArray = [];

	if (toRemove.length === 0) {
		array.forEach((el) => {
			if (! newArray.includes(el)) {
				newArray.push(el)
			}
		})
		return newArray
	} else {
		toRemove.forEach((subEl) => {
			array = array.filter(el => el !== subEl)
		})
		return newArray = array
	}
}

module.exports = removeTwins