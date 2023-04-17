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
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr = n.toString().split('');
  let max = 0;
  let index = 0;

  for(let i = 0; i < arr.length; i++) {
    const copy = arr.slice();
    copy.splice(i, 1);
    const temp = parseInt(copy.join(''));
    if(max < temp) {
      max = temp;
      index = i;
    }
  }
  arr.splice(index, 1)
  return parseInt(arr.join(''));
}

module.exports = {
  deleteDigit
};
