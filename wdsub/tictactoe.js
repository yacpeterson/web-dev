let gameOverDiv = document.getElementById("end");
let winnerText = document.querySelector("#end p");
let squareArr = document.querySelectorAll(".square");
let xWinsText = document.getElementById("x-wins");
let oWinsText = document.getElementById("o-wins");
let playerTurn = "X";
let xWins = 0;
let oWins = 0;

for (const e of squareArr) {
  e.addEventListener("click", (event) => handleSquareClick(event));
}

function handleSquareClick(event) {
  let clickedSquare = event.target;

  if (clickedSquare.innerHTML == "") {
    clickedSquare.innerText = playerTurn;
    if (checkWinner() == false) checkDraw();
    changePlayer();
  }
}

function checkWinner() {
  let isGameOver = false;

  // 3 in a column

  for (let i = 0; i < 3; i++) {
    if (
      squareArr[i].innerText == playerTurn &&
      squareArr[i + 3].innerText == playerTurn &&
      squareArr[i + 6].innerText == playerTurn
    )
      isGameOver = true;
  }

  // 3 in a row
  for (let i = 0; i < 3; i++) {
    if (
      squareArr[i * 3].innerText == playerTurn &&
      squareArr[i * 3 + 1].innerText == playerTurn &&
      squareArr[i * 3 + 2].innerText == playerTurn
    )
      isGameOver = true;
  }

  // 3 diagonally
  if (
    squareArr[0].innerText == playerTurn &&
    squareArr[4].innerText == playerTurn &&
    squareArr[8].innerText == playerTurn
  )
    isGameOver = true;
  else if (
    squareArr[2].innerText == playerTurn &&
    squareArr[4].innerText == playerTurn &&
    squareArr[6].innerText == playerTurn
  )
    isGameOver = true;

  if (isGameOver) showWinner();
  return isGameOver;
}

function checkDraw() {
  let isDraw = true;

  for (const e of squareArr) {
    if (e.innerText == "") isDraw = false;
  }

  if (isDraw) showDraw();
}

function showWinner() {
  winnerText.innerText = "Player " + playerTurn + " has won!";
  gameOverDiv.style.display = "block";

  if (playerTurn == "X") xWins++;
  else oWins++;

  updateScore();
}

function showDraw() {
  winnerText.innerText = "Game is a draw!";
  gameOverDiv.style.display = "block";
}

function changePlayer() {
  playerTurn = playerTurn == "X" ? "O" : "X";
}

function handlePlayAgain() {
  // hide game over div
  gameOverDiv.style.display = "none";

  // clear board
  for (const e of squareArr) {
    e.innerText = "";
  }
}

function updateScore() {
  xWinsText.innerText = xWins;
  oWinsText.innerText = oWins;
}
