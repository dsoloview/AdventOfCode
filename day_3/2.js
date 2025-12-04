const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split('\n');

function findMaxJoltage(input) {
    let result = 0;

    for (const line of input) {
        let left = 0;
        let limit = 12;
        let res = '';

        while (res.length !== 12) {
            let maxPos = left;

            while (left <= line.length - limit) {
                const num = parseInt(line[left]);
                if (num > line[maxPos]) {
                    maxPos = left;
                }

                left++;
            }

            res += line[maxPos]
            left = maxPos + 1;
            limit--;
        }

        result += parseInt(res)
    }

    return result;
}

console.log(findMaxJoltage(input))