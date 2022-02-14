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

module.exports = flatten;

