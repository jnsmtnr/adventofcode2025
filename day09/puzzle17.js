import fs from "fs";
const input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(Boolean)
    .map((line) => line.match(/\d+/g).map(Number));

let max = 0;

for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        const area = (Math.abs(input[i][0] - input[j][0]) + 1) * (Math.abs(input[i][1] - input[j][1]) + 1);

        if (area > max) max = area;
    }
}

console.log(max);
