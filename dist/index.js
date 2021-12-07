"use strict";
// --- Day 1: Sonar Sweep ---
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const SonarSweep = (filepath) => {
    try {
        if (!filepath)
            throw new Error("No file path found!");
        const data = fs_1.default.readFileSync(filepath, 'utf8').replace(/\r/g, "").split(/\n/);
        // --- Part One ---
        let num = 0;
        data.forEach((val, i) => {
            if (+val > +data[i - 1])
                num += 1;
        });
        console.log(`there are ${num} measurements that are larger than the previous measurement.`);
        // --- Part Two ---
        let num1 = 0;
        data.forEach((val, i) => {
            const sum = +val + +data[i + 1] + +data[i + 2];
            const sum1 = +data[i + 1] + +data[i + 2] + +data[i + 3];
            if (!isNaN(sum) || !isNaN(sum1)) {
                if (sum < sum1)
                    num1 += 1;
            }
            ;
        });
        console.log(`there are ${num1} sums that are larger than the previous sum.`);
    }
    catch (error) {
        console.log(error);
    }
};
;
const Dive = (filepath) => {
    try {
        const data = fs_1.default.readFileSync(filepath, 'utf8').replace(/\r/g, "").split(/\n/);
        // --- Part One ---
        const movement_types = {
            horizontal: 0,
            depth: 0,
        };
        data.forEach((val) => {
            const values = val.split(' ');
            values[0] === 'forward' && (movement_types.horizontal += +values[1]);
            values[0] === 'down' && (movement_types.depth += +values[1]);
            values[0] === 'up' && (movement_types.depth -= +values[1]);
        });
        console.log(`After following these instructions, you would have a horizontal position of ${movement_types.horizontal} and a depth of ${movement_types.depth}. (Multiplying these together produces ${movement_types.horizontal * movement_types.depth}.)`);
        // --- Part Two ---
        const movement_types1 = {
            horizontal: 0,
            depth: 0,
            aim: 0
        };
        data.forEach((val) => {
            const values = val.split(' ');
            if (values[0] === 'forward') {
                movement_types1.horizontal += +values[1];
                movement_types1.depth += (+values[1] * movement_types1.aim);
            }
            else if (values[0] === 'down') {
                movement_types1.aim += +values[1];
            }
            else if (values[0] === 'up') {
                movement_types1.aim -= +values[1];
            }
            ;
        });
        console.log(`After following these new instructions, you would have a horizontal position of ${movement_types1.horizontal} and a depth of ${movement_types1.depth}. (Multiplying these produces ${movement_types1.horizontal * movement_types1.depth}.)`);
    }
    catch (error) {
        console.log(error);
    }
};
// Dive('inputs/day-2.txt');
// --- Day 3: Binary Diagnostic ---
const Diagnostic = (filepath) => {
    try {
        const data = fs_1.default.readFileSync(filepath, 'utf8').replace(/\r/g, "").split(/\n/).map((val) => val.split(''));
        ;
        const valArr = [];
        for (let i = 0; i < data[0].length; i++) {
            valArr.push({ one: 0, zero: 0 });
        }
        ;
        // you don't need to store both zero or one, just storing anyone one is suffice
        data.forEach((bin) => {
            bin.forEach((val, index) => {
                val === '1' && (valArr[index].one += 1);
                val === '0' && (valArr[index].zero += 1);
            });
        });
        const gamma = [];
        const epsilon = [];
        valArr.forEach((obj) => {
            if (obj.one > (data.length / 2)) {
                gamma.push('1');
                epsilon.push('0');
            }
            else {
                gamma.push('0');
                epsilon.push('1');
            }
        });
        const gammaRate = parseInt(gamma.join(''), 2);
        const epsilonRate = parseInt(epsilon.join(''), 2);
        console.log(`Multiplying the gamma rate (${gammaRate}) by the epsilon rate (${epsilonRate}) produces the power consumption, ${gammaRate * epsilonRate}`);
    }
    catch (error) {
        console.log(error);
    }
};
Diagnostic('inputs/day-3.txt');
