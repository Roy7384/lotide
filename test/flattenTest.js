const {assert} = require('chai');
const flatten = require('../flatten');

describe('flatten test', () => {

  it('should return a single level array when pass a nested array', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('should return a single level array when pass a nested array with empty array as element', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, []]), [1, 2, 3, 4, 5]);
  });


});
