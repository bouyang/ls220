/*
  each pet has appetite and min size of treat of arrays
  pet will be satisfid if the size of the treat is >= appetite level
  maximize number of satisfied pets and output number of satisfied pets at the end

  - sort both arrays
  
  - anchor/runner
  - anchor is pet, runner is treat
  - if treat >= pet:
    - increment one
    - runner and anchor increment
  - if treat < pet, increment runner
  - ends when runner > length
*/

function assignTreats(appetite, treats) {
  let sortedAppetite = appetite.sort((a, b) => a - b);
  let sortedTreats = treats.sort((a, b) => a - b);

  let counter = 0;
  let appetiteIdx = 0;
  let treatIdx = 0;

  while (appetiteIdx < sortedAppetite.length && treatIdx < sortedTreats.length) {
    if (sortedTreats[treatIdx] >= sortedAppetite[appetiteIdx]) {
      counter += 1;
      treatIdx += 1;
      appetiteIdx += 1;
    } else {
      treatIdx += 1;
    }
  }

  return counter;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.