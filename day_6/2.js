const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split('\n');

function calculate(input) {
    const actions = input[input.length - 1].split(' ').filter((val) => val !== '');
    input.pop();

    const colAcc = [];

    for (let l = 0; l < input.length; l++) {
        const line = input[l];

        for (let c = 0; c < line.length; c++) {
            const char = line[c];

            if (char !== " ") {
                colAcc[c] = (colAcc[c] || '') + char;
            } else if (!colAcc[c]) {
                    colAcc[c] = ' ';
            }
        }
    }

    const acc = [];
    let currPos = 0;
    let spaces = false;

    for (const val of colAcc) {
        if (val === ' ' && !spaces) {
            currPos++;
            spaces = true;
        }
        spaces = false;

        const numVal = parseInt(val);
        switch (actions[currPos]) {
            case '+':
                acc[currPos] = (acc[currPos] || 0) + numVal;
                break;
            case '*':
                acc[currPos] = (acc[currPos] || 1) * numVal;
        }
    }

    return acc.reduce((acc, currentValue) => acc + currentValue, 0)
}

console.log(calculate(input))