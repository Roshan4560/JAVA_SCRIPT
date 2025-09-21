let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['stone', 'paper', 'scissor'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `Your Choice: ${capitalize(userChoice)}`;
  document.getElementById('computer-choice').textContent = `Computer's Choice: ${capitalize(computerChoice)}`;

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissor') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    result = "You Win!";
    userScore++;
  } else {
    result = "Computer Wins!";
    computerScore++;
  }

  document.getElementById('game-result').textContent = `Result: ${result}`;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById('user-choice').textContent = "Your Choice: -";
  document.getElementById('computer-choice').textContent = "Computer's Choice: -";
  document.getElementById('game-result').textContent = "Result: -";
  document.getElementById('user-score').textContent = 0;
  document.getElementById('computer-score').textContent = 0;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}