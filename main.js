const playButton = document.querySelector('#playButton');
const choiceButtons = document.querySelectorAll('.choice-button');
const input = document.querySelector('input');
const scoreContainer = document.querySelector('.score-container');
const roundParagraph = document.querySelector('#round');
const computerScoreParagraph = document.querySelector('#computerScore');
const playerScoreParagraph = document.querySelector('#playerScore');
const wrapper = document.querySelector('.wrapper');
const round = 1;
const playerScore = 3;
const computerScore = 0;
playButton.textContent = `Play ${+input.value} rounds`;

function isRoundsValid(rounds) {
  if (rounds > 0 && !isNaN(rounds)) return true;
  return false;
}

function renderRound(round, playerScore, computerScore, roundText, detailText) {
  roundParagraph.textContent = `Round ${round}`;
  playerScoreParagraph.textContent = playerScore;
  computerScoreParagraph.textContent = computerScore;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    round++;
    console.log('Draw!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    alert(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    alert(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

input.addEventListener('change', () => {
  const rounds = +input.value;
  // Prevent accepting invalid value if set through UI
  const isValid = isRoundsValid(rounds);

  playButton.textContent = isValid
    ? `Play ${rounds} rounds`
    : `Error! Enter value greater than 0`;
  playButton.disabled = !isValid;
});

playButton.addEventListener('click', () => {
  const rounds = +input.value;
  // Prevent accepting invalid values if set through the console
  const isValid = isRoundsValid(rounds);
  if (!isValid) alert(`You enter ${rounds}, but rounds must be greater than 0`);
  else {
    updateRound(round, playerScore, computerScore);
    scoreContainer.classList.remove('hide');
  }
});

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100);

  if (choice < 30) {
    choice = 'paper';
  } else if (choice <= 60) {
    choice = 'rock';
  } else {
    choice = 'scissors';
  }

  return choice;
}

function getHumanChoice() {
  let choice = prompt(
    'Type one of "rock", "paper", or "scissors"',
  )?.toLowerCase();

  if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    if (choice === null || choice === '' || choice === undefined) {
      alert('You canceled the Game!');
      return null;
    } else {
      alert('You can type only one of "rock", "paper", or "scissors"');
      return getHumanChoice();
    }
  }
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === null || computerChoice === null) {
    return;
  }

  // playRound(humanChoice, computerChoice);

  if (humanScore > computerScore) {
    console.log(
      `You won the GAME! Your score is ${humanScore} and computer score is ${computerScore}`,
    );
    alert(
      `You won the GAME! Your score is ${humanScore} and computer score is ${computerScore}`,
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lost the GAME! Your score is ${humanScore} and computer score is ${computerScore}`,
    );
    alert(
      `You lost the GAME! Your score is ${humanScore} and computer score is ${computerScore}`,
    );
  } else {
    console.log("It's a TIE! GG!");
    alert("It's a TIE! GG!");
  }
}

// playGame();
