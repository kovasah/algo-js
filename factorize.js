const num = 5;

function factorial(a) {
    if (a < 0) 
        return -1;
  else if (a == 0) 
      return 1;
  else {
      return (a * factorial(a - 1));
  }
}

console.log(factorial(num));