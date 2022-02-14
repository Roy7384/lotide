const { assert } = require('chai');
const head = require('../head');

describe('#head', ()=>{
  
  it('should return 1 for [1, 2, 3]', ()=>{
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return '5' for ['5']", ()=> {
    assert.strictEqual(head(['5']), '5');
  });

  it('should return 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("should return 'hello' for ['hello', 'lighthouse', 'labs']", () => {
    assert.strictEqual(head(['hello', 'lighthouse', 'labs']), 'hello');
  });

  it('should return 2 for [2]', () => {
    assert.strictEqual(head([2]), 2);
  });

  it('should return undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });
});