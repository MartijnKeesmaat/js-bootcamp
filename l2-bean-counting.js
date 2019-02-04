function countBs(str) {
  let bCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[bB]/)) {
      bCount++
    }
  }
  return bCount
}

console.log(countBs("BBC"));


function countChar(str, char) {
  let charCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char) {
      charCount++
    }
  }
  return charCount
}

console.log(countChar('BBC', 'c'));