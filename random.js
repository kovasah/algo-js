const readlineSync = require("readline-sync");

const entree = readlineSync.question('Can you give me a number please?');

const n = Number(entree);

let arrRand = [];

function rand10() {
    return Math.floor((Math.random() * 10) + 1);
}



function multiRand(n) {
    while (arrRand.length < n) {
        rand10();
        const pipu = rand10();
        arrRand.push(pipu);
    }
    console.log(arrRand);
}

multiRand(n);

function average(array) {
    return array.reduce((x,y) => x+y)/array.length;
}

function min(array) {
    return Math.min(...array);
}

function max(array) {
    return Math.max(...array);
}

console.log(average(arrRand));

console.log(min(arrRand));

console.log(max(arrRand));

