function subtraction(a, b) {
    console.log("Subtraction");

    var c = [];
    var c1 = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            c1.push(a[i][j] - b[i][j]);
        } 
        c.push(c1.join(" "))
        c1 = [];
    } 
    console.log(c.join(" \n"));  
    
}

module.exports = subtraction;