import * as readline from 'node:readline/promises';

// Scanner scanner = new Scanner(System.in);

// const name = await scanner.question("Enter your name? ");
// console.log(`Your name is: \x1b[31m${name}\x1b[0m`);
// const age = await scanner.question("Enter your age? ");
// console.log(`Your age is: ${age}`);

const scanner = readline.createInterface(process.stdin, process.stdout,
    undefined,
    false);

let name: string;
let marks1: number;
let marks2: number;
let marks3: number;
do {
    name = await scanner.question("Enter your name: ");
} while (!name.trim());

do {
    marks1 = +await scanner.question("Enter your subject 1 marks: ");
} while (marks1 < 0 || marks1 > 100);

do {
    marks2 = +await scanner.question("Enter your subject 2 marks: ");
} while (marks2 < 0 || marks2 > 100);

do {
    marks3 = +await scanner.question("Enter your subject 3 marks: ");
} while (marks3 < 0 || marks3 > 100);

console.log(`\x1b[31m${name} Report\x1b[30m`);
console.log("==============")
console.log(`\x1b[32mTotal Marks: ${marks1 + marks2 + marks3}\x1b[30m`);
console.log(`\x1b[33mAvg. Marks: ${(marks1 + marks2 + marks3) / 3}\x1b[30m`);

