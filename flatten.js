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

// copy pasted assertArrayEqual function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// actual function
const flatten = function(arr) {
  let result = []; // empty array to store result

  // iterate through arr
  for (const elem of arr) {

    // if the element of arr is an array, merge it to the result array
    if (Array.isArray(elem)) {
      result = result.concat(elem);
      continue;
    }

    // otherwise just add that element
    result.push(elem);
  }

  return result;
};



// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, []]), [1, 2, 3, 4, 5]);
