/*

  ascending order of array of nums
  count number of pairs in array whose sum is > target

  start/end

  if start + end sum > target, record that pair and decrement end
    if not, increment start
  ends when start = length - 1

*/

function countPairs(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let count = 0;

  while (start < end) {
    if (nums[start] + nums[end] > target) {
      count += end - start;
      end -= 1;
    } else {
      start += 1;
    }
  }

  return count;
}

console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs