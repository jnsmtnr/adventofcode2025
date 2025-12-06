import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

const ranges = [];
let fresh = 0;

for (const line of input.split("\n")) {
    if (!line) continue;

    if (line.includes("-")) {
        ranges.push(line.match(/\d+/g).map(Number));
    } else {
        if (ranges.some((range) => +line >= range[0] && +line <= range[1])) {
            fresh++;
        }
    }
}

console.log(fresh);
