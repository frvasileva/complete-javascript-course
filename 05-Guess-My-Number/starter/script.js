'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.info('secret number is: ', secretNumber);

document.querySelector('.number').textContent = '?';
document.querySelector('.highscore').textContent = highScore;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No number!');
  }

  if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Success!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (highScore === 0 || highScore < score) {
      highScore = score;
      console.log('highscore', highScore);
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    displayMessage('Too high!');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    displayMessage('Too low!');
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.info('new secret number is: ', secretNumber);

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = undefined;
  displayMessage('Start guessing...!');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});
