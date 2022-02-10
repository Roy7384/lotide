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

// copy pasted assertArrayEqual funciton
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};


// data from assignment
const words = ["ground", "control", "to", "major", "tom"];
// main function for map.js
const map = function(arr, calBackFunc) {
  const results = [];
  for (let item of arr) {
    results.push(calBackFunc(item));
  }
  return results;
};

//TEST CODE
//arrow function as callback
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

//inline function  declaration used in map
const results2 = map(words, function(word) {
  return word[0];
});
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']);

// assigned function to variable, use that variable as callback
const callB = function(word) {
  return word[0];
};
const results3 = map(words, callB);
assertArraysEqual(results3, ['g', 'c', 't', 'm', 't']);