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



// Actual function
const eqObjects = function(object1, object2) {
  // get the numbers of keys of both objects
  const obj1Length = Object.keys(object1).length;
  const obj2Length = Object.keys(object2).length;

  if (obj1Length !== obj2Length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) { // if the key value pair to compare has array as value
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue;
    }
    if (typeof object1[key] === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      continue;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

