const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let sum = 0;
  for (i of array) {
    for(element of i) {
      if (element === '^^') {
        sum++;
      }
    }
  }
  return sum;
}

module.exports = {
  countCats
};
