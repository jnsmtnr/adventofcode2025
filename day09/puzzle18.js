import fs from "fs";
const input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(Boolean)
    .map((line) => line.match(/\d+/g).map(Number));

const perimeter = [];

for (let i = 0; i < input.length; i++) {
    const [x1, y1] = input[i];
    const [x2, y2] = input[(i + 1) % input.length];

    perimeter.push([x1, y1, x2, y2]);
}

let max = 0;

for (let i = 0; i < input.length - 1; i++) {
    loop: for (let j = i + 1; j < input.length; j++) {
        const [x1, y1] = input[i];
        const [x2, y2] = input[j];

        for (const [px1, py1, px2, py2] of perimeter) {
            if (px1 == px2) {
                if (px1 > Math.min(x1, x2) && px1 < Math.max(x1, x2)) {
                    if (
                        !(
                            (py1 <= Math.min(y1, y2) && py2 <= Math.min(y1, y2)) ||
                            (py1 >= Math.max(y1, y2) && py2 >= Math.max(y1, y2))
                        )
                    ) {
                        continue loop;
                    }
                }
            } else {
                // py1 == py2
                if (py1 > Math.min(y1, y2) && py1 < Math.max(y1, y2)) {
                    if (
                        !(
                            (px1 <= Math.min(x1, x2) && px2 <= Math.min(x1, x2)) ||
                            (px1 >= Math.max(x1, x2) && px2 >= Math.max(x1, x2))
                        )
                    ) {
                        continue loop;
                    }
                }
            }
        }

        const area = (Math.abs(x1 - x2) + 1) * (Math.abs(y1 - y2) + 1);

        if (area > max) max = area;
    }
}

console.log(max);
