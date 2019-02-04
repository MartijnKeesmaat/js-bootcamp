const range = (start, end) => {
  let arr = [];
  for (let i = 1; i <= end; i++) {
    arr.push(i);
  }
  return arr
}

const sum = arr => {
  return arr.reduce(reducer)
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;


console.log(sum(range(1, 10)));



// ToDo look at bonus exercise

/*
  As a bonus assignment, modify your range
  function to take an optional third argument that indicates the“ step” value used when building the array.If no step is given, the elements go up by increments of one, corresponding to the old behavior.The
  function call range(1, 10, 2) should
  return [1, 3, 5, 7, 9].Make sure it also works with negative step values so that range(5, 2, -1) produces[5, 4, 3, 2].
*/