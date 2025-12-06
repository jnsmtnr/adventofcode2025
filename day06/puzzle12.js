import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(Boolean);

let sum = 0;
let numbers = [];

for (let i = input[0].length - 1; i >= 0; i--) {
    let number = "";

    for (let j = 0; j < input.length - 1; j++) {
        number += input[j][i];
    }

    number = number.trim();

    if (number) {
        numbers.push(+number);
    }

    const operator = input.at(-1)[i].trim();

    if (operator) {
        sum += numbers.reduce((acc, cur) => (operator == "*" ? acc * cur : acc + cur));
        numbers = [];
    }
}

console.log(sum);
