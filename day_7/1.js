const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split('\n');

function calculateSplits(input) {
    let result = 0;
    const state = new Array(input[0].length).fill(false)

    for (const line of input) {
        for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (char === 'S') {
                state[i] = true;
            }

            if (char === '^' && state[i]) {
                state[i] = false;
                result++;
                if (i - 1 >= 0) {
                    state[i - 1] = true;
                }
                if (i + 1 < line.length) {
                    state[i + 1] = true;
                }
            }
        }
    }
    return result;
}

console.log(calculateSplits(input))