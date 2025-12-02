import fs from 'fs';

const run = () => {
    const lines = readFile();
    const data = [];
    lines.forEach(line => {
        data.push({dir: line[0], rotas: Number(line.slice(1))});
    });
    const res = rotate(data);
    console.log(res);
}

const readFile = () => {
    const fileData = fs.readFileSync('input.txt');
    return fileData.toString().split('\n');
}

const rotate = (data) => {
    let pos = 50; // always start at 50
    let zeroTally = 0;
    data.forEach(item => {
        if (item.dir === 'R') {
            pos = (pos + item.rotas) % 100;
        } else if (item.dir === 'L') {
            pos = ((pos - item.rotas) % 100 + 100) % 100;
        }
        if (pos === 0) {
            zeroTally++;
        }
    });
    return zeroTally;
}

run();