/*
Write a function that pairs the first number in an array with the last, second to second last and so on. Notes: If array length is odd, pair the middle element twice. Return empty array if input is empty
Input -> [5,6,7,8,9]
O/p [[5,9],[6,8],[7,7]
Input -> [1,2,3,4]
O/p [[1,4],[2,3]]
Input -> []
O/p []*/

arr = [5,6,7,8,9];
function soln(arr){
    for(var i = 0; i < arr.length / 2; i++){
        console.log(arr[i], arr[arr.length - 1 - i]);
    } 
} 
soln([5,6,8,9]);