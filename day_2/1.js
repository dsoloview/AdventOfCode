const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

// const data = '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124';
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