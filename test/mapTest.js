const {assert} = require('chai');
const map = require('../map');

describe('map test', ()=>{

  const words = ["ground", "control", "to", "major", "tom"];
  const expectedResult = ['g', 'c', 't', 'm', 't'];
  const callB = function(word) {
    return word[0];
  };

  it('should work when using an arrow function as callback function', () => {
    const results = map(words, word => word[0]);
    assert.deepEqual(results, expectedResult);
  });

  it('should work when use inline function declaration as callback', () => {
    const results = map(words, function(word) {
      return word[0];
    });
    assert.deepEqual(results, expectedResult);
  });

  it('should work when use variable that contain function as callback parameter', ()=>{
    const results = map(words, callB);
    assert.deepEqual(results, expectedResult);
  });

});