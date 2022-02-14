const {assert} = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue test', () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('should return the key according to the value passed', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined when the value is not in the object', ()=>{
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});