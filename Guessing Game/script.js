const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

document.getElementById("guessButton").addEventListener("click", () => {
  const guessInput = document.getElementById("guessInput");
  const guess = Number(guessInput.value);
  const result = document.getElementById("resultMessage");
  const attemptsDisplay = document.getElementById("attemptsCount");

  if (isNaN(guess)) {
    result.textContent = "Please enter a valid number.";
  } else if (guess < minNum || guess > maxNum) {
    result.textContent = "Number out of range!";
  } else {
    attempts++;
    if (guess < answer) {
      result.textContent = "Too low!";
    } else if (guess > answer) {
      result.textContent = "Too high!";
    } else {
      result.textContent = `Correct! The answer was ${answer}.`;
      document.getElementById("guessButton").disabled = true;
    }
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
});
