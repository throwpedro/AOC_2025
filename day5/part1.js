import fs from 'fs';
import os from 'os';

const readFile = () => {
    const fileHandle = fs.readFileSync('./day5/input.txt');
    return fileHandle.toString().split(os.EOL);
};

const parseFileData = (lines) => {
    const validIdRanges = [];
    const ids = [];
    lines.forEach(line => {
        if (line.trim().length > 0) {
            if (line.includes('-')) {
                validIdRanges.push(line);
            } else {
                ids.push(Number(line));
            }
        }
    });
    return { validIdRanges, ids };
}

const buildValidRanges = (rangeStrings) => {
    const allValidIds = [];
    rangeStrings.forEach((string) => {
        const [first, last] = string.split('-');
        const firstNum = Number(first);
        const lastNum = Number(last);
        allValidIds.push({ first: firstNum, last: lastNum });
    });
    return allValidIds;
}

const run = () => {
    const lines = readFile();
    const { validIdRanges, ids } = parseFileData(lines);
    const validIds = Array.from(new Set(buildValidRanges(validIdRanges)));
    let res = 0;
    for (let i = 0; i < ids.length; i++) {
        let cur = ids[i];
        for (let j = 0; j < validIds.length; j++) {
            if (cur >= validIds[j].first && cur <= validIds[j].last) {
                res++;
                break;
            }
        }
    }
};

run();