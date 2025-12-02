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
        if (item.dir === 'L') {
            if (pos === 0) {
                // don't count zeros twice if the 'dial' ended on a zero.
                zeroTally += Math.floor((item.rotas - pos) / 100);
            } else {
                zeroTally += Math.floor((item.rotas - pos) / 100) + 1;
            }
            pos = ((pos - item.rotas) % 100 + 100) % 100;
        } else {
            zeroTally += Math.floor((item.rotas + pos) / 100);
            pos = ((pos + item.rotas) % 100);
        }
    });
    return zeroTally;
}

run();
