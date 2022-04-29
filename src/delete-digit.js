const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(num) {
   let arrayNum = [];
   for (let i = 0; i < num.toString().length; i++) {
     let arr = Array.from(num.toString());
     arr.splice(i, 1);
     arrayNum.push(Number(arr.join('')));
  }
  arrayNum.sort((a, b) => {
    return b - a;
  });
  return arrayNum[0];
}

module.exports = {
  deleteDigit
};
