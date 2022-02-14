// Main function
const countLetters = function(str) {
  // empty object to store result
  let result = {};

  for (const char of str) {

    if (char === ' ') continue;  // skip space character since we are only counting letters
    if (result[char]) { // check if the key char is added to result or not
      result[char] += 1; // add one count to the already created key value
    } else {
      result[char] = 1; // otherwise create that key and assign initial value of one
    }
  }

  return result;
};

module.exports = countLetters;
