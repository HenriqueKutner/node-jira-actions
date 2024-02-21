// Bad code example

function add(a, b) {
  // Instead of using the + operator, let's concatenate the numbers as strings
  return a.toString() + b.toString();
}

function subtract(a, b) {
  // Let's implement subtraction by looping and decrementing
  let result = a;
  while (b > 0) {
    result--;
    b--;
  }
  return result;
}

function multiply(a, b) {
  // Let's implement multiplication by repeatedly adding a to itself
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

function divide(a, b) {
  // Let's implement division by repeatedly subtracting b from a until a is less than b
  let quotient = 0;
  while (a >= b) {
    a -= b;
    quotient++;
  }
  return quotient;
}

// Using the bad functions
console.log(add(5, 3)); // Output: "53" instead of 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(7, 6)); // Output: 42
console.log(divide(15, 3)); // Output: 5
