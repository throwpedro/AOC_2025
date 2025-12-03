import fs from 'fs';

const readFile = () => {
    const fileData = fs.readFileSync('./day3/input.txt');
    return fileData.toString().split('\n');
}

const run = () => {
    const lines = readFile();
    const data = lines.map(line => {
        const arr = line.split('');
        const res = arr.map(entry => Number(entry));
        return res;
    });
    
    let res = 0;
    data.forEach((d) => {
        res += findNums(d);
    });
    console.log(res);
}

const findNums = (nums) => {
    let max = 0;
    let subMax = 0;
    let maxIndex = -1;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }

    for (let i = maxIndex + 1; i < nums.length; i++) {
        if (nums[i] > subMax) {
            subMax = nums[i];
        }
    }
    const resString = max.toString() + subMax.toString();
    return Number(resString);
}

run();