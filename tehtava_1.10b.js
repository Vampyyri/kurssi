
var prompt = require("prompt-sync")();

function sum(){
    
    var a = -1;
    while (a < 0) {
        a = Number(prompt("Anna positiivinen luku A: "));
        if (a < 0) {
            console.log("Luku ei ole positiivinen")
        }
    }
    var b = -1;
    while (b < 0) {  
        b = Number(prompt("Anna positiivinen luku B: "));
        if (b < 0) {
            console.log("Luku ei ole positiivinen")
        }
    }   
    
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