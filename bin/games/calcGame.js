#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { atb } from './uni-f.js';

export function calcGame(main, userName) {
    console.log(`What is the result of the expression?`);
    let correctStreak = 0;

    while (correctStreak < 3) {
        const randint0 = Math.floor(Math.random()*100);
        const randint1 = Math.floor(Math.random()*100);

        const MathOperation = {
            "+": (value0, value1)=>{
                return value0 + value1
            },
            "-": (value0, value1)=>{
                return value0 - value1
            },
            "*": (value0, value1)=>{
                return value0 * value1
            }
        }

        const operation = ["+", "-", "*"];
        const randOperation = operation[Math.floor(Math.random()*operation.length)] || 0;

        const QValue = MathOperation[randOperation](randint0, randint1);

        console.log(`Question: ${randint0} ${randOperation} ${randint1}`);
        let userAnswer = readlineSync.question("Your answer: ")
        if (userAnswer) {
            if (QValue === Number.parseInt(userAnswer)) {
                console.log(`Correct!`);
                correctStreak++;
            } else {
                console.log(`\n"${userAnswer}" is wrong answer. (Correct answer was ${QValue})\nLet's try again, ${userName}!\n`);
                correctStreak = 0;
            }
        }
    }
    console.log(`Congratulations, ${userName}!`);
    const Urepeat = () => {
        const answer = readlineSync.question(`Do you want to play again? (yes/no) `);
        if (atb(answer) === true) {
            calcGame(main, userName)
        } else {
            main();
        }
    }
    Urepeat();
}