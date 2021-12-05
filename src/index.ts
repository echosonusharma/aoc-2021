// --- Day 1: Sonar Sweep ---

import fs from 'fs';

const SonarSweep = (filepath : string) : void => {
    try {
        if (!filepath) throw new Error("No file path found!");

        const data: Array<string> = fs.readFileSync(filepath, 'utf8').replace(/\r/g, "").split(/\n/);
  
        // --- Part One ---

        let num: number = 0;

        data.forEach((val: string, i: number) => {
            if (+val > +data[i - 1]) num += 1;
        });
    
        console.log(`there are ${num} measurements that are larger than the previous measurement.`);

        // --- Part Two ---
        
        let num1: number = 0;
        
        data.forEach((val: string, i: number) => {
            const sum: number = +val + +data[i + 1] + +data[i + 2];
            const sum1: number = +data[i + 1] + +data[i + 2] + +data[i + 3];

            if (!isNaN(sum) || !isNaN(sum1)) {
                if (sum < sum1) num1 += 1;
            };
        });

        console.log(`there are ${num1} sums that are larger than the previous sum.`);   
        
    } catch (error) {
        console.log(error);
    }
};

// SonarSweep('inputs/day-1.txt');


// --- Day 2: Dive! ---


interface movementTypeInterface {
    horizontal: number,
    dept: number
};

const Dive = (filepath: string) : void => {
    try {
        const data: Array<string> = fs.readFileSync(filepath, 'utf8').replace(/\r/g, "").split(/\n/);
        
        // --- Part One ---

        const movement_types: movementTypeInterface = {
            horizontal: 0,
            dept: 0
        };
            
        data.forEach((val: string) => {
            const values: Array<string> = val.split(' ');
            values[0] === 'forward' && (movement_types.horizontal += +values[1]);
            values[0] === 'down' && (movement_types.dept += +values[1]);
            values[0] === 'up' && (movement_types.dept -= +values[1]);
        });

        console.log(`After following these instructions, you would have a horizontal position of ${movement_types.horizontal} and a depth of ${movement_types.dept}. (Multiplying these together produces ${movement_types.horizontal * movement_types.dept}.)`);

        // --- Part Two ---
    } catch (error) {
        console.log(error)
    }  
    };

Dive('inputs/day-2.txt');