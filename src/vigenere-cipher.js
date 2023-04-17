const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(status = true) {
    this.status = status;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }

  encrypt(str, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(str == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }

    const strArr = str.toLowerCase().split('');
    const keyArr = key.toLowerCase().split('');
    let result = '';
    let count = 0;

    for(let i = 0; i < strArr.length; i++) {
      if(this.alphabet.includes(strArr[i])) {
        const first = this.alphabet.indexOf(strArr[i]);
        const second = this.alphabet.indexOf(keyArr[count % keyArr.length]);
        const index = (first + second) % this.alphabet.length;
        result += this.alphabet[index].toUpperCase();
        count++;
      } else {
        result += strArr[i];
        continue;
      }
    }

    if(this.status) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }

  decrypt(str, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(str == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }

    const strArr = str.toLowerCase().split('');
    const keyArr = key.toLowerCase().split('');
    let result = '';
    let count = 0;

    for(let i = 0; i < strArr.length; i++) {
      if(this.alphabet.includes(strArr[i])) {
        const first = this.alphabet.indexOf(strArr[i]);
        const second = this.alphabet.indexOf(keyArr[count % keyArr.length]);
        let value = first - second;
        if(value < 0) {
          value += 26;
        }
        const index = value % this.alphabet.length;
        result += this.alphabet[index].toUpperCase();
        count++;
      } else {
        result += strArr[i];
        continue;
      }
    }

    if(this.status) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
