var prompt = require("prompt-sync")();

function yksi(){
    
    var luku = prompt("Syötä ykkösen: ");
    if (luku != 1) {
        console.log("Syöte ei ole 1");
    }
    
}

yksi()