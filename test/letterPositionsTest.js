const {assert} = require('chai');
const letterPositions = require('../letterPositions');

describe('letterPositions test', () => {

  it('should return an object with letter as key and their positions in the string as value', () => {
    const result = letterPositions("lighthouse in the house");
    const expected = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    assert.deepEqual(result, expected);
  });

});