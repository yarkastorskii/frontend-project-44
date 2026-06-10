#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctCount = 0;
while (correctCount < 3) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isEven = number % 2 === 0;
  const expectedAnswer = isEven ? 'yes' : 'no';

  if (userAnswer === expectedAnswer) {
    console.log('Correct!');
    correctCount++;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
    console.log(`Let's try again!`);
    process.exit(1);
  }
}
console.log('Congratulations!');