var prompt = require("prompt-sync")();

function tiedot(){
    
    var syntymavuosi = prompt("Mikä on sinun syntymävuosi? ");
    var suosikkinumero = prompt("Mikä on sinun suosikkinumero? ");
    if (syntymavuosi == 1970 && suosikkinumero == 77){
        console.log(` Olet onnenpekka`);
    }
    
}

tiedot()