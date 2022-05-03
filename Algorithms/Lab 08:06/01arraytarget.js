/*
Create a function that returns true if smaller arrays can concatenate to form the target array.
Notes: Arrays do not have to be sorted, Array should concatenate to create the final array exactly.
Input -> [[5,6,7], [8,9], [10]], target = [5,6,7,8,9,10])
Output ->  true
*/

arr = [[5,6,7], [8,9], [10]];
target = [5,6,7,8,9,10]
function istarget(arr, target){
    let flattenedArray = arr.flat(1);
    return flattenedArray.sort().join("") === target.sort().join("");
}
console.log(istarget(arr, target))