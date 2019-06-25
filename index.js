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
    if(callback(arr[i])) {
      filtered[filtered.length] = arr[i];

    }
  }
  return filtered;
}

function reduce(arr, callback) {
  const reduced = [];
  for(let i = 0; i < arr.length; i++) {
    reduced[i] === callback(arr);
  }
  return reduced;
}



module.exports = {
  map,
  filter,
  reduce
};

