const readlineSync = require("readline-sync");

let answers = {
    name: "idk",
    productionYear: 'idk',
    casting: [],
}

function askTvSerie() {
    let ansName = readlineSync.question('Can you give me the name of your favorite serie please?');
    answers.name = ansName;
    let ansyear = readlineSync.question('Can you give me the production year of your favorite serie please?');
    answers.productionYear = ansyear;
    let ansCast = readlineSync.question('Can you give me an actor of your favorite serie please?');
    answers.casting.push(ansCast);
    let ansCast2 = readlineSync.question('Can you give me an other actor of your favorite serie please?');
    answers.casting.push(ansCast2);
    
    while (ansCast2 != "") {
         ansCast2 = readlineSync.question('Can you give me an other actor of your favorite serie please?');
    answers.casting.push(ansCast2);
    }

    console.log(answers);    
}

askTvSerie();

function randomizeCast(tvSerie) {
    
}