import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

let sum = 0;

for (const range of input.trim().split(",")) {
    const [start, end] = range.match(/\d+/g).map(Number);

    for (let i = start; i <= end; i++) {
        const id = i.toString();

        if (id.length % 2 == 1) continue;

        const first = id.slice(0, id.length / 2);
        const second = id.slice(id.length / 2);

        if (first == second) sum += i;
    }
}

console.log(sum);
