const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split('\n');

function countForklifts(input) {
    let result = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (input[row][col] === '@') {
                let count = 0;
                for (let y = -1; y <= 1; y++) {
                    for (let x = -1; x <= 1; x++) {

                        if (!input[row + y] || !input[row + y][col + x]) {
                            continue;
                        }

                        if (y === x && x === 0) {
                            continue;
                        }

                        if (input[row + y][col + x] === '@') {
                            count++;
                        }
                    }
                }

                if (count < 4) {
                    result++;
                }
            }
        }
    }

    return result;
}

console.log(countForklifts(input))