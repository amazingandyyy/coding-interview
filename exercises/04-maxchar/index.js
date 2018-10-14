// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = {};
  let max = 0;
  let result = '';
  for(let s of str) {
    map[s]= map[s]+1 || 1

    if(map[s]>max) {
      result=s
      max=map[s]
    }
  }
  return result;
}

console.log(maxChar('abcccccccd'));

module.exports = maxChar;
