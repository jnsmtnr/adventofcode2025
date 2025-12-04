import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(Boolean);

let sum = 0;

for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
        if (input[y][x] == ".") continue;

        let adjacent = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i == 0 && j == 0) continue;

                if (input[y + i]?.[x + j] == "@") adjacent++;
            }
        }

        if (adjacent < 4) sum++;
    }
}

console.log(sum);
