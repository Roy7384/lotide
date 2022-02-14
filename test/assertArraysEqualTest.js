const assertArraysEqual = require('../assertArraysEqual'
);
// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); //should show passed
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //should show failed
assertArraysEqual([1, 2, 3], [1, 2]); //should show failed
assertArraysEqual([], [1, 2, 3]); //should show failed