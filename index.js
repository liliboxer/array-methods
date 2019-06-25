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

function findByIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      return i;
    } else {
      return -1;
    }
  }
}




// function reduce(arr, callback) {
//   let reduced;
//   for(let i = 0; i < arr.length; i++) {
//     reduced = callback(arr[i]);
//   }
//   return reduced;
// }

// const reduced = reduce(arr, (acc, x) => acc + x);





module.exports = {
  map,
  filter,
  findByIndex,
  // reduce
};

