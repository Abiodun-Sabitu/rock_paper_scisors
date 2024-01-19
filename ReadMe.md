# Rock Paper Scissors Game - ODIN PROJECT

1. **Start a new Git repo for your project.**

2. **Create a blank HTML document with a script tag:**

   - It is best practice to link an external .js file. This game is played entirely from the console, so don’t worry about putting anything else in there.

3. **Create a function to get the computer's choice:**

   - Write a function called `getComputerChoice` that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. Use the console to ensure it returns the expected output before moving on.

4. **Write a function to play a single round of Rock Paper Scissors:**

   - Create a function called `playRound` that takes two parameters - `playerSelection` and `computerSelection`.
   - Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock."
   - Make the `playerSelection` parameter case-insensitive.
   - Account for ties by re-playing the round.

   ```javascript
   function playRound(playerSelection, computerSelection) {
     // your code here!
   }

   const playerSelection = "rock";
   const computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));
   ```

5. **Write a new function called `game()`:**
   - Use the `playRound` function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
   - You have not officially learned how to “loop” over code to repeat function calls. If you already know about loops from somewhere else or if you feel like doing some more learning, feel free to use them. If not, just call your `playRound` function 5 times in a row.
   - At this point, use `console.log()` to display the results of each round and the winner at the end.
   - Use `prompt()` to get input from the user. [Read the docs here](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) if you need to.
   - Feel free to rework your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
   - Feel free to create more “helper” functions if you think it would be useful.
