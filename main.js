const btn = document.querySelector('.button');
const input = document.querySelector('input');
btn.textContent = `Play ${+input.value} rounds`;

input.addEventListener('input', () => {
  const rounds = +input.value;
  const isValid = rounds > 0 && !isNaN(rounds);

  btn.textContent = isValid
    ? `Play ${rounds} rounds`
    : `Error! Enter value greater than 0`;
  btn.disabled = !isValid;
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
