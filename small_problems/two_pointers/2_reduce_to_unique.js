/*
  modify array in place to retain only the distinct elements ensuring that each unique number appears only once
  return the count of the unique elements

  using anchor and runner at 0 and 1
  - if runner is same as anchor, splice it out
  - if runner is not same, increment runner
  - if runner reaches end, increment anchor and set runner to anchor + 1

  - stops when anchor reaches end
*/

// You should name the function `reduceToUnique` for the tests to work correctly.

function reduceToUnique(array) {
  if (array.length <= 1) return 1;

  let anchor = 0;
  let runner = 1;

  while (anchor < array.length - 1) {
    if (array[runner] > array[anchor]) {
      anchor += 1;
      runner = anchor + 1;
    }

    if (array[anchor] === array[runner]) {
      array.splice(runner, 1);
    } else {
      runner += 1;
    }
  }

  return array.length;
}

function testReduceToUnique(array, expectedLength) {
  const originalReference = array;
  const resultLength = reduceToUnique(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array.slice(0, expectedLength).every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testReduceToUnique([3, 3, 5, 7, 7, 8], 4));
console.log(testReduceToUnique([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testReduceToUnique([0], 1));
console.log(testReduceToUnique([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testReduceToUnique([6, 6, 6, 6, 6, 6, 6], 1));

// All tests should log true.