/*
  given sentence str
  reverse all chars in each word of the the sentence. Case remains same
  Spaces remain same
  Overall order of words not altered
  Do not use reverse method

  iterate through each word (map)
  pass each word through reverse function
  - reverse function will use start/end
  - start/end reverse positions
  - increment start, decrement end
  - stop when start > end
*/

function reverseWords(str) {
  return str.split(' ').map(word => reverseWord(word)).join(' ');
}

function reverseWord(word) {
  let start = 0;
  let end = word.length - 1;
  word = word.split('');

  while (start < end) {
    [word[start], word[end]] = [word[end], word[start]];
    start += 1;
    end -= 1;
  }

  return word.join('');
}


console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");