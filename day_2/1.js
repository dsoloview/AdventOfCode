const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split(',');
function validateIds(input) {
    let invalidSum = 0;
    for (const pairs of input) {
        const ids = pairs.split('-');
        const left = ids[0];
        const right = ids[1];

        for (let i = parseInt(left); i <= parseInt(right); i++) {
            invalidSum += validateId(String(i))
        }
    }

    return invalidSum;
}

function validateId(id) {
    let invalidSum = 0;
    if (id.length % 2 !== 0) {
        return invalidSum;
    }

    if (id.length === 2) {
        return id[0] === id[1] ? parseInt(id) : 0;
    }

    let left = div(id.length, 2) - 1;
    let right = id.length - 1;

    while (id[left] === id[right]) {
        if (left === 0) {
            invalidSum += parseInt(id);
        }
        right--;
        left --;
    }

    return invalidSum;
}

function div(val, by) {
    return (val - val % by) / by;
}

console.log(validateIds(input))