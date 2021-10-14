var prompt = require("prompt-sync")();

function bensa() {
    var L = Number(prompt("Anna litrat: "));
    if (L > 0) {
        var K = Number(prompt("Anna kilometrit: "));
        if (K > 0) {
            sadalla = (L * 100 / K)
            console.log(sadalla)
        }   else  {
                console.log("Virhesyöttö")
        }
    }   else {
            console.log("Virhesyöttö")
    }
    
    
}

bensa()