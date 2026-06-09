#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { evenGame } from './games/evenGame.js';
import { calcGame } from './games/calcGame.js';
import { gcfGame } from './games/gcfGame.js';
import { progressGame } from './games/progressGame.js';
import { isPrimeGame } from './games/isPrimeGame.js';

console.log("Welcome to the Brain Games!");

let userName = readlineSync.question('May I have your name? ').trim().replace(/[^A-Za-z'-]/g, '');
userName = userName || "Player";

console.log(`Hello, ${userName}!`);

const games = {
  "1": {
    "name": "Checking for parity",
    "run": ()=>{
      console.clear();
      console.log(`Game selected: "Checking for parity"`);
      evenGame(chooseGame, userName);
    }
  },
  "2": {
    "name": "Calculator",
    "run": ()=>{
      console.clear();
      console.log(`Game selected: "Calculator"`);
      calcGame(chooseGame, userName);
    }
  },
  "3": {
    "name": "Greatest common factor (GCF)",
    "run": ()=>{
      console.clear();
      console.log(`Game selected: "Greatest common factor (GCF)"`);
      gcfGame(chooseGame, userName);
    }
  },
  "4": {
    "name": "Arithmetic progression",
    "run": ()=>{
      console.clear();
      console.log(`Game selected: "Arithmetic progression"`);
      progressGame(chooseGame, userName);
    }
  },
  "5": {
    "name": "Is it a prime number?",
    "run": ()=>{
      console.clear();
      console.log(`Game selected: "Is it a prime number?"`);
      isPrimeGame(chooseGame, userName);
    }
  }
}

function chooseGame() {
  console.log(`\nThere are 5 games available, select one by entering the game number to start. To exit, press Ctrl+C`);
  for (let key in games) {
      console.log(`\t${key} — "${games[key].name}"`);
  }

  let userChoose = readlineSync.question('Your choice: ');
  
  if (userChoose in games) {
    games[userChoose].run();
  } else {
    console.clear();
    console.log(`"${userChoose}" is not a valid input! Try again!`);
    chooseGame();
  }

}
chooseGame();