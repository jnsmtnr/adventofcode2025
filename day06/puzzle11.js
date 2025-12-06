import fs from 'fs'
const input = fs.readFileSync('input.txt', 'utf-8')

const lines = input.split('\n').filter(Boolean).map(line => line.match(/\S+/g))

let sum = 0

lines.at(-1).forEach((op, index) => {
    const numbers = []

    for (let i = 0; i < lines.length - 1; i++) {
        numbers.push(+lines[i][index])
    }
    
    sum += numbers.reduce((acc, cur) => op == '*' ? acc * cur : acc + cur)
})

console.log(sum)