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
  let choice = prompt('Type one of "rock", "paper", or "scissors"')?.toLowerCase();

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

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log('Draw!');
      alert('Draw!');
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

  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice === null || computerChoice === null) {
      return;
    }
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    alert(`You win the GAME! Your score is ${humanScore} and computer score is ${computerScore}`);
  } else if (humanScore < computerScore) {
    alert(`You lose the GAME! Your score is ${humanScore} and computer score is ${computerScore}`);
  } else {
    alert("It's a TIE! GG!");
  }
}

playGame();
