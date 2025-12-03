import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

let sum = 0;

for (const bank of input.split("\n")) {
    if (!bank) continue;

    let firstMax = 0;
    let firstIndex = 0;

    for (let i = 0; i < bank.length - 1; i++) {
        if (+bank[i] > firstMax) {
            firstMax = +bank[i];
            firstIndex = i;
        }
    }

    let secondMax = 0;

    for (let j = firstIndex + 1; j < bank.length; j++) {
        if (+bank[j] > secondMax) {
            secondMax = +bank[j];
        }
    }

    const joltage = +(firstMax.toString() + secondMax.toString());

    sum += joltage;
}

console.log(sum);
