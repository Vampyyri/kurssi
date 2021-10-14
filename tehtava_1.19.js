var prompt = require("prompt-sync")();

function algoritmi(){
    
    var asteikko = prompt("Anna asteikko: ");
    if ((asteikko === "C")  || (asteikko ==="c") || (asteikko === "F") || (asteikko === "f")) {
        var lukema = Number(prompt("Anna lukema: "));
            if (lukema <= 100 && lukema > -101) {
                if (asteikko === "C" || asteikko === "c")  {
                    lukema = (9 / 5 * lukema + 32)
                }   else {
                    lukema = 5 / 9 * (lukema - 32)
                }
                console.log(lukema)
            } else {
                console.log("Lukema virhellinen")
            }
        
    } else {
        console.log("Asteikko tuntematon")
    }
    
}

algoritmi()