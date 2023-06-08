const readlineSync = require("readline-sync");

let length = readlineSync.question('Can you give me the lenght of the rectangle please?');

let width = readlineSync.question('Can you give me the width of the rectangle please?');

function calcSurface(length, width) {
    const result = parseInt(length) * parseInt(width);
    console.log(result);
}

calcSurface(length, width)