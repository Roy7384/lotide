const {assert} = require('chai');
const countOnly = require('../countOnly');

describe('countOnly test', () => {

  it('should return the count of elements in an array according to the rules set out in an object', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const expectedResult = {
      Jason: 1,
      Fang: 2
    };
    assert.deepEqual(result, expectedResult);
  });

});