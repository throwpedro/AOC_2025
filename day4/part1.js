import fs from 'fs';
import os from 'os'

const readFile = () => {
    const fileData = fs.readFileSync('./day4/input.txt');
    return fileData.toString().split(os.EOL);
}

const surrounding8 = (data, col, row) => {
    const surrounding = [];
    surrounding.push(data[col-1]?.[row-1], data[col-1]?.[row], data[col-1]?.[row+1]);
    surrounding.push(data[col][row-1], data[col][row+1]);
    surrounding.push(data[col+1]?.[row-1], data[col+1]?.[row], data[col+1]?.[row+1]);
    return surrounding;
}

const run = () => {
    const data = readFile();
    console.log(data);
    let valid = 0;
    outer: for (let col = 0; col < data.length; col++) {
        for (let row = 0; row < data[col].length; row++) {
            const surrounding = surrounding8(data, col, row);
            if (surrounding.filter(ch => ch === '@').length < 4 && data[col][row] === '@') {
                valid++;
            }
        }
    }
    console.log(valid);
}

run();