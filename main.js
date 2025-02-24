function getComputerChoice(){
  let choice = Math.floor((Math.random() * 100))

  if (choice < 30) {
    choice = "paper";
  } else if (choice <= 60) {
    choice = "rock";
  } else {
    choice = "scissors";
  }

  return choice;
}

