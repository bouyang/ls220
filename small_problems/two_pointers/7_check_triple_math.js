/*

  ordered array nums
  determine whether there are any two distinct elements in the array where one element is 3x the other element

  no filter, map, reduce, find
  no includes, indexOf, lastIndexOf

  create obj where key is number in array and value is 3x that
  iterate through array and if there is a value that corresponds to number, return true
  otherwise, add an entry of key num, value 3x


  anchor/runner
  anchor start, runner start + 1
  if runner = anchor * 3 true
  if runner > anchor * 3, anchor + 1
  else runner + 1
*/

// function checkTripleMatch(nums) {
//   let triplePair = {};

//   for (let idx = 0; idx < nums.length; idx += 1) {
//     if (nums[idx] / 3 in triplePair) {
//       return true;
//     } else {
//       triplePair[nums[idx]] = idx;
//     }
//   }

//   return false;
// }

function checkTripleMatch(nums) {
  let anchor = 0;
  let runner = 1;

  while (runner < nums.length) {
    if (nums[anchor] * 3 === nums[runner]) {
      return true;
    } else if (nums[anchor] * 3 < nums[runner]) {
      anchor += 1;
    } else {
      runner += 1;
    }
  }
  return false;
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.