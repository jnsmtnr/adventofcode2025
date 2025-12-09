import fs from "fs";
const input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(Boolean)
    .map((line) => line.match(/\d+/g).map(Number));

const distances = [];

for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        const distance = Math.sqrt(
            Math.pow(input[i][0] - input[j][0], 2) +
                Math.pow(input[i][1] - input[j][1], 2) +
                Math.pow(input[i][2] - input[j][2], 2)
        );

        distances.push([input[i].join(), input[j].join(), distance]);
    }
}

const circuits = [];

for (const [a, b] of distances.toSorted((a, b) => a[2] - b[2])) {
    const filtered = circuits.filter((circuit) => circuit.includes(a) || circuit.includes(b));

    if (filtered.length == 0) {
        circuits.push([a, b]);
    } else {
        if (!filtered[0].includes(a)) filtered[0].push(a);
        if (!filtered[0].includes(b)) filtered[0].push(b);

        if (filtered.length != 1) {
            filtered[1].forEach((box) => {
                if (!filtered[0].includes(box)) filtered[0].push(box);
            });

            circuits.splice(
                circuits.findIndex((c) => c == filtered[1]),
                1
            );
        }

        if (circuits.length == 1 && circuits[0].length == input.length) {
            console.log(+a.match(/\d+/)[0] * +b.match(/\d+/)[0]);
            break;
        }
    }
}
