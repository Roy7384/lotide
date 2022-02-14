// main function for map.js
const map = function(arr, calBackFunc) {
  const results = [];
  for (let item of arr) {
    results.push(calBackFunc(item));
  }
  return results;
};

module.exports = map;

