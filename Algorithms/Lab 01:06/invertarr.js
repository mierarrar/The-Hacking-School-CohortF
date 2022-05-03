//PATTERN1
var arr = [[1,1,0],[1,0,1],[0,0,0]];

var newarr = []
for (var i = 0; i < arr.length; i++){
    ireverse = arr[i].reverse();
    newarr.push(ireverse);
}

function invert(newarr){
    for(let i=0;i<newarr.length;i++)
    {
            for(let j=0;j<newarr[i].length;j++) 
            {
                
             if(newarr[i][j]==0) 
             { 
                     newarr[i][j]=1;
             }
             else{
                     newarr[i][j]=0; 
             }
            }
    }
     return newarr;
} 

console.log(invert(newarr))
