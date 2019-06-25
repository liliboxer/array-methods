function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]);
  }
  return mapped;
}

function filter(arr, callback) {
  const filtered = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) filtered[filtered.length] = arr[i];
  }
  return filtered;
}

function findByIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) return i;
  }
  return -1;
}

function reduce(arr, callback) {
  let reduced = arr[0];
  for(let i = 1; i < arr.length; i++) {
    reduced = callback(reduced, arr[i]);
  }
  return reduced;
}

function every(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
  return true;
  
}

module.exports = {
  map,
  filter,
  findByIndex,
  reduce,
  every
};

