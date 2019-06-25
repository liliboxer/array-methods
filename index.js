
function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]);
  }
  return mapped;
};

function filter(arr, callback) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
  
    
  }
}

module.exports = {
  map,
  filter
}

