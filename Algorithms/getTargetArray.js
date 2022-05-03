
  //PATTERN2

inputvalue = [1,3,5,6]
target = 5
function myFunction(inputvalue, target) {
    var start = 0;
    var len1 = inputvalue.length - 1;
    var index = Math.floor((len1 - start) / 2) + start;

    if (target > inputvalue[inputvalue.length-1]) {
        index = inputvalue.length;
    }
    else {
        while (start < len1) {
            var value = inputvalue[index];
            if (value === target) {
                result = index;
                break;
            }
            else if (target < value) {
                len1 = index;
            }
            else {
                start = index + 1;
            }
            index = Math.floor((len1 - start) / 2) + start;
        }
    }
    
    return index;
};
console.log(myFunction(inputvalue, target))
