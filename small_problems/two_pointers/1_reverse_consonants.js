/*

  reverse only the consonants; can be upper or lowercase and preserve case

  - one pointer beginning, one pointer end
  - if both consonants, then swap
    - increment left by 1, decrement right by 1
  - if one is consonant, preserve position and move other
  - stop when left and right positions cross (left >= right)

*/


function reverseConsonants(str) {
  str = str.split('');
  let start = 0;
  let end = str.length - 1;
  let consonantRegex = /[^aeiou]/i;

  while (start < end) {
    if (consonantRegex.test(str[start]) && consonantRegex.test(str[end])) {
      [str[start], str[end]] = [str[end], str[start]];
      start += 1;
      end -= 1;
    } else if (consonantRegex.test(str[start])) {
      end -= 1;
    } else if (consonantRegex.test(str[end])) {
      start += 1;
    } else {
      start += 1;
      end -= 1;
    }
  }

  return str.join('');
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("hello") === "lelho");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true