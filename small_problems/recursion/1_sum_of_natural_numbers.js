/*
  sum of first n natural numbers
  natural num is a positive integer starting from 1
*/

function sumOfNaturalNumbers(n) {
  if (n <= 0) {
    return 0;
  }

  return n + sumOfNaturalNumbers(n - 1);
}

console.log(sumOfNaturalNumbers(1) === 1);
console.log(sumOfNaturalNumbers(5) === 15);
console.log(sumOfNaturalNumbers(10) === 55);
console.log(sumOfNaturalNumbers(20) === 210);
console.log(sumOfNaturalNumbers(0) === 0);

// All test cases should log true.