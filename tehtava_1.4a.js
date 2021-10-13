function hours(){
    var readline = require('readline');

    var tunnit = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    tunnit.question("Anna tuntien määrää: ",function(answer) { 
        mins()   
    });   
}


function mins(){
    var readline_m = require('readline');

    var minutit = readline_m.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    minutit.question("Anna minuttien määrää: ",function(answer) { 
        secs()  
    });   
}

function secs(){
    var readline_s = require('readline');

    var sekuntit = readline_s.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    sekuntit.question("Anna sekuntien määrää: ",function(answer) { 
        console.log(answer)  
    });   
}
