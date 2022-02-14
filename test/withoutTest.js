const {assert} = require('chai');
const without = require('../without');

describe('without test', ()=> {

  it('should not modify the original array', ()=>{
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

  it('should return an array with elements thats in the second parameter removed from first parameter', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('should work with mix data types in the array', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('should work with second parameter as empty array', () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });

  it('should return an empty array when all elements is removed from first parameter', () => {
    assert.deepEqual(without([1, 2, 3], [3, 2, 1]), []);
  });

});