const eqArrays = function(arr1, arr2) {
  
  // first check if two arrays have the same amount of elements
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  // compare two arrays element by element
  for (let i = 0; i < arr1.length; i++) {
    
    // if the element is an sub aray, compare them recursively
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      continue;
    }
    if (arr1[i] !== arr2[i]) return false;
  }
  
  // if both tests above passed, return true
  return true;
};

module.exports = eqArrays;