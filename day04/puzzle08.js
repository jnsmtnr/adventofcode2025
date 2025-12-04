import fs from "fs";
let input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(Boolean);

let sum = 0;
let removed = 0;

do {
    removed = 0;
    const newInput = [];
    for (let y = 0; y < input.length; y++) {
        let newLine = "";
        for (let x = 0; x < input[y].length; x++) {
            if (input[y][x] == ".") {
                newLine += ".";
                continue;
            }

            let adjacent = 0;

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i == 0 && j == 0) continue;

                    if (input[y + i]?.[x + j] == "@") adjacent++;
                }
            }

            if (adjacent < 4) {
                removed++;
                newLine += ".";
            } else {
                newLine += "@";
            }
        }
        newInput.push(newLine);
    }
    input = newInput;
    sum += removed;
} while (removed);

console.log(sum);
