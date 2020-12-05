const fs = require("fs");
const readline = require("readline");

let input = fs.readFileSync("input.txt");
input = input
  .toString()
  .split("\n")
  .map((row) => row.split(""));

input.forEach((row) => {
  row.pop();
});

function getTrees(right, down) {
  let total = 0;
  let current = 0;
  let width = input[0].length;

  for (let i = 0; i < input.length; i += down) {
    if (input[i][current] == "#") {
      total++;
    }
    current += right;

    if (current >= width) {
      current -= width;
    }
  }

  return total;
}

// Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.

// Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.
// In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.

console.log(
  getTrees(1, 1) *
    getTrees(3, 1) *
    getTrees(5, 1) *
    getTrees(7, 1) *
    getTrees(1, 2)
);
