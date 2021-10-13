states_dictionary={ 
    1:["Maanantai"], 
    2:["Tiistai"], 
    3:["Keskiviikko"]
    4:["Torstai"], 
    5:["Perjantai"], 
    6:["Lauantai"],
    7:["Sunnuntai"]
};

var readline = require('readline');

var luku = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

luku.question("Anna viikonpäivän numeron: ",function(answer) { 
    a = answer
    if (a > 100) {
        console.log("Syötit luvun, joka on suurempi kuin 100");
    }   else if (a < 100) {
        console.log("Syötit luvun, joka on pienempi kuin 100");
    }  else {
        console.log("Luku on 100");
    }
});   