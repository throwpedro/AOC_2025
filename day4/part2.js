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
    let data = readFile();
    const newData = [];
    let valid = 0;
    let didASwap;
    do {
        didASwap = false;
        outer: for (let col = 0; col < data.length; col++) {
            let newDataStr = '';
            for (let row = 0; row < data[col].length; row++) {
                const surrounding = surrounding8(data, col, row);
                if (surrounding.filter(ch => ch === '@').length < 4 && data[col]?.[row] === '@') {
                    newDataStr += '.';
                    valid++;
                    didASwap = true;
                } else {
                    newDataStr += data[col]?.[row];
                }
            }
            newData.push(newDataStr);
        }
        data = [...newData];
        newData.length = 0;
    } while (didASwap);
    console.log(valid);
}

run();