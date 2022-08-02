const choices = ["rock", "paper", "scissor"];

const btns = document.querySelectorAll('button');

const result = document.getElementById('result');
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

btns.forEach(btn => btn.addEventListener('click', function() {
  gameResult(btn.id, computerChoice);
}));

function gameResult(userEntry, computerChoice) {
  if (userEntry == computerChoice) {
    result.textContent = "Draw!\r\nYour pick: " + userEntry + "\r\nComputer pick: " + computerChoice;
  } else if (userEntry == "rock" && computerChoice == "paper") {
    result.textContent = "You lose!\r\nYour pick: " + userEntry + "\r\nComputer pick: " + computerChoice;
  } else if (userEntry == "rock" && computerChoice == "scissor") {
    result.textContent = "You won!\r\nYour pick: " + userEntry + "\r\nComputer pick: " + computerChoice;
  } else if (userEntry == "paper" && computerChoice == "scissor") {
    result.textContent = "You lose!\r\nYour pick: " + userEntry + "\r\nComputer pick: " + computerChoice;
  } else if (userEntry == "paper" && computerChoice == "rock") {
    result.textContent = "You won!\r\nYour pick: " + userEntry + "\r\nComputer pick: " + computerChoice;
  } else if (userEntry == "scissor" && computerChoice == "rock") { 
    result.textContent = "You lose!\r\nYour pick: " + userEntry + "\r\nComputer pick: " + computerChoice;
  } else if (userEntry == "scissor" && computerChoice == "paper") {
    result.textContent = "You won!\r\nYour pick: " + userEntry + "\r\nComputer pick: " + computerChoice;
  } else {
    result.textContent = "Pick between 'Rock Paper Scissor'";
  }
}