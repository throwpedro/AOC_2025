import fs from 'fs';
import os from 'os';

const readFile = () => {
    const fileData = fs.readFileSync('./day6/input.txt');
    const lines = fileData.toString().split(os.EOL);
    return lines;
}

const run = () => {
    const lines = readFile();
    const splitLines = [];    
    for (let i = 0; i < lines.length; i++) {
        splitLines.push(lines[i].trim().split(/\s+/));
    }

    const problems = [];
    for (let i = 0; i < splitLines[0].length; i++) {
        let cur = {};
        for (let j = 0; j < 5; j++) {
            let isLast = j === 4;
            if (!isLast) {
                cur[`num${j}`] = Number(splitLines[j][i]);
                splitLines[j]
            } else {
                cur.operator = splitLines[j][i];
            }
        }
        problems.push(cur);
    }
    
    let totalRes = 0;
    problems.forEach((p) => {
        const operator = p.operator
        let res = 0;
        delete p.operator;
        Object.values(p).forEach((val, index) => {
            if (operator === '*') {
                if (index === 0) {
                    res = 1;
                }
                res *= val;
            }
            else if (operator === '+') {
                res += val;
            }
        });
        totalRes += res;
    });
    console.log(totalRes);
}

run();