//PATTERN1
const arr = [3, 7, 3, 5, 4, 3];
len1 = arr.length;

count = 0;
function myFunction(arr) {
    return arr.filter((a, b) => arr.indexOf(a) === b)}
len2 = myFunction(arr).length;

count = len1 - len2
console.log(myFunction(arr));
console.log('Number of elements removed: ' + count)
