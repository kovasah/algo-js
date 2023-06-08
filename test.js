const readlineSync = require("readline-sync");

let minAge = readlineSync.question('Can you give me a minimum age please?');

let currentAge = readlineSync.question('Can you give me your current age please?');

let maxAge = readlineSync.question('Can you give me a maximum age please?');


if ((minAge < currentAge) && (currentAge < maxAge)) {
    console.log("all is good lad");
} else if (minAge > maxAge){
    console.log("you fucked up somewhere idiot!");
}