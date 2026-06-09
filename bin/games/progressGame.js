#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { atb } from './uni-f.js';

export function progressGame(main, userName) {
    console.log(`What number is missing in the progression?`);
    let correctStreak = 0;

    while (correctStreak < 3) {
        const progression = createProgression();

        const randIndex = Math.floor(Math.random()*progression.length);
        const condition = progression[randIndex];

        progression[randIndex] = ".."

        console.log(`Question: ${String(progression).replaceAll(',', ' ')}`);
        let userAnswer = readlineSync.question("Your answer: ")
        if (userAnswer) {
            if (condition === Number.parseInt(userAnswer)) {
                console.log(`Correct!`);
                correctStreak++;
            } else {
                console.log(`\n"${userAnswer}" is wrong answer. (Correct answer was ${condition})\nLet's try again, ${userName}!\n`);
                correctStreak = 0;
            }
        }
    }
    console.log(`Congratulations, ${userName}!`);
    const Urepeat = () => {
        const answer = readlineSync.question(`Do you want to play again? (yes/no) `);
        if (atb(answer) === true) {
            progressGame(main, userName);
        } else {
            main();
        }
    }
    Urepeat();
}

function createProgression() {
    const start = Math.floor(Math.random()*100) + 1;
    const step = Math.floor(Math.random()*30) + 1;

    let progress = []
    for (let i = 0; i < 10; i++) {
        progress.push(start + i * step)
    }
    return progress
}