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
exports.default = SonarSweep;
