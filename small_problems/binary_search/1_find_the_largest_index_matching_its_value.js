/*

  find largest index j such that nums[j] = j
  if no such index exists, return -1

*/

function findLargestIndex(nums) {
  let currLargest = -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === mid) {
      currLargest = mid;
      left = mid + 1;
    } else if (nums[mid] < mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return currLargest;

}

console.log(findLargestIndex([-1, 0, 2, 3]) === 3);
console.log(findLargestIndex([0, 1, 2, 3, 4]) === 4);
console.log(findLargestIndex([-5, 0, 3, 4, 7, 9]) === -1);
console.log(findLargestIndex([-2, 0, 1, 3, 3, 5]) === 5);
console.log(findLargestIndex([0]) === 0);

// All test cases should log true.