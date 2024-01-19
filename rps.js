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
  let updtPlayerCount = playerCount;
  let updtComputerCount = computerCount;

  if (computerChoice === playerChoice) {
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    console.log("This is a draw");
  }
  if (computerChoice == "scissors" && playerChoice == "paper") {
    updtComputerCount += 1;
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    console.log(`Computer wins ${updtComputerCount}`);
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    updtComputerCount += 1;
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    console.log(`Player wins ${updtComputerCount}`);
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    updtComputerCount += 1;
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    console.log(`Computer wins ${updtComputerCount}`);
  } else {
    console.log(
      `:: You picked ${playerChoice}, while computer picked ${computerChoice}`
    );
    updtPlayerCount += 1;
    console.log(`Player wins ${updtPlayerCount}`);
  }

  return { updtPlayerCount, updtComputerCount };
}
getComputerChoice();

while (true) {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  if (options.includes(playerChoice)) {
    const { updtComputerCount, updtPlayerCount } = gameCases(
      computerChoice,
      playerChoice,
      playerCount,
      computerCount
    );
    playerCount = updtPlayerCount;
    computerCount = updtComputerCount;
  } else {
    console.log("Alaye, do the correct thing!!");
  }
}
