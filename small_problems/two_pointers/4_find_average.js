/*
  given array of nums and integer k
  computer the average val of the subarray of length k => array of those averages

  window of size k, find sum, then map the average
  next, increment window to add right window and subtract current left for new sum
  repeat until right window > length
*/

function findAverages(nums, k) {
  let left = 0;
  let right = k - 1;
  let sum = 0;

  for (let idx = left; idx <= right; idx += 1) {
    sum += nums[idx];
  }

  let result = [sum / k];

  while (right < nums.length - 1) {
    sum -= nums[left];
    left += 1;
    right += 1;
    sum += nums[right];
    result.push(sum / k);
  }

  return result;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]