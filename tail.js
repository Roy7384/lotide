// function copied from assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

// actual tail function
const tail = function(arr) {
  return arr.slice(1);
};


// Test code to see if tail function modified original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test code to see if the tail function works
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: An array with only one element
const result2 = tail(["Hello"]);
assertEqual(result2.length, 0); // ensure we get back an empty array

// Test Case 3: An empty array
const result3 = tail([]);
assertEqual(result3.length, 0); // ensure we get back an empty array