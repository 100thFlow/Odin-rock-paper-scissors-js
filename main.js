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
  let choice = prompt('Type one of "rock", "paper", or "scissors"').toLowerCase();

  if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    alert('You can type only one of "rock", "paper", or "scissors"');
    return getHumanChoice();
  } else {
    return choice;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('Draw!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}
