"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// --- Day 3: Binary Diagnostic ---
const fs_1 = __importDefault(require("fs"));
const BinaryDiagnostic = (filePath) => {
    // --- Part One ---
    const data = fs_1.default.readFileSync(filePath, 'utf8').replace(/\r/g, "").split(/\n/);
    const arr = [];
    data[0].split('').forEach(() => {
        arr.push(0);
    });
    for (let i = 0; i < data.length; i++) {
        data[i].split('').forEach((ele, index) => {
            if (+ele === 1)
                arr[index] += 1;
        });
    }
    ;
    const gamma_rate = arr.map((ele) => {
        return ele > (data.length / 2) ? 1 : 0;
    });
    const epsilon_rate = gamma_rate.map((ele) => {
        return ele === 0 ? 1 : 0;
    });
    console.log(`Your puzzle answer was ${parseInt(gamma_rate.join(''), 2) * parseInt(epsilon_rate.join(''), 2)}`);
    // --- Part Two ---
};
exports.default = BinaryDiagnostic;
