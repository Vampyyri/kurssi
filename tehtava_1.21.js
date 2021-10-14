prompt = require("prompt-sync")();

function nimet() {
    
    var nimi = prompt("Anna nimesi: ");

    switch(nimi) {
        case "Pekka":
            console.log(`Minunkin mielestäni Pekka on kiva`);
            break;
        case "Liisa":
            console.log(`Minunkin mielestäni Liisa on kiva`);
            break;
        case "Jorma":
            console.log(`Minunkin mielestäni Jorma on kiva`);
            break;
        default:
            console.log(`En tunne henkilöä`)
    }
}
nimet()