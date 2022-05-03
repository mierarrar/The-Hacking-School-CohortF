function transpose(matrix){
    matrixnew = [];

    for (var i = 0; i < matrix.length; i++){
        matrixnew.push([]);
    };

    for (var i = 0; i < matrix.length; i++){
        for (var j = 0; j < matrix.length; j++){
            matrixnew[j].push(matrix[i][j]);
        }
    }; console.log(matrixnew.join(" \n"))
}


module.exports = transpose;