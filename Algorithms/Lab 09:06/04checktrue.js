/*
Check if all values are true
[1,2,3,4,5,true]
O/p -> true
["","hello","hi"]
O/p-> false
[true,false,true]
O/p-> false
*/
arr = [1,2,3,4,5,true]
function checktrue(arr){
    for(var i = 0; i < arr.length; i++){
        if(!arr[i]){
            return false;
        }
    }
    return true;
}

console.log(checktrue(arr));