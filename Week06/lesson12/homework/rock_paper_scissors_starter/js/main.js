// storing the running totals, starting at 0
var humanScore = 0;
var computerScore = 0;

// function human clicks rock, scores dont change
function rock() {
  $("#status").html = "The bot played Rock, you draw!";
  $("#humanScore").html = humanScore;
  $("#computerScore").html = computerScore;
}

// function human clicks paper, add one to human score
function paper() {
  $("#status").html = "The bot played Rock, you win!";
  $("#humanScore").html = humanScore + 1;
  $("#computerScore").html = computerScore;
}

// function human clicks scissors, add one to computer score
function scissors() {
  $("#status").html = "The bot played Rock, you loose!";
  $("#humanScore").html = humanScore;
  $("#computerScore").html = computerScore + 1;
}

$("#rock").click(rock);
$("#paper").click(paper);
$("#scissors").click(scissors);
