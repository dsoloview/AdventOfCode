const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

// const data = "987654321111111\n" +
//     "811111111111119\n" +
//     "234234234234278\n" +
//     "818181911112111";

const input = data.split('\n');

function findMaxJoltage(input) {
    let result = 0;

    for (const line of input) {
        let left = line.length - 2;
        let right = line.length - 1;
        let maxLeft = line[left];
        let maxRight = line[right];

        while (left >= 0) {
            const leftVal = line[left];

            if (leftVal >= maxLeft) {
                if (maxLeft > maxRight) {
                    maxRight = maxLeft;
                }
                maxLeft = leftVal;
            }

            left--;
        }

        result += parseInt(`${maxLeft}${maxRight}`)
    }

    return result;
}

console.log(findMaxJoltage(input))