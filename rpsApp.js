//randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’
const shapes = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  const random = Math.floor(Math.random() * shapes.length);
  console.log(`::Computer picked ${shapes[random]}`);
  return shapes[random];
};

// Players choice
const getPlayerChoice = () => {
  let playerChoice;
  do {
    playerChoice = prompt("Enter rock, paper, or scissor here")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "");

    if (playerChoice?.length > 0 && shapes.includes(playerChoice)) {
      console.log(`::You picked ${playerChoice}`);
      return playerChoice;
    } else {
      alert("you must enter either rock, paper, or scissor");
    }
  } while (!(playerChoice?.length > 0 && shapes.includes(playerChoice)));
};

// Global variables
let playerScore = 0;
let computerScore = 0;
let sumOfTies = 0;

//helper functions
const playerPoint = () => {
  return (playerScore += 1);
};

const computerPoint = () => {
  return (computerScore += 1);
};

const totalTies = () => {
  return (sumOfTies += 1);
};

//Write a function to play a single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log(`It's a tie!`);
    totalTies();
    return;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(`You loose! ${computerSelection} can cut ${playerSelection}`);
    computerPoint();
    return;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`You loose! ${computerSelection} can cover ${playerSelection}`);
    computerPoint();
    return;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(`You loose! ${computerSelection} can break ${playerSelection}`);
    computerPoint();
    return;
  } else {
    console.log(`You win! ${playerSelection} can beat ${computerSelection}`);
    playerPoint();
    return;
  }
};

//Game summary
const getGameSummary = () => {
  const isPlayerWinner = playerScore > computerScore;
  const isTheGameATie = playerScore === computerScore;
  const gameSummary = `*************** Game summary *****************\n
	Total no of rounds: 5\n
	Scoreline>>> Computer: ${computerScore} point(s) - Player: ${playerScore} point(s)\n
	Total time their was a tie: ${sumOfTies}\n
	${
    isPlayerWinner
      ? "Congratulations!! You won the game"
      : isTheGameATie
      ? "It was a tie! you can try again"
      : "Sorry! you lost, you can try again"
  }`;
  console.log(gameSummary);
  return;
};

// Game
const game = () => {
  let rounds = 0;
  do {
    rounds += 1;
    console.log(`*************** Round ${rounds} *****************`);
    playRound(getPlayerChoice(), getComputerChoice());
  } while (rounds < 5);

  getGameSummary();
  return;
};

game();
