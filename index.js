const numbers = [1, 2, 3];

function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]);
    // console.log('mapped', callback(arr[i]));
  }
  return mapped;
}

const double = map(numbers, arr => arr * 2);
// console.log(double);

///


const test = ['max', 'orange', 'budd', 'black'];

function filter(arr, callback) {
  const filtered = [];
  for(let i = 0; i < arr.length; i++) {
    filtered[i] = callback(arr[i]);
    console.log('filtered', callback(arr[i]));
  }
  return filtered;
}

const filtered = filter(test, arr => arr.length < 4);
console.log(filtered);

module.exports = {
  map,
  filter
};

