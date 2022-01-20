// --- Day 1: Sonar Sweep ---

import fs from 'fs';

const SonarSweep = (filepath: string): void => {
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

export default SonarSweep;
