sanakirja={ 
    1: "Maanantai", 
    2: "Tiistai", 
    3: "Keskiviikko",
    4: "Torstai", 
    5: "Perjantai", 
    6: "Lauantai",
    7: "Sunnuntai"
};

var readline = require('readline');

var luku = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

luku.question("Anna viikonpäivän numeron: ",function(answer) { 
    console.log(sanakirja[answer]);
});   