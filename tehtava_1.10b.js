var prompt = require("prompt-sync")();

function sum(){
    
    var a = Number(prompt("Anna luku A: "));
    var b = Number(prompt("Anna luku B: "));
    if (b > a) {
        for (var i = a; i < (b + 1); i++){
            lukuvali.push(i);
        }
    }   else {
        for (var i = b; i < (a + 1); i++){
            lukuvali.push(i);
        }
    }
    
    var summa = lukuvali.reduce(function(sum, current) {
        return sum + current;
      }, 0);
    return summa
}
var lukuvali = [];
console.log(sum())
