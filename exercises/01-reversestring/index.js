// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 01 solution
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// 02 for loop
// function reverse(str) {
//   var reversed = '';
  
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// 03 use reduce
function reverse(str) {
  debugger;
  return str.split('').reduce((accu, curr) => curr + accu, '');
}

reverse('abc ')

module.exports = reverse;
