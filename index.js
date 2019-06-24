const numbers = [1, 2, 3, 4];

// created new array from old array
const doubledNumbers = [...numbers];

function map(arr) {
  // loop through the array
  for(let i = 0; i < arr.length; i++ ) {
    // grab each one
    const item = arr[i];
    item * 2;
    console.log(item);
  };
};

console.log(map(numbers));
