import fs from "fs";
const input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split(""));

input.forEach((line, i) => {
    if (i == 0) return;

    line.forEach((char, j) => {
        switch (char) {
            case ".":
                if (["S", "|"].includes(input[i - 1][j])) {
                    line[j] = "|";
                }
                break;
            case "^":
                if (input[i - 1][j] == "|") {
                    line[j - 1] = "|";
                    line[j + 1] = "|";
                }
                break;
        }
    });
});

let sum = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] == "^" && input[i - 1][j] == "|") sum++;
    }
}

console.log(sum);
