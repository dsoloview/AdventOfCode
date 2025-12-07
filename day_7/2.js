const fs = require('node:fs');

const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split('\n');

function calculateTimelines(input) {
    const len = input[0].length;

    let pathsAtColumn = new Array(len).fill(0);

    for (let i = 0; i < len; i++) {
        if (input[0][i] === 'S') {
            pathsAtColumn[i] = 1;
            break;
        }
    }
    for (let row = 0; row < input.length; row++) {
        const line = input[row];
        let nextPathsAtColumn = new Array(len).fill(0);

        for (let col = 0; col < len; col++) {
            const currentPaths = pathsAtColumn[col];

            if (currentPaths === 0) {
                continue;
            }

            const char = line[col];

            if (char === '^') {
                nextPathsAtColumn[col - 1] += currentPaths;
                nextPathsAtColumn[col + 1] += currentPaths;
            } else {
                nextPathsAtColumn[col] += currentPaths;
            }
        }

        pathsAtColumn = nextPathsAtColumn;
    }

    return pathsAtColumn.reduce((sum, count) => sum + count, 0);
}

console.log(calculateTimelines(input))