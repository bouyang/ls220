/*

  nested array matrix
  each subarray is sorted in ascending order
  first ele of each subarray is larger than final ele of preceding subarray

  given integer target exists within nested array

  O(log(M*N))

  search for which subarray
  search within subarray

*/

function findInNestedArray(matrix, target) {
  let leftSA = 0;
  let rightSA = matrix.length - 1;

  while (leftSA <= rightSA) {
    let midSA = Math.floor((leftSA + rightSA) / 2);

    if (target >= matrix[midSA][0] && target <= matrix[midSA][matrix[midSA].length - 1]) {
      return searchSA(matrix[midSA], target);
    } else if (target >= matrix[midSA][0]) {
      leftSA = midSA + 1;
    } else {
      rightSA = midSA - 1;
    }
  }

  return false;
}

function searchSA(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.