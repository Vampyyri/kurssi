prompt = require("prompt-sync")();

function nimet() {
    
    var nimi = prompt("Anna nimesi: ");

    if ((nimi == Pekka) || (nimi == Liisa) || (nimi == Jorma)) {
            console.log(`Minunkin mielestäni ${nimi} on kiva`);
    }   else {        
            console.log(`En tunne henkilöä`)
    }
}
nimet()