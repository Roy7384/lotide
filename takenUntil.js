
// actual takeUntil function
const takeUntil = function(arr, callback) {
  let result = [];
  for (const item of arr) {
    if (callback(item)) break;
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;

