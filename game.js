const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");

// Step 1: Define Choices
const choices = ['rock', 'paper', 'scissors'];

// Step 2: Get HTML Elements
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.choices button');

// Step 3: Add Event Listeners for Player's Choice
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id; // Get player's choice
    const computerChoice = getComputerChoice(); // Get computer's choice
    const winner = determineWinner(playerChoice, computerChoice); // Decide winner
    displayResult(playerChoice, computerChoice, winner); // Show result
  });
});

// Step 4: Generate Computer's Choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Step 5: Determine the Winner
function determineWinner(player, computer) {
  if (player === computer) {
    return 'It\'s a Tie!';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'Player Wins!';
  } else {
    return 'Computer Wins!';
  }
}

//  Step 6: Display the Result
function displayResult(player, computer, winner) {
  resultDisplay.textContent = `
    Player chose: ${player.toUpperCase()}
    | Computer chose: ${computer.toUpperCase()}
    => ${winner}
  `;
}
