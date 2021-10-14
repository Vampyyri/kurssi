function totuus() {

    var A = "Pekka on vakosamettihousuinen mies";
    A == true;
    var B = "Rauni ei ole vihainen";
    B == true;
    var C = "Harri on yhdeksän";
    C == true;
    var D = "Sataa";
    D == true;

    if (!D || !C && !B == true) {
        console.log("(!D || !C && !B) is true")
    } else {
        console.log("(!D || !C && !B) is false")
    }

    if (D && !B || !A == true) {
        console.log("(D && !B || !A) is true")
    } else {
        console.log("(D && !B || !A) is false")
    }

    if ((!D || A) == true) {
        console.log("(!D || A) is true")
    } else {
        console.log("(!D || A) is false")
    }

    if ((B && !A) == true) {
        console.log("(B && !A) is true")
    } else {
        console.log("(B && !A) is false")
    }

    if (((D && !B || !A) || (!D || A)) == true){
        console.log("(D && !B || !A) || (!D || A) is true")
    } else {
        console.log("(D && !B || !A) || (!D || A) is false")
    }

    if ((!(!C && !B) && (!D || B)) == true) {
        console.log("!(!C && !B) && (!D || B)) is true")
    } else {
        console.log("(!(!C && !B) && (!D || B)) is false")
    }



}


totuus()