//PATTERN3

const arr = [3, 7, 3, 5, 4, 3];
var isoddcons = function(arr) {
    for (var i = 0; i < arr.length-2; i++) {
  
      if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
        return true;
      }
    }
    return false;
  }
  console.log(isoddcons(arr));
  
