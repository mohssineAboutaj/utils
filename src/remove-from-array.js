/**
 * @function removeFromArray a function to remove an element array
 * 
 * @param  {array} list the array to remove the element from it
 * @param  {any} toRemove any data type to remove
 * 
 * @returns an Array of elements without removed value
 */
function removeFromArray(list, toRemove) {
	let result = []
	list.filter(el => {
		if (el !== toRemove) {
			result.push(el)
		}
	})
	return result
}

module.exports = removeFromArray