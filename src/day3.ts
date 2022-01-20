
// --- Day 3: Binary Diagnostic ---
import fs from 'fs';


const BinaryDiagnostic = (filePath: string): void => {

    // --- Part One ---

    const data: Array<string> = fs.readFileSync(filePath, 'utf8').replace(/\r/g, "").split(/\n/);

    const arr: Array<number> = [];
    
    data[0].split('').forEach(() => {
        arr.push(0)
    })
    
    for (let i = 0; i < data.length; i++) {
        data[i].split('').forEach((ele, index) => {
            if (+ele === 1) arr[index] += 1;
        });
    };
    
    const gamma_rate: Array<number> = arr.map((ele) => {
        return ele > (data.length / 2) ? 1 : 0
    });
    
    const epsilon_rate: Array<number> = gamma_rate.map((ele) => {
        return ele === 0 ? 1 : 0
    });
    
    console.log(`Your puzzle answer was ${parseInt(gamma_rate.join(''), 2) * parseInt(epsilon_rate.join(''), 2)}`);
    
    // --- Part Two ---

};


export default BinaryDiagnostic;
