const fs = require("fs");

let input = fs.readFileSync("input.txt");
input = input
  .toString()
  .split("\n")
  .map((row) => row.split("\r"));

input.forEach((row) => {
  row.pop();
});

input.pop();

for (let i = 0; i < input.length; i++) {
  input[i].push(input[i][0].slice(7));
  input[i][0] = input[i][0].slice(0, 7);
}

//F = lower half
//B = Upper half

let rowArr = [];
let colArr = [];
for (let i = 0; i < input.length; i++) {
  let max = 128;
  let min = 0;
  for (let char of input[i][0]) {
    if (char == "F") {
      max = (max + min) / 2;
    } else {
      min = (min + max) / 2;
    }
  }
  rowArr.push(min);

  let colmax = 8;
  let colmin = 0;
  for (let char of input[i][1]) {
    if (char == "L") {
      colmax = (colmax + colmin) / 2;
    } else {
      colmin = (colmin + colmax) / 2;
    }
  }
  colArr.push(colmin);
}

let result = 0;
for (let i = 0; i < rowArr.length; i++) {
  if (result < rowArr[i] * 8 + colArr[i]) {
    result = rowArr[i] * 8 + colArr[i];
  }
}

console.log(result);
