const getComputerChoice = () => {
  const randomNumber = Math.random();

  // if (randomNumber < 1 / 3) {
  //   return "rock";
  // } else if (randomNumber < 2 / 3) {
  //   return "paper";
  // } else {
  //   return "scissors";
  // }
  return "scissors";
};

const getPlayerChoice = () => {
  const shapes = ["rock", "paper", "scissors"];
  const playerChoice = prompt("It's Rock-Paper-Scissors! enter you shape here")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "");

  if (!playerChoice) {
    alert(
      `You must type in your choice of shape to play this game. Click OK to try again`
    );
    return getPlayerChoice();
  }

  if (shapes.includes(playerChoice)) {
    return playerChoice;
  }
  alert(
    `oops!! ${playerChoice} is not a shape in the the rock-paper-scissors game. Click OK to try again`
  );

  return getPlayerChoice();
};

let playersPoint = 0;

const playerPoint = () => {
  console.log(playersPoint, "show");
  return playersPoint++;

  // if (playersPoint > 5) {
  //   return 0;
  // }
  // return playersPoint;
};

let computersPoint = 0;

const computerPoint = () => {
  return computersPoint++;
  // if (computersPoint > 5) {
  //   return 0;
  // }
  // return computersPoint;
};

const playRound = (playerSelection, computerSelection) => {
  console.log(`::Computer selected ${computerSelection}`);
  if (playerSelection === computerSelection) {
    console.log(
      `its a draw! computer selected ${computerSelection} and you also entered ${playerSelection}. Play again`
    );
    getComputerChoice();
    getPlayerChoice();
    return;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computersPoint += 1;
    computerPoint();
    console.log(
      `You loose! computer selected ${computerSelection}. ${computerSelection} can cut ${playerSelection}`
    );

    return;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerPoint();
    console.log(
      `You loose! computer selected ${computerSelection}. ${computerSelection} can crush ${playerSelection}`
    );

    return;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoint();
    console.log(
      `You loose this round! computer selected ${computerSelection} and you entered ${playerSelection}. ${computerSelection} can cover ${playerSelection}`
    );

    return;
  }
  console.log(`:: Computer selected ${computerSelection}`);
  console.log(
    `You win this round! you entered ${playerSelection}. ${playerSelection} beats ${computerSelection}`
  );
  return playerPoint();
};

// console.log(playRound(getPlayerChoice(), getComputerChoice()));

const game = () => {
  let scoreLine = `You: ${playersPoint} point(s)\n Computer: ${computersPoint} point(s)`;

  for (let rounds = 0; rounds <= 5; rounds++) {
    playRound(getPlayerChoice(), getComputerChoice());
    console.log(scoreLine);
    if (playersPoint === 5 && computersPoint < 5) {
      return "You have won the Game!";
    }

    if (playersPoint === 5 && computersPoint === 5) {
      console.log("Its a Tie!");
    }

    if (playersPoint < 5 && computersPoint === 5) {
      console.log("Game Over!, You Lost");
    }
  }
};

console.log(game());
