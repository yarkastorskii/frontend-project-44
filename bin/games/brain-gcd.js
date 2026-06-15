#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomInt } from 'crypto';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

let correctCount = 0;
while (correctCount < 3) {
  const num1 = randomInt(0, 50) + 1;
  const num2 = randomInt(0, 50) + 1;
  const correctAnswer = gcd(num1, num2);

  console.log(`Question: ${num1} ${num2}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    correctCount++;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    process.exit(1);
  }
}
console.log(`Congratulations, ${userName}!`);