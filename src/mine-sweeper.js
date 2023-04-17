const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = [];

  for(let i = 0; i < matrix.length; i++) {
    let arr = [];
    for(let j = 0; j < matrix[i].length; j++) {
      arr.push(0);
    }
    result.push(arr);
  }

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j]) {
        addOne(i, j, result);
      }
    }
  }

  return result;
}

function addOne(x, y, arr) {
  for(let i = x - 1; i <= x + 1; i++) {
    for(let j = y - 1; j <= y + 1; j++) {
      if(i < 0 || j < 0 || i >= arr.length || j >= arr.length[i]) {
        continue;
      }
      if(i == x && j == y) {
        continue;
      }
      arr[i][j]++;
    }
  }
}

module.exports = {
  minesweeper
};
