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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log('Draw!');
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    alert(`You win! Your score is ${humanScore} and computer score is ${computerScore}`);
  } else if (humanScore < computerScore) {
    alert(`You lose! Your score is ${humanScore} and computer score is ${computerScore}`);
  } else {
    alert('Draw!');
  }
}

playGame();
