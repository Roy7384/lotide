// actual function
const findKeyByValue = function(obj, str) {
  for (const key in obj) {
    if (str === obj[key]) return key;
  }
};

module.exports = findKeyByValue;
