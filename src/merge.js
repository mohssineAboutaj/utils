/**
 * @function merge a function to merge a groups of values in one array
 *
 * @param  {...any} args any data type to merge in one array
 *
 * @returns Array of merged elements
 */
function merge(...args) {
  let result = [];
  for (el of args) {
    result = result.concat(el);
  }
  return result;
}

module.exports = { merge };
