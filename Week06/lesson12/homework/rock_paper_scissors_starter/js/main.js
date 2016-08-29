// storing the running totals, starting at 0
var humanScore = 0;
var computerScore = 0;

// function human clicks rock, scores dont change
function rock() {
  $("rock").click;
  $("status").innerHTML = "The bot played Rock, you draw!";
  $("humanScore").innerHTML = humanScore;
  $("computerScore").innerHTML = computerScore;
}

// function human clicks paper, add one to human score
function paper() {
  $("paper").click;
  $("status").innerHTML = "The bot played Rock, you win!";
  $("humanScore").innerHTML = humanScore + 1;
  $("computerScore").innerHTML = computerScore;
}

// function human clicks scissors, add one to computer score
function scissors() {
  $("scissors").click;
  $("status").innerHTML = "The bot played Rock, you loose!";
  $("humanScore").innerHTML = humanScore;
  $("computerScore").innerHTML = computerScore + 1;
}
