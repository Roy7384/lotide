// copy pasted assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {

  // first check if two arrays have the same amount of elements
  if (arr1.length !== arr2.length) {
    return false;
  }
  // compare two arrays element by element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i  ]) return false;
  }

  // if both tests above passed, return true
  return true;
};



// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);