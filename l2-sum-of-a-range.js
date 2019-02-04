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