//PATTERN3

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,23,97];

function primenumber(n) {
    for (let i = 2; n > i; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return n > 1;
  }
  
console.log(arr.filter(primenumber))