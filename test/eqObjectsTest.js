const {assert} = require('chai');
const eqObjects = require('../eqObjects');

describe('eqObjects test', () => {
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it('should return true when pass in two equal objects', () => {
    assert.isTrue(eqObjects(cd, dc));
  });

  it('should return false when pass in two different object', () => {
    assert.isFalse(eqObjects(cd, cd2));
  });

  it('should return true when pass two equal object with nested object', () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it('should return false when pass in two different nested objects', () => {
    assert.isFalse(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }));
  });

});