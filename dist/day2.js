"use strict";
// --- Day 2: Dive! ---
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
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
exports.default = Dive;
