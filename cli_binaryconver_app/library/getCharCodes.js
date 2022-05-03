
function getCharCodes(string){
    let charArr = [];
    
    for(let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i);
        charArr.push(code);
    }
    return charArr;
} 

//console.log(getCharCodes("ff"))
module.exports = getCharCodes;