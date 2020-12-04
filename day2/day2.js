const fs = require("fs");
const readline = require("readline");

const readInterface = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  output: process.stdout,
  console: false,
});

// let result = 0;
//part 1
// readInterface.on("line", function (line) {
//   let splitline = line.split(" ");
//   let minmax = splitline[0];
//   minmax = minmax.split("-");
//   let min = minmax[0];
//   let max = minmax[1];
//   let letterCheck = splitline[1][0];
//   let input = splitline[2];

//   let count = 0;

//   for (let char of input) {
//     if (char === letterCheck) {
//       count++;
//     }
//   }

//   if (count >= min && count <= max) {
//     result++;
//     console.log(result);
//   }
// });

//part 2

let result = 0;
readInterface.on("line", function (line) {
  let splitline = line.split(" ");
  let minmax = splitline[0];
  minmax = minmax.split("-");
  let index1 = minmax[0] - 1;
  let index2 = minmax[1] - 1;
  let letterCheck = splitline[1][0];
  let input = splitline[2];
  let count = 0;

  if (input[index1] == letterCheck) {
    if (input[index2] != letterCheck) {
      result++;
      console.log("yes");
    }
  } else {
    if (input[index2] == letterCheck) {
      result++;
      console.log("yes");
    }
  }
  console.log(result);
});
