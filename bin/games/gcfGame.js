#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { atb } from './uni-f.js';

export function gcfGame(main, userName) {
    console.log(`Find the greatest common divisor of given numbers.`);
    let correctStreak = 0;

    while (correctStreak < 3) {
        const { int0, int1, QValue } = generatePairWithCommonDivisor();

        console.log(`Question: ${int0} ${int1}`);
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
            gcfGame(main, userName)
        } else {
            main();
        }
    }
    Urepeat();
}

function generatePairWithCommonDivisor(maxValue = Math.floor(Math.random()*100), minValue = 1) {
    const maxDivisor = Math.floor(maxValue / 2);
    if (maxDivisor < 2) {
      throw new Error(`Невозможно получить НОД ≥ 2 в диапазоне [${minValue}, ${maxValue}]`);
    }
  
    const divisor = Math.floor(Math.random() * (maxDivisor - 1)) + 2;
  
    const maxFactor = Math.floor(maxValue / divisor);
    const factor1 = Math.floor(Math.random() * maxFactor) + 1;
    const factor2 = Math.floor(Math.random() * maxFactor) + 1;
  
    const a = divisor * factor1;
    const b = divisor * factor2;
  
    const actualGcd = gcd(a, b);
  
    return { int0: a, int1: b, QValue: actualGcd };
}

// Вспомогательная функция НОД
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    return b === 0 ? a : gcd(b, a % b);
}