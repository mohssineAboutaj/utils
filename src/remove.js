/**
 * @function removeDeplicates
 * @description A simple function to remove duplicated elements between two arrays
 *
 * @param {Array} array The original array
 * @param {Array} toRemove the Array of elements to remove
 *
 * @returns New Array without duplicates element
 */
function removeDeplicates(array) {
  let newArray = [];

  array.forEach((el) => {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  });

  return newArray;
}

/**
 * @function removeFromArray a function to remove an element array
 *
 * @param  {array} list the array to remove the element from it
 * @param  {any} toRemove any data type to remove
 *
 * @returns an Array of elements without removed value
 */
function removeFromArray(list, toRemove) {
  let result = [];
  list.filter((el) => {
    if (el !== toRemove) {
      result.push(el);
    }
  });
  return result;
}

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
      if (!newArray.includes(el)) {
        newArray.push(el);
      }
    });
    return newArray;
  } else {
    toRemove.forEach((subEl) => {
      array = array.filter((el) => el !== subEl);
    });
    return (newArray = array);
  }
}

module.exports = { removeTwins, removeFromArray, removeDeplicates };
