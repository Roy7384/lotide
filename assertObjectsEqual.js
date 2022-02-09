// copy pasted assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// copy pasted eqObjects function
const eqObjects = function(object1, object2) {
  // get the numbers of keys of both objects
  const obj1Length = Object.keys(object1).length;
  const obj2Length = Object.keys(object2).length;

  if (obj1Length !== obj2Length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) { // if the key value pair to compare has array as value
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


// Actual function
const inspect = require('util').inspect;  // import util library's inspect function

const assertObjectEqual = function(actual, expected) {

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// TEST CODE
assertObjectEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectEqual({ a: '2', b: 2 }, { b: 2, a: '1' });