#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomInt } from 'node:crypto';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

let correctCount = 0;
while (correctCount < 3) {
  const number = randomInt(0, 100) + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctCount++;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    process.exit(1);
  }
}
console.log(`Congratulations, ${userName}!`);