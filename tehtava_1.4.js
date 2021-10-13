var prompt = require("prompt-sync")();

function sekunneiksi(){
    
    var tunnit = prompt("Anna tuntien määrä ");
    var minutit = prompt("Anna minuttien määrä ");
    var sekuntit = prompt("Anna sekuntien määrä ");
    var sekunteina = ((tunnit * 3600) + (minutit * 60) + (sekuntit * 1));
    console.log(sekunteina)
    
}

function euroksi(x){

    var syote_markat = prompt("Anna rahoen määrä markoissa ");
    //  1 euro = 5,94573 markkaa
    
    
    var euroksi = (syote_markat / x).toFixed(2)
    console.log(` ${syote_markat} markaa on ${euroksi} euroa`);

}

function markoiksi(x){

    var syote_eurot = prompt("Anna rahoen määrä eurossa ");
    var markoiksi = (syote_eurot * x).toFixed(2)
    console.log(` ${syote_eurot} euroa on ${markoiksi} markaa`);
}

sekunneiksi()
//  1 euro = 5,94573 markkaa
var kurssi = 5.94573
euroksi(kurssi)
markoiksi(kurssi)