// copy pasted assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// TEST CODE
const testStr = 'hello world';
const result = countLetters(testStr);

assertEqual(result['h'], 1);
assertEqual(result['e'], 1);
assertEqual(result['l'], 3);
assertEqual(result['o'], 2);
assertEqual(result['r'], 1);
assertEqual(result['d'], 1);