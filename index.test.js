const { map, 
  filter, 
  findByIndex, 
  reduce, 
  every } = require('./index');

describe('array-methods', () => {
  it('doubles array', () => {
    const arr = [1, 2, 3];
    const double = map(arr, arr => arr * 2);
    expect(double).toEqual([2, 4, 6]);
  });

  it('words less than 4 characters', () => {
    const arr = ['max', 'orangetabby', 'cat', 'meow', '8', 'maxwell'];
    const filtered = filter(arr, arr => arr.length < 4);
    expect(filtered).toEqual(['max', 'cat', '8']);
  });

  it('returns index of found item', () => {
    const arr = [4, 319, 92, 76];
    const index = findByIndex(arr, arr => arr > 90);
    expect(index).toEqual(1);
  });

  it('add numbers together', () => {
    const arr = [2, 3, 4];
    const reduced = reduce(arr, (acc, x) => acc + x);
    expect(reduced).toEqual(9);
  });

  it('returns false', () => {
    const arr = [1, 2, -3, 4];
    const value = every(arr, arr => arr > 1);
    expect(value).toEqual(false);
  });

});
