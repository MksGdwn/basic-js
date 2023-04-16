const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  const obj = {};

  domains.forEach(domain => {
    const arr = domain.split('.').reverse();
    for(let i = 0; i < arr.length; i++) {
      let prop = '';
      for(let j = 0; j <= i; j++) {
        prop += '.' + arr[j];
      }
      if(obj.hasOwnProperty(prop)) {
        obj[prop]++;
      } else {
        obj[prop] = 1;
      }
    }
  })

  return obj;
}

module.exports = {
  getDNSStats
};
