// let arrNumbers = [1, 2, 3, 4, 5].reduce((partSum, a) => partSum + a, 0);
// console.log(arrNumbers);

// let arrNumbers2 = [100, 101, 102].reduce((partSum, a) => partSum + a, 0);
// console.log(arrNumbers2);

// function average(array) {
//     return array.reduce((x,y) => x+y)/array.length
// }

// console.log(average([1,2,3,4,5]))

let arrayTest = [];

arrayTest.push(1, 2, "Hello!", 3);

let arrayCopy = [...arrayTest];

console.log(arrayCopy);
