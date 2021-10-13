var prompt = require("prompt-sync")();

function henkilotiedot(){
    
    var etunimi = prompt("Mikä on sinun etunimi? ");
    var sukunimi = prompt("Mikä on sinun sukunimi? ");
    var ika = prompt("Kuinka vanha olet? ");
    console.log(` Terve, ${etunimi} ${sukunimi}, olet ${ika} vuotias`);
}

henkilotiedot()