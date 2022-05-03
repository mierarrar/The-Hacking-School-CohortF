/*
Calculate the total volume of all boxes combined. Each box is represented by three dimensions which have length, width and height. First calculate the volume of individual boxes and add them all together to get the result.
Input -> [[1,2,3],[6,7,8],[10,2,3]]
O/p -> 402
	In this instance, volume of each boxes is calculated and added   to get the final output,(1*2*3) + (6*7*8) + (10*2*3) 
Input -> [[1,1,2], [2,2,2]]
O/p -> 10*/

arr1 = [[1,2,3],[6,7,8],[10,2,3]]
function volume(arr){
    var product, sum = 0;

    for(var i = 0; i < arr.length; i++){
        product = 1;
        for( var j = 0; j < arr.length; j++){
            product *= arr[i][j];
        } 
        sum += product;
    } return sum;
}
console.log(volume(arr1));