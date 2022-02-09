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

// Actual function
const letterPositions = function(str) {
  let result = {};

  for (let i = 0; i < str.length; i ++) {  // iterate through the string by characters
    if (str[i] !== ' ') {  // skip spaces
      if (result[str[i]]) {  // if array of positions already exist, add the position to the array
        result[str[i]].push(i);
      } else {
        result[str[i]] = [i];   // initilize the key value pair
      }
    }
  }

  return result;
};



// TEST CODE
const result = letterPositions("lighthouse in the house");
assertArraysEqual(result.l, [0]);
assertArraysEqual(result.i, [1, 11]);
assertArraysEqual(result.g, [2]);
assertArraysEqual(result.h, [3, 5, 15, 18]);
assertArraysEqual(result.t, [4, 14]);
assertArraysEqual(result.o, [6, 19]);
assertArraysEqual(result.u, [7, 20]);
assertArraysEqual(result.s, [8, 21]);
assertArraysEqual(result.e, [9, 16, 22]);
assertArraysEqual(result.n, [12]);
