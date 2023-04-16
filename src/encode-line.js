const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const arr = str.split('');
  let result = '';
  let count = 0;
  let value = '';
  
  for(let i = 0; i < arr.length; i++) {
    if(i == 0) {
      value = arr[i];
      count++;
    } else if(arr[i] == arr[i - 1]) {
      count++;
    } else {
      if(count > 1) {
        result += count + value;
      } else {
        result += value;
      }
      count = 1;
      value = arr[i];
    }
  }
  
  if(count > 1) {
    result += count + value;
  } else {
    result += value;
  }
  
  return result;
}

module.exports = {
  encodeLine
};
