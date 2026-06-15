#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomInt } from 'node:crypto';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

function makeProgression() {
  const start = randomInt(0, 50) + 1;
  const step = randomInt(0, 10) + 1;
  const length = 10;
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
}

let correctCount = 0;
while (correctCount < 3) {
  const progression = makeProgression();
  const hiddenIndex = randomInt(0, progression.length);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  console.log(`Question: ${question}`);
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