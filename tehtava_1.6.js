var readline = require('readline');

var luku = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

luku.question("Mikä on ikäsi? ",function(answer) { 
    a = answer
    if (a < 18) {
        console.log("Olet alaikainen");
    }   else if (a > 17 && a < 34) {
        console.log("Olet nuori");
    }   else if (a > 33 && a < 51) {
        console.log("Olet keski-ikäinen");
    }   else {
        console.log("Olet vanha");
    }
});   