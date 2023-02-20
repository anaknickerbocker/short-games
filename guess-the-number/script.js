window.onload = function () {
  let number;
  let guesses = new Set();

  const isDuplicate = (guess) => {
    return guesses.has(guess);
  };

  const getResponse = (guess) => {
    if (!guess) {
      return 'Try guessing a number between 1 and 100!';
    }

    const guessedNumber = Number(guess);

    if (isDuplicate(guessedNumber)) {
      return `You already guessed ${guess}!`;
    } else {
      guesses.add(guessedNumber);
    }

    if (Number(guess) === number) {
      return `Hooray! ${guess} is correct!`;
    } else if (guessedNumber < number) {
      return `${guess} is too low!`;
    } else if (guessedNumber > number) {
      return `${guess} is too high!`;
    } else {
      return 'An error occurred! Please try again.';
    }
  };

  const guessInputElement = document.getElementById('guessInput');
  const responseElement = document.getElementById('response');
  const guessesElement = document.getElementById('guesses');
  const form = document.getElementById('guessForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    responseElement.innerHTML = getResponse(guessInputElement.value);
    guessInputElement.value = '';
    guessesElement.innerHTML =
      guesses.size > 0 ? `Guesses: ${Array.from(guesses).join(', ')}` : '';
  });

  const resetGame = () => {
    number = Math.floor(Math.random() * 100) + 1;
    guessInputElement.value = '';
    responseElement.innerHTML = '';
    guessesElement.innerHTML = '';
    guesses.clear();
  };

  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    resetGame();
  });

  resetGame();
};
