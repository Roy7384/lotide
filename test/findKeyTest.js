const {assert} = require('chai');
const findKey = require('../findKey');

describe('findKey test', ()=> {

  it('should return the key when the passed callback funtion return true', () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.strictEqual(result, 'noma');
  });

});