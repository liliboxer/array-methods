const { map } = require('./index');

describe('array-methods', () => {
  it('doulbes array', () => {
    const arr = [1, 2, 3];
    const double = map(arr, arr => arr * 2);
    expect(double).toEqual([2, 4, 6]);
  });
});
