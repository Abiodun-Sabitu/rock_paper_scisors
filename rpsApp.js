//randomly returns either ‘ROCK’, ‘Paper’ or ‘SCISSORS’
// let computerSelection;
const shapes = ["ROCK", "PAPER", "SCISSORS"];
const gameOutputs = document.querySelector(".output");

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * shapes.length);
  const p = document.createElement("p");
  p.textContent = `Computer picked ${shapes[random]}`;
  // console.log(`::Computer picked ${shapes[random]}`);
  // return shapes[random];
  // computerSelection = shapes[random];
  return gameOutputs.appendChild(p);
};

// Players choice
let playerSelection;
const getPlayerChoice = (callback) => {
  const buttons = document.querySelectorAll(".rpsBtn");

  // console.log(buttons);
  buttons.forEach((button) => {
    const playerChoice = () => {
      const p = document.createElement("p");

      p.textContent = `You picked ${button.innerText.toUpperCase()} &`;
      playerSelection = button.innerText.toUpperCase();
      // console.log(button.innerText.toUpperCase());
      gameOutputs.appendChild(p);
      getComputerChoice();

      callback(playerSelection);
    };
    button.addEventListener("click", playerChoice);
  });
};

getPlayerChoice((playerSelection) => {
  return playerSelection;
});

//  const getPlayerChoice = () => {
//   let playerChoice;
//   do {
//     playerChoice = prompt("Enter ROCK, PAPER, or scissor here")
//       .toLowerCase()
//       .trim()
//       .replace(/\s+/g, "");

//     if (playerChoice?.length > 0 && shapes.includes(playerChoice)) {
//       console.log(`::You picked ${playerChoice}`);
//       return playerChoice;
//     } else {
//       alert("you must enter either ROCK, PAPER, or scissor");
//     }
//   } while (!(playerChoice?.length > 0 && shapes.includes(playerChoice)));
// };

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

// //Write a function to play a single round of ROCK Paper SCISSORS
// const playRound = (playerSelection, computerSelection) => {
//   if (playerSelection === computerSelection) {
//     console.log(`It's a tie!`);
//     totalTies();
//     return;
//   } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
//     console.log(`You loose! ${computerSelection} can cut ${playerSelection}`);
//     computerPoint();
//     return;
//   } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
//     console.log(`You loose! ${computerSelection} can cover ${playerSelection}`);
//     computerPoint();
//     return;
//   } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
//     console.log(`You loose! ${computerSelection} can break ${playerSelection}`);
//     computerPoint();
//     return;
//   } else {
//     console.log(`You win! ${playerSelection} can beat ${computerSelection}`);
//     playerPoint();
//     return;
//   }
// };

// playRound(playerSelection, computerSelection);

// //Game summary
// const getGameSummary = () => {
//   const isPlayerWinner = playerScore > computerScore;
//   const isTheGameATie = playerScore === computerScore;
//   const gameSummary = `*************** Game summary *****************\n
// 	Total no of rounds: 5\n
// 	Scoreline>>> Computer: ${computerScore} point(s) - Player: ${playerScore} point(s)\n
// 	Total time their was a tie: ${sumOfTies}\n
// 	${
//     isPlayerWinner
//       ? "Congratulations!! You won the game"
//       : isTheGameATie
//       ? "It was a tie! you can try again"
//       : "Sorry! you lost, you can try again"
//   }`;
//   console.log(gameSummary);
//   return;
// };

// // Game
// const game = () => {
//   let rounds = 0;
//   do {
//     rounds += 1;
//     console.log(`*************** Round ${rounds} *****************`);
//     playRound(getPlayerChoice(), getComputerChoice());
//   } while (rounds < 5);

//   getGameSummary();
//   return;
// };

// game();
