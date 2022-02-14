// Actual function
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // empty object to store result
  const results = {};

  for (const item of allItems) { // Access the Boolean value of the key item in itemsToCount
    if (itemsToCount[item]) { // it above Boolean value is true, add and start counting of that item
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};


module.exports = countOnly;