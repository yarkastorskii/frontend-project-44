#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { atb } from './uni-f.js';

export function isPrimeGame(main, userName) {
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    let correctStreak = 0;

    while (correctStreak < 3) {
        if (correctStreak === 3) break;
        const randint = Math.floor(Math.random()*100);
        const isPValue = isPrime(randint);

        console.log(`Question: ${randint}`);
        let userAnswer = readlineSync.question("Your answer: ");
        if (userAnswer) {
            if (isPValue === atb(userAnswer)) {
                console.log(`Correct!`);
                correctStreak++;
            } else {
                console.log(`\n"${userAnswer}" is wrong answer. (Correct answer was ${isPValue ? "yes" : "no"})\nLet's try again, ${userName}!\n`);
                correctStreak = 0;
            }
        }
    }
    console.log(`Congratulations, ${userName}!`);
    const Urepeat = () => {
        const answer = readlineSync.question(`Do you want to play again? (yes/no) `);
        if (atb(answer) === true) {
            isPrimeGame(main, userName);
        } else {
            main();
        }
    }
    Urepeat();
}

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
