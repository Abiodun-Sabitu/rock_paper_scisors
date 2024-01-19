let options = ["rock", "paper", "scissors"];

let playerCount = 0;
let computerCount = 0;

function getPlayerChoice() {
  const input = prompt("Enter value: ");
  return input;
}

function getComputerChoice() {
  const random = Math.floor(Math.random() * options.length);
  //console.log(options[random]);
  return options[random];
}

function gameCases(computerChoice, playerChoice, playerCount, computerCount) {
  if (computerChoice === playerChoice) {
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    console.log("This is a draw");
    return;
  }
  if (computerChoice == "scissors" && playerChoice == "paper") {
    computerCount += 1;
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    console.log(`Computer wins ${computerCount}`);
    return;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerCount += 1;
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    console.log(`Player wins ${computerCount}`);
    return;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    computerCount += 1;
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    console.log(`Computer wins ${computerCount}`);
    return;
  } else {
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    playerCount += 1;
    console.log(`Player wins ${playerCount}`);
  }
}
getComputerChoice();

while (true) {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  if (options.includes(playerChoice)) {
    gameCases(computerChoice, playerChoice, playerCount, computerCount);
  } else {
    console.log("Alaye, do the correct thing!!");
  }
}
