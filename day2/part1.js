import fs from 'fs';

const readFile = () => {
    const file = fs.readFileSync('./input.txt');
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
    data.forEach((d) => {
        checkDuplicate(d.first, d.second);
    })
}

const solve = (data) => {

}

// 123123
const checkDuplicate = (number1, number2) => {
    for (let i = number1; i <= number2; i++) {
        let curNum = i;
        let left = curNum.toString();
        let right = (curNum + 1).toString();
        if (left !== right) {
            right++;
        } else {
            left++;
            right++;
        }
    }
}

run();

