const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split('\n');

function countFreshIds(input) {
    let result = 0;
    const intervals = [];
    let emptyIndex = input.findIndex((el) => el === "")

    for (let i = 0; i < emptyIndex; i++) {
        intervals.push(input[i].split("-").map((el) => parseInt(el)))
    }

    for (let i = emptyIndex + 1; i < input.length; i++) {
        const num = parseInt(input[i]);

        for (const interval of intervals) {
            if (num >= interval[0] && num <= interval[1]) {
                result++;
                break;
            }
        }
    }

    return result;
}

console.log(countFreshIds(input))