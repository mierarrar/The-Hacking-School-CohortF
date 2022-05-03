var readlineSync = require('readline-sync');
function creatematrix(row, col) {
    var result = [];
    for (var i = 0; i < row; i++) {
      result.push([]);
    }
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < col; j++) {
        result[i][j] = readlineSync.questionInt(`Enter values in ${i} and ${j}? `);
      }
    }
    return result;
  }
module.exports = creatematrix;

