/*
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/

let arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
];

const flatten = arr => {
  return arrays.reduce(reducer);
}

const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

/*
Accumulator
The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied 
*/

console.log(flatten(arrays));