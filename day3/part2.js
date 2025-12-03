import fs from 'fs';

const readFile = () => {
    const fileData = fs.readFileSync('./day3/input.txt');
    return fileData.toString().split('\n');
}

const run = () => {
    const lines = readFile();
    const data = lines.map(line => {
        const arr = line.trim().split('');
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
    let bank = [...nums];
    let jolts = 0;

    for (let index = 0; index < 11; index++) {
        let end = index - 11;
        let slice = bank.slice(0, end);

        let digit = Math.max(...slice);

        bank = bank.slice(bank.indexOf(digit) + 1);
        jolts = (jolts * 10) + digit;
    }

    jolts = (jolts * 10) + Math.max(...bank);
    return jolts;
};


run();