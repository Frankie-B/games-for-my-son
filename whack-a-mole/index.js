const square = document.querySelectorAll('.square');
const pig = document.querySelectorAll('.pig');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove('pig');
  });

  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('pig');

  // assign the id of the randomPosition to the hitPosition
  hitPosition = randomPosition.id;

  square.forEach((id) => {
    id.addEventListener('mouseup', () => {
      if (id.id === hitPosition) {
        result = result + 1;
        score.textContent = result;
      }
    });
  });
}

function movePig() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

function countDownTimer() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert(`GAME OVER! Your final score is ${result}`);
  }
}

let timerId = setInterval(countDownTimer, 1000);
// movePig();
