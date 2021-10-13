function sekunneiksi(){
    var prompt = require("prompt-sync")();

    var tunnit = prompt("Anna tuntien määrä ");
    var minutit = prompt("Anna minuttien määrä ");
    var sekuntit = prompt("Anna sekuntien määrä ");
    var sekunteina = ((tunnit * 3600) + (minutit * 60) + (sekuntit * 1));
    console.log(sekunteina)
    
}
sekunneiksi()