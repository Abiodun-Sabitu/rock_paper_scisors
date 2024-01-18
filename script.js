const getComputerChoice = () => {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

console.log(getComputerChoice());