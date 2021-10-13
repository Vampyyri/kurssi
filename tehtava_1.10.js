function lukuja(){
    for (var i = 7; i < 132; i++){
        luvut.push(i);
    }
}

function summa(lista){

    var result = lista.reduce(function(sum, current) {
        return sum + current;
      }, 0);
    return result
}

var luvut = [];
lukuja()
var sum = summa(luvut)
console.log(sum)