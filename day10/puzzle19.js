import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

let sum = 0;

for (const line of input.split("\n")) {
    if (!line) continue;

    const diagram = line.match(/\[([\.#]+)\]/)[1];

    const buttons = Array.from(line.matchAll(/\(([\d,]+)\)/g)).map((match) => match[1].split(",").map(Number));

    let min = Infinity;

    for (let i = 0; i < Math.pow(2, buttons.length); i++) {
        const indicator = new Array(diagram.length).fill(".");

        const combination = i.toString(2).padStart(buttons.length, "0").split("");

        combination.forEach((c, i) => {
            if (c == "0") return;

            buttons[i].forEach((light) => (indicator[light] = indicator[light] == "." ? "#" : "."));
        });

        if (indicator.join("") == diagram) {
            const pressed = combination.reduce((acc, cur) => acc + +cur, 0);

            if (pressed < min) min = pressed;
        }
    }

    sum += min;
}

console.log(sum);
