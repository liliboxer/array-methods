const { map, filter } = require('./index');

describe('array-methods', () => {
  it('doubles array', () => {
    const arr = [1, 2, 3];
    const double = map(arr, arr => arr * 2);
    expect(double).toEqual([2, 4, 6]);
  });

  it('includes orange', () => {
    const arr = ['max', 'orange'];
    const filtered = filter(arr, arr => arr.length < 4);
    expect(filtered).toEqual(arr);
  });

});
