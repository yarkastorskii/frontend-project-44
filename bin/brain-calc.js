#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('What is the result of the expression?');

const operations = [
  { symbol: '+', func: (a, b) => a + b },
  { symbol: '-', func: (a, b) => a - b },
  { symbol: '*', func: (a, b) => a * b },
];

let correctCount = 0;
while (correctCount < 3) {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const op = operations[Math.floor(Math.random() * operations.length)];
  const question = `${num1} ${op.symbol} ${num2}`;
  const correctAnswer = op.func(num1, num2);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    correctCount++;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again!`);
    process.exit(1);
  }
}
console.log('Congratulations!');