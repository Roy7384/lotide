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

module.exports = middle;

