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

// copy pasted assertArrayEquals
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// Actual function
// helper function to find the middle index or indexes of any array

const findMidIndex = function(arr) {
  let mIndex = Math.floor(arr.length / 2);
  if (arr.length % 2) {
    return [mIndex];
  }
  return mIndex = [mIndex - 1, mIndex];
};

// main function
const middle = function(arr) {

  let result = [];
  if (arr.length - 2 > 0) {
    let midIndex = findMidIndex(arr);
    for (const ind of midIndex) {
      result.push(arr[ind]);
    }
  }

  return result;
};


// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
