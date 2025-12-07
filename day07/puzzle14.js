import fs from "fs";
const input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split("").map((char) => (char == "." ? 0 : char)));

input.forEach((line, i) => {
    if (i == 0) return;

    line.forEach((char, j) => {
        if (typeof char == "number") {
            if (input[i - 1][j] == "S") {
                line[j] = 1;
            } else if (typeof input[i - 1][j] == "number") {
                line[j] += input[i - 1][j];
            }
        } else if (char == "^") {
            if (input[i - 1][j] > 0) {
                line[j - 1] += input[i - 1][j];
                line[j + 1] += input[i - 1][j];
            }
        }
    });
});

let sum = 0;

for (let i = 0; i < input.at(-1).length; i++) {
    if (typeof input.at(-1)[i] == "number") sum += input.at(-1)[i];
}

console.log(sum);
