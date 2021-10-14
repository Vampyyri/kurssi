var prompt = require("prompt-sync")();

function vuodet() {
    
    var vuosi = Number(prompt("Vuosiluku: "));
    if (vuosi % 4 == 0 && (vuosi % 100 != 0) || (vuosi % 400 == 0)) {
        console.log("On")
    } else {
        console.log("Ei")
    }


}

vuodet()