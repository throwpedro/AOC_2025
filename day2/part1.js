import fs from 'fs';

const readFile = () => {
    const file = fs.readFileSync('./day2/input.txt');
    const ranges = file.toString().split(',');
    return ranges;
}

const run = () => {
    const fileData = readFile();
    const data = [];
    fileData.forEach((entry) => {
        const [first, second] = entry.split('-');
        data.push({ first, second });
    });
    let res = 0;
    data.forEach((d) => {
        res += checkDuplicate(d.first, d.second);
    });
    console.log(res);
}

const checkDuplicate = (first, second) => {
    let firstNumber = Number(first);
    let secondNumber = Number(second);
    let res = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        let asStr = i.toString();
        let half = asStr.length / 2;
        if (asStr.substring(0, half) === asStr.substring(half)) {
            res += i;
        }
    }
    return res;
}

run();

