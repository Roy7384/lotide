// copy pasted eqArrays function
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

// Actual funciton
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); //should show passed
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //should show failed
assertArraysEqual([1, 2, 3], [1, 2]); //should show failed
assertArraysEqual([], [1, 2, 3]); //should show failed