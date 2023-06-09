const readlineSync = require("readline-sync");

function rand100() {
    return Math.floor((Math.random() * 100) + 1);
}

const resultRand = rand100();

let entree = readlineSync.question('Guess the number');

if (entree < resultRand || entree > resultRand) {
    while (entree < resultRand) {
    console.log("too low");
    entree = readlineSync.question('Guess the number');
    }

    while (entree > resultRand) {
        console.log("too high");
        entree = readlineSync.question('Guess the number');
    }
}

if (entree == resultRand) {
    console.log("well done");
}

