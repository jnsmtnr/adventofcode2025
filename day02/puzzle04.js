import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

let sum = 0;

for (const range of input.trim().split(",")) {
    const [start, end] = range.match(/\d+/g).map(Number);

    numbers: for (let i = start; i <= end; i++) {
        const id = i.toString();

        for (let j = 1; j <= id.length / 2; j++) {
            if (id.length % j != 0) continue;

            const slices = [];

            for (let k = 0; k < id.length; k += j) {
                slices.push(id.slice(k, k + j));
            }

            if (slices.reduce((acc, cur, _, array) => acc === true ? cur == array[0] : false, true)) {
                sum += i
                continue numbers
            }
        }
    }
}

console.log(sum);
