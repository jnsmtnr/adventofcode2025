import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

let ranges = [];

for (const line of input.split("\n")) {
    if (!line) break;

    ranges.push(line.match(/\d+/g).map(Number));
}

let overlap;

do {
    overlap = false;
    const newRanges = [];

    ranges.forEach((range) => {
        if (newRanges.length == 0) {
            newRanges.push(range);
        } else {
            let thisRangeHasOverlap = false;
            newRanges.forEach((newRange, index) => {
                if (
                    (range[0] >= newRange[0] && range[0] <= newRange[1]) ||
                    (range[1] >= newRange[0] && range[1] <= newRange[1]) ||
                    (newRange[0] >= range[0] && newRange[0] <= range[1]) ||
                    (newRange[1] >= range[0] && newRange[1] <= range[1])
                ) {
                    overlap = true;
                    thisRangeHasOverlap = true
                    newRanges[index] = [
                        Math.min(range[0], newRange[0]),
                        Math.max(range[1], newRange[1]),
                    ];
                }
            });
            if (!thisRangeHasOverlap) newRanges.push(range);
        }
    });

    ranges = newRanges;
} while (overlap);

console.log(ranges.reduce((sum, range) => sum += range[1] - range[0] + 1, 0))

