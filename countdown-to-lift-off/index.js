const countdownDisplay = document.getElementById("countdown-display");
const rocket = document.getElementById("rocket");
let timeRemaining = 10;
let timerInterval = null;
let timePassed = 0;
let timeLeft = timeRemaining;

function startTimer() {
  timerInterval = setInterval(() => {

    timePassed = timePassed += 1;
    timeLeft = timeRemaining - timePassed;

    countdownDisplay.innerHTML = timeLeft;

    if (timeLeft < 0) {
      countdownDisplay.innerHTML = 'Liftoff!';
    }
  }, 1000);
}

startTimer();

// Task:
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation

// Stretch goals:
// 1) Add fire under the rocket.
// 2) Randomly don’t launch the rocket when the timer reaches 0.
