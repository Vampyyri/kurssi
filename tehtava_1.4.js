var prompt = require("prompt-sync")();

function sekunneiksi(){
    
    var tunnit = prompt("Anna tuntien määrä ");
    var minutit = prompt("Anna minuttien määrä ");
    var sekuntit = prompt("Anna sekuntien määrä ");
    var sekunteina = ((tunnit * 3600) + (minutit * 60) + (sekuntit * 1));
    console.log(sekunteina)
    
}

function euroksi(){

    var syote_markat = prompt("Anna rahoen määrä markoissa ");
    //  1 euro = 5,94573 markkaa
    var x = (5.94573)
    
    var euroksi = (syote_markat / x).toFixed(2)
    console.log(` ${syote_markat} markaa on ${euroksi} euroa`);

}

sekunneiksi()
euroksi()