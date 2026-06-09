#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { atb } from './uni-f.js';

export function evenGame(main, userName) {
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    let correctStreak = 0;

    while (correctStreak < 3) {
        if (correctStreak === 3) break;
        const randint = Math.floor(Math.random()*100);
        console.log(`Question: ${randint}`);
        let userAnswer = readlineSync.question("Your answer: ");
        if (userAnswer) {
            const condition = randint%2 === 0;
            if (condition === atb(userAnswer)) {
                console.log(`Correct!`);
                correctStreak++;
            } else {
                console.log(`\n"${userAnswer}" is wrong answer. (Correct answer was ${condition ? "yes" : "no"})\nLet's try again, ${userName}!\n`);
                correctStreak = 0;
            }
        }
    }
    console.log(`Congratulations, ${userName}!`);
    const Urepeat = () => {
        const answer = readlineSync.question(`Do you want to play again? (yes/no) `);
        if (atb(answer) === true) {
            evenGame(main, userName);
        } else {
            main();
        }
    }
    Urepeat();
}
