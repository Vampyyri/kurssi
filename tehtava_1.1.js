var readline = require('readline');

var luku = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

luku.question("Anna kokonaisluku: ",function(answer) { 
    a = answer
    if (a > 100) {
        console.log("Syötit luvun, joka on suurempi kuin 100");
    }   else {
        console.log("");
    }
});   





