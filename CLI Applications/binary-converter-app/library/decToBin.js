numArray = [99,44,22]
/*
function decToBin(numArray){
var newArray = numArray.map(decToBinArray);
function decToBinArray(num){
    if (num == 0){
        return '';
    }
    
    return decToBinArray(Math.floor(num/2)) + (num % 2);
}
console.log(newArray) }

//decToBin()
*/

var newArray = numArray.map(decToBin);
function decToBin(num){
    if (num == 0){
        return '';
    }
    
    return decToBin(Math.floor(num/2)) + (num % 2);
}

console.log(newArray)
module.exports = decToBin;
