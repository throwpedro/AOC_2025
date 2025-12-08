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
        for (let i = firstNum; i <= lastNum; i++) {
            allValidIds.push(i);
        }
    });
    return allValidIds;
}

const run = () => {
    const lines = readFile();
    const { validIdRanges, ids } = parseFileData(lines);
    const validIds = Array.from(new Set(buildValidRanges(validIdRanges)));
    let res = 0;
    for (let i = 0; i < ids.length; i++) {
        if (validIds.includes(ids[i])) {
            res++;
        }
    }
    console.log(res);
};

run();