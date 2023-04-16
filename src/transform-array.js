const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const insturction = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  const result = [];
  const clone = arr.slice();
  for(let i = 0; i < clone.length; i++) {
    if(insturction.includes(clone[i])) {
      if(insturction.indexOf(clone[i]) == 0) {
        clone[i + 1] = undefined;
      } else if(insturction.indexOf(clone[i]) == 1) {
        result.pop()
      } else if(insturction.indexOf(clone[i]) == 2) {
        if(i !== clone.length - 1) {
          result.push(clone[i + 1]);
        }
      } else {
        if(i !== 0) {
          result.push(clone[i - 1]);
        }
      }
    } else {
      result.push(clone[i]);
    }
  }

  return result.filter(item => item !== undefined);
}

module.exports = {
  transform
};
