const assert = require('chai').assert;
const tail = require('../tail');

describe('tail.js test', ()=> {

  it('should not modify original array', ()=>{
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });

  it('should return the array without the head', ()=>{
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('should return an empty array when passed an array with one element', ()=>{
    const result = tail(["Hello"]);
    assert.strictEqual(result.length, 0);
  });

  it('should return an empty array when passed an empty array', ()=>{
    const result = tail([]);
    assert.strictEqual(result.length, 0);
  });

});