const {assert} = require('chai');
const countLetters = require('../countLetters');

describe('countLetters test', ()=>{

  it('should return an object contain count of all letters in the string passed', () => {
    const testStr = 'hello world';
    const actualObj = countLetters(testStr);
    const expectedObj = {
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      r: 1,
      d: 1,
      w: 1
    };
    assert.deepEqual(actualObj, expectedObj);
  });

});