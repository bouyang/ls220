/*

  given nums, determine min between count of positive integers and count of negative integers
  0 is neither



*/

function minimumCount(nums) {
  let numNegatives = findLastNegative(nums) + 1;
  let numPositives = nums.length - findFirstPositive(nums);

  return Math.min(numNegatives, numPositives);
}

function findLastNegative(nums) {
  let currLast = -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) {
      currLast = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return currLast;
}

function findFirstPositive(nums) {
  let currFirst = nums.length;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > 0) {
      currFirst = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return currFirst;
}


console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.