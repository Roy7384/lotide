const {assert} = require('chai');
const takenUntil = require('../takenUntil');

describe('takenUntil test', () => {

  it('should return an array thats tested by callback, it won\'t contain any element after the callback return true', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takenUntil(data1, x => x < 0);
    assert.deepEqual(results1,[ 1, 2, 5, 7, 2 ]);
  });

  it('same test as above only difference is an array with strings as element is passed', () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takenUntil(data2, x => x === ',');
    assert.deepEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

});