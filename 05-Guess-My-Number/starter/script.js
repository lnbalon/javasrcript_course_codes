'use strict';

// start the game logic

// define a number from one to twenty
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
  }
});
