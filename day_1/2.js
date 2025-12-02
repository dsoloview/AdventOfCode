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
        let zeros = 0;

        if (direction === 'L') {
            const pointer = currentPointer - steps;
            if (pointer <= 0) {
                zeros = div(pointer * -1, 100) + 1;

                if (currentPointer === 0) {
                    zeros -= 1;
                }
            }
            currentPointer = (currentPointer - (steps % 100) + 100) % 100;
        } else {
            const pointer = currentPointer + steps;
            if (pointer >= 100) {
                zeros = div(pointer, 100);
            }
            currentPointer = (currentPointer + (steps % 100)) % 100;
        }

        zerosCount += zeros;
    }

    return zerosCount;
}

function div(val, by) {
    return (val - val % by) / by;
}

console.log(calculatePassword(input))