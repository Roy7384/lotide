// Actual function
const letterPositions = function(str) {
  let result = {};

  for (let i = 0; i < str.length; i ++) {  // iterate through the string by characters
    if (str[i] === ' ') continue;   // skip spaces
    if (result[str[i]])    {  // if array of positions already exist, add the position to the array
      result[str[i]].push(i);
      continue;
    }
    result[str[i]] = [i];   // otherwise initilize the key value pair
  }

  return result;
};

module.exports = letterPositions;

