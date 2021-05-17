/**
 * @function toggleArrayValue function to add or remove a value from an array
 *
 * @param {Array} arr array to check value exists & make toggle
 * @param {String|Number} val value to make toggle
 *
 * @returns {Array} new array after toggling
 */
function toggleArrayValue(arr, val) {
  const index = arr.indexOf(val);

  if (index === -1) {
    arr.push(val);
  } else {
    arr.splice(index, 1);
  }

  return arr;
}

module.exports = { toggleArrayValue };
