const fs = require('node:fs');


const data = fs.readFileSync('input.txt', 'utf8');
const input = data.split('\n');

function calculatePassword(input) {
    let zerosCount = 0;
    let currentPointer = 50;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        const direction = element[0];
        const steps = parseInt(element.slice(1), 10);

        if (direction === 'L') {
            currentPointer = (currentPointer - (steps % 100) + 100) % 100;
        } else {
            currentPointer = (currentPointer + (steps % 100)) % 100;
        }

        if (currentPointer === 0) {
            zerosCount += 1;
        }
    }

    return zerosCount;
}

console.log(calculatePassword(input))