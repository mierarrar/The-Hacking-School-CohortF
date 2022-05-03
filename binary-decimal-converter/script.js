function myFunction() {
        var x = document.getElementById("myText").value;
        function decToBin(num){
            if (num == 0){
                return '';
            }
            return decToBin(Math.floor(num/2)) + (num % 2);
        }
        document.getElementById("demo").innerHTML = decToBin(x);
    }

function myFunction2() {
        var y = document.getElementById("myText2").value;
        function binToDec(num) {
            let dec = 0;
            for (let i = 0; i < num.length; i++) {
                if (num[num.length - (i + 1)] === '1') {
                dec += 2 ** i;
                }
            }
            return dec;
        }
        document.getElementById("demo2").innerHTML = binToDec(y);
    }

function refresh(){
    window.location.reload();
}
