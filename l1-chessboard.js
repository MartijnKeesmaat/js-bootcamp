let str = ``;

function grid(rows) {

  for (var j = 0; j < rows; j++) {

    if (j % 2 === 0) {
      for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) str += ` `
        else str += '#'
      }
    } else if (j % 2 === 1) {
      for (var i = 0; i < 8; i++) {
        if (i % 2 === 1) str += ` `
        else str += '#'
      }
    }

    str += '\n'
  }

  console.log(str);
};

grid(5);