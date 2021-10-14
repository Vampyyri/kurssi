var prompt = require("prompt-sync")();

function indeksi() {
    
    var paino = Number(prompt("Paino (kg): "));
    var pituus = 3;
    while (pituus > 2) {
        var pituus = Number(prompt("Pituus (m): "))
        if (pituus > 2) {
            console.log("Onko se metreinä?")
        }
    }
    var painoindeksi = (paino / (pituus ** 2)).toFixed(2)
    console.log(`Painoindeksi on ${painoindeksi}`);
        
}

indeksi()