const readlineSync = require("readline-sync");

let favNumber = readlineSync.question('Can you give me your favorite number please?');

if (favNumber === 42) {
    console.log("good answer");
} else {
    while ((favNumber < 42) || (favNumber > 42)) {
    console.log("are you sure?");
    favNumber = readlineSync.question('Can you give me your favorite number please?');
  }
}

