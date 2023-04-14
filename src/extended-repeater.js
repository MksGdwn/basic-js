const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = [];
  let add = []
  let sep = '+';
  let addsep = '|';

  if(options.hasOwnProperty('separator')) {
    sep = options.separator;
  }

  if(options.hasOwnProperty('additionSeparator')) {
    addsep = options.additionSeparator;
  }

  if(options.hasOwnProperty('addition')) {
    add.push('' + options.addition);
  }

  if(options.hasOwnProperty('additionRepeatTimes')) {
    for(let i = 1; i < options.additionRepeatTimes; i++) {
      add.push(add[0]);
    }
  }

  if(options.hasOwnProperty('repeatTimes')) {
    for(let i = 0; i < options.repeatTimes; i++) {
      res.push(str + add.join(addsep));
    }
  } else {
    res.push(str + add.join(addsep));
  }

  return res.join(sep);
}

module.exports = {
  repeater
};
