const { map, filter, reduce } = require('./index');

describe('array-methods', () => {
  it('doubles array', () => {
    const arr = [1, 2, 3];
    const double = map(arr, arr => arr * 2);
    expect(double).toEqual([2, 4, 6]);
  });

  it('includes orange', () => {
    const arr = ['max', 'orangetabby', 'cat', 'meow', '8', 'maxwell'];
    const filtered = filter(arr, arr => arr.length < 4);
    expect(filtered).toEqual(['max', 'cat', '8']);
  });

  it('add numbers together', () => {
    const arr = [2, 3, 4];
    const reduced = reduce(arr, arr => arr += arr);
    expect(reduced).toEqual([9]);
  });

});
