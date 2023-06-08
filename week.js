const readlineSync = require("readline-sync");

let yourNumber = readlineSync.question('Can you give me a number beetween 1 and 7 please?');

if (yourNumber > 7) {
    console.log("What didn't you understood ?");
    yourNumber = readlineSync.question('Can you give me a number beetween 1 and 7 please?');
} else if (yourNumber === 1) {
    console.log("Monday");
} else if (yourNumber === 2) {
    console.log("tuesday");
} else if (yourNumber === 3) {
    console.log("wednesday");
} else if (yourNumber === 4) {
    console.log("thursday");
} else if (yourNumber === 5) {
    console.log("friday");
} else if (yourNumber === 6) {
    console.log("saturday");
} else if (yourNumber === 7) {
    console.log("domingo");
} else {
    console.log("?");
}