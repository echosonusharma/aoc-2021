// --- Day 2: Dive! ---

import fs from 'fs';

interface movementInterface {
    horizontal: number,
    depth: number,
    aim?: number
};

const Dive = (filepath: string): void => {
    try {
        const data: Array<string> = fs.readFileSync(filepath, 'utf8').replace(/\r/g, "").split(/\n/);

        // --- Part One ---

        const movement_types: movementInterface = {
            horizontal: 0,
            depth: 0,
        };

        data.forEach((val: string) => {
            const values: Array<string> = val.split(' ');
            values[0] === 'forward' && (movement_types.horizontal += +values[1]);
            values[0] === 'down' && (movement_types.depth += +values[1]);
            values[0] === 'up' && (movement_types.depth -= +values[1]);
        });

        console.log(`After following these instructions, you would have a horizontal position of ${movement_types.horizontal} and a depth of ${movement_types.depth}. (Multiplying these together produces ${movement_types.horizontal * movement_types.depth}.)`);

        // --- Part Two ---

        const movement_types1: movementInterface = {
            horizontal: 0,
            depth: 0,
            aim: 0
        };

        data.forEach((val: string) => {
            const values: Array<string> = val.split(' ');
            if (values[0] === 'forward') {
                movement_types1.horizontal += +values[1];
                movement_types1.depth += (+values[1] * (movement_types1.aim as number));
            } else if (values[0] === 'down') {
                (movement_types1.aim as number) += +values[1];
            } else if (values[0] === 'up') {
                (movement_types1.aim as number) -= +values[1];
            };
        });

        console.log(`After following these new instructions, you would have a horizontal position of ${movement_types1.horizontal} and a depth of ${movement_types1.depth}. (Multiplying these produces ${movement_types1.horizontal * movement_types1.depth}.)`);

    } catch (error) {
        console.log(error)
    }
};

export default Dive;