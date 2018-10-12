// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 01 reverse
// function palindrome(str) {
//   let string = str;
//   return string.split('').reverse().join('') == str;
// }

// 02 for loop
// function palindrome(str) {
//   for(let i = 0; i < str.length/2; i++) {
//     if(str[i] !== str[str.length-i-1])return false;
//   }
//   return true;
// }

// 03 every
function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - 1 -i]);
}

palindrome('appa')

module.exports = palindrome;
