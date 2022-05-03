
var getCharCodes = require('./getCharCodes')
var decToBin = require('./decToBin')
var readlineSync = require('readline-sync');

function main() {
    console.log("-------------");
    var options = [
        "Exit the Program:",
        "String to Binary in 8 bit pattern",
        "String to Binary in 16 bit pattern",
    ];
    console.clear();
    options.forEach((elem, index) => {
        console.log(`${index}. ${elem}`);
    });
  }

main();

do {
    var input = readlineSync.questionInt("Enter option : ");
    switch (input) {

            case 0:
                console.log("Alright! Exiting...");
                break;

            case 1:
                
                var string = readlineSync.question("Enter string: ");

                numArray = getCharCodes(string);
                var newArray = numArray.map(decToBin);
                binArray = newArray;

                var paddedArray = binArray.map(padding8);
                function padding8(bit){
                    while(bit.length<8) { 
                        bit = "0" + bit
                        } return bit
                }

                console.log(paddedArray)    
                break;
              
                
            case 2:
                var string = readlineSync.question("Enter String:  ");

                numArray = getCharCodes(string);
                var newArray = numArray.map(decToBin);
                binArray = newArray;

                var paddedArray = binArray.map(padding16);
                function padding16(bit){
                    while(bit.length<16) { 
                        bit = "0" + bit
                        } return bit
                }

                console.log(paddedArray)
                break;

            default:
                console.log("Invalid Input, please try again!");
    }
    if (input != 0) {
            var take = readlineSync.question("Do you want to continue : (y/n)");
    }
} while (take === 'y' || take === 'Y');



