const choices = ["rock", "paper", "scissor"];

let userEntry = document.getElementById('userEntry').value.toLowerCase();

const result = document.getElementById('result');

function game() {;
  result.textContent = '';

  if (choices.includes(userEntry)) {
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    gameResult(userEntry, computerChoice);
  };
}

function gameResult(userEntry, computerChoice) {
  if (userEntry == computerChoice) {
    result.innerHTML = "Draw!<br><br>Your pick: " + userEntry + " Computer pick: " + computerChoice;
  } else if (userEntry == "rock" && computerChoice == "paper") {
    result.innerHTML = "You lose!<br><br>Your pick: " + userEntry + " Computer pick: " + computerChoice;
  } else if (userEntry == "rock" && computerChoice == "scissor") {
    result.innerHTML = "You won!<br><br>Your pick: " + userEntry + " Computer pick: " + computerChoice;
  } else if (userEntry == "paper" && computerChoice == "scissor") {
    result.innerHTML = "You lose!<br><br>Your pick: " + userEntry + " Computer pick: " + computerChoice;
  } else if (userEntry == "paper" && computerChoice == "rock") {
    result.innerHTML = "You won!<br><br>Your pick: " + userEntry + " Computer pick: " + computerChoice;
  } else if (userEntry == "scissor" && computerChoice == "rock") { 
    result.innerHTML = "You lose!<br><br>Your pick: " + userEntry + " Computer pick: " + computerChoice;
  } else if (userEntry == "scissor" && computerChoice == "paper") {
    result.innerHTML = "You won!<br><br>Your pick: " + userEntry + " Computer pick: " + computerChoice;
  } else {
    result.innerHTML = "Pick between 'Rock Paper Scissor'";
  }
}