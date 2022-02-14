// Actual function
const without = function(sourceArr, itemsToRm) {
  
  let result = []; // empty array to store the result

  // iterate through sourceArr, if the element shows up in itemsToRm, add to the result array
  for (const elem of sourceArr) {
    if (!itemsToRm.includes(elem)) {
      result.push(elem);
    }
  }

  return result;
};

module.exports = without;
