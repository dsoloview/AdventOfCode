const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split('\n').map((val) => val.trim());

function calculate(input) {
    const actions = input[input.length - 1].split(' ').filter((val) => val !== '');
    input.pop();

    const acc = [];

    for (const line of input) {
        const lineValues = line.split(' ').filter((val) => val !== '')

        for (let i = 0; i < lineValues.length; i++) {
            const num = parseInt(lineValues[i]);

            switch (actions[i]) {
                case '+':
                    acc[i] = (acc[i] || 0) + num;
                    break;
                case '*':
                    acc[i] = (acc[i] || 1) * num;
            }
        }
    }
    return acc.reduce((acc, currentValue) => acc + currentValue, 0)
}

console.log(calculate(input))