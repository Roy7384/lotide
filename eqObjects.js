const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;

