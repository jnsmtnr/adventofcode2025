import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8');

let dial = 50;
let password = 0;

for (const line of input.split("\n")) {
    if (!line) continue;

    const direction = line.slice(0, 1);
    let distance = +line.slice(1);

    const multiple = Math.floor(distance / 100)
    password += multiple
    distance = distance - (multiple * 100)

    if (direction == "L") {
        if (dial == 0) {
            dial -= distance;

            if (dial < 0) {
                dial += 100
            }
        }
        else {
            dial -= distance;
            
            if (dial == 0) password++

            if (dial < 0) {
                dial += 100;
                password++;
            }
        }

    } else {
        dial += distance;

        if (dial > 99) {
            dial -= 100;
            password++;
        }
    }
}

console.log(password);
