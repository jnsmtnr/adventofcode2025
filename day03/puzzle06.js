import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

let sum = 0;

for (const bank of input.split("\n")) {
    if (!bank) continue;

    let joltage = ''
    let startIndex = 0

    for (let i = 0; i < 12; i++) {
        let max = 0
        let index = 0

        for (let j = startIndex; j < bank.length - (11 - i); j++) {
            if (+bank[j] > max) {
                max = +bank[j]
                index = j
            }
        }

        joltage += max.toString()
        startIndex = index + 1
    }

    sum += +joltage
}

console.log(sum);
