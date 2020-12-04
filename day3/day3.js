const fs = require("fs");
const readline = require("readline");

const readInterface = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  output: process.stdout,
  console: false,
});

let result = 0;
let step = 0;
readInterface.on("line", function (line) {
  let field = line.split("");
  if (step > field.length - 1) {
    step -= field.length;
  }

  if (field[step] == "#") {
    result++;
  }
  step += 3;

  console.log(result);
});
