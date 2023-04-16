const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const min = s1.length > s2.length ? s2.split('') : s1.split('');
  const max = s1.length > s2.length ? s1.split('') : s2.split('');
  let res = 0;

  for(let i = 0; i < min.length; i++) {
    if(max.includes(min[i])) {
      res++;
      max.splice(max.indexOf(min[i]), 1);
    }
  }

  return res;
}

module.exports = {
  getCommonCharacterCount
};
