var addition = require('./addition.js');
var subtraction = require('./subtraction.js');
var diagonal = require('./diagonal.js');
var transpose = require('./transpose.js');
var creatematrix = require('./creatematrix.js');
var clr = require("cli-color");

var readlineSync = require('readline-sync');
function main() {
    console.log("-------------");
    var options = [
        "Exit the Program",
        "Matrix Addition",
        "Matrix Subtraction",
        "Matrix Diagonal",
        "Matrix Transpose",
    ];
    console.clear();
    options.forEach((elem, index) => {
        console.log(`${index}. ${elem}`);
    });
  }

main();

do {
    var input = readlineSync.questionInt("Enter Your Option : ");
    switch (input) {

            case 0:
                console.log(clr.red("Alright! Exiting..."));
                break;

            case 1:
                
                var row1 = readlineSync.questionInt("How many rows would you like your first matrix to have? ");
                var col1 = readlineSync.questionInt("How many columns would you like your first matrix to have? ");
                var matrix1 = creatematrix(row1, col1);
                
                var row2 = readlineSync.questionInt("How many rows would you like your second matrix to have?  ");
                var col2 = readlineSync.questionInt("How many rows would you like your second matrix to have?  ");
                var matrix2 = creatematrix(row2, col2);
            
                addition(matrix1, matrix2);
                break;
              
                

            case 2:
                var row1 = readlineSync.questionInt("How many rows would you like your second matrix to have?  ");
                var col1 = readlineSync.questionInt("How many columns would you like your first matrix to have? ");
                var matrix1 = creatematrix(row1, col1);
                
                var row2 = readlineSync.questionInt("How many rows would you like your second matrix to have?  ");
                var col2 = readlineSync.questionInt("How many columns would you like your second matrix to have? ");
                var matrix2 = creatematrix(row2, col2); 
            
                subtraction(matrix1, matrix2);
                break;

            case 3:

                var row = readlineSync.questionInt("How many rows would you like your matrix to have? ");
                var col = readlineSync.questionInt("How many columns would you like your matrix to have? ");
                var matrix = creatematrix(row, col);
                
                diagonal(matrix);
                break;

            case 4:
                
                var row = readlineSync.questionInt("How many rows would you like your matrix to have? ");
                var col = readlineSync.questionInt("How many columns would you like your matrix to have? ");
                var matrix = creatematrix(row, col);

                transpose(matrix);
                break;

            default:
                console.log(clr.yellowBright("Bad Input, please try again!"));
    }
    if (input != 0) {
            var take = readlineSync.question("Do you want to continue : (y/n)");
    }
} while (take === 'y' || take === 'Y');
