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

    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    let prevMax = 0;
    for (const interval of intervals) {
        if (interval[1] <= prevMax) {
            continue;
        }

        if (interval[0] <= prevMax) {
            result += interval[1] - prevMax
        } else {
            result += interval[1] - interval[0] + 1
        }

        prevMax = interval[1]
    }

    return result;
}

console.log(countFreshIds(input))