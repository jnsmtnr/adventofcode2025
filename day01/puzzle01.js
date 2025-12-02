import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8');

let dial = 50;
let password = 0;

for (const line of input.split("\n")) {
    if (!line) continue;

    const direction = line.slice(0, 1);
    const distance = +line.slice(1);

    if (direction == "L") {
        dial -= distance;

        while (dial < 0) dial += 100;
    } else {
        dial += distance;

        while (dial > 99) dial -= 100;
    }

    if (dial == 0) password++;
}

console.log(password);
