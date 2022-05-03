function diagonal(matrix){
    var n = matrix.length;
    var diag1 = ' ';
    var diag2 = ' ';
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            
            if(i === j) { 
                diag1 += matrix[i][j] + ' ';
            }
            
            if(i + j === n - 1){
                diag2 += matrix[i][j] + ' ';
            }
        }
    } console.log("Primary Diagonal: " + diag1)
    console.log("Secondary Diagonal: " + diag2)
}

module.exports = diagonal;