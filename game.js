const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");

// Step 1: Define Choices
// const choices = ['rock', 'paper', 'scissors'];


// const resultDisplay = document.getElementById('result');
// const buttons = document.querySelectorAll('.choices button');


// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const playerChoice = button.id;
//     const computerChoice = getComputerChoice(); 
//     const winner = determineWinner(playerChoice, computerChoice);
//     displayResult(playerChoice, computerChoice, winner);
//   });
// });

// function getComputerChoice() {
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function determineWinner(player, computer) {
//   if (player === computer) {
//     return 'It\'s a Tie!';
//   } else if (
//     (player === 'rock' && computer === 'scissors') ||
//     (player === 'paper' && computer === 'rock') ||
//     (player === 'scissors' && computer === 'paper')
//   ) {
//     return 'Player Wins!';
//   } else {
//     return 'Computer Wins!';
//   }
// }

// function displayResult(player, computer, winner) {
//   resultDisplay.textContent = `
//     Player chose: ${player.toUpperCase()}
//     | Computer chose: ${computer.toUpperCase()}
//     => ${winner}
//   `;
// }



const choices = ['rock', 'paper', 'scissors'];

const resultDisplay = document.getElementById('result');
const byttons = document.querySelectorAll('.choices button');

