//PATTERN2

var array = [8, 1, 2, 2, 3];
let result = [];
function countnum(arr) {
  for (var i = 0; i < arr.length; i++) {
    count = 0;
    for (j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
console.log(countnum(array));