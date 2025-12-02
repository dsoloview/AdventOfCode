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
    let windowSize = 1;

    while (windowSize <= id.length / 2) {
        if (id.length % windowSize !== 0) {
            windowSize++;
        }

        let left = 0;
        let right = windowSize;
        let substring = '';
        let sameCount = 1;

        while (right <= id.length) {
            const newSubstring = id.slice(left, right);
            if (!substring) {
                substring = newSubstring;
            } else {
                sameCount += substring === newSubstring;
            }

            left += windowSize;
            right += windowSize;
        }

        if (sameCount === id.length / windowSize) {
            return parseInt(id);
        }

        windowSize++;
    }


    return 0;
}

function div(val, by) {
    return (val - val % by) / by;
}

console.log(validateIds(input))