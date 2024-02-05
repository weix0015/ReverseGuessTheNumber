"use strict";

// eventListener for start button
// disable all buttons except start
// disable all buttons after click on
window.addEventListener("load", function() {
  document.getElementById("start").addEventListener("click", startGame);
  document.getElementById("correct").addEventListener("click", correctGuess);
  document.getElementById("smaller").addEventListener("click", guessSmall);
  document.getElementById("higher").addEventListener("click", guessHigher);
  disableButtons();
});

// number from 1 - 100
let min = 1;
let max = 100;
let start = min;
let end = max;

// guess using binary search
let guess = Math.floor((start + end) / 2);

// check if game won
let gameWon = false;

// generate random number after click on start button
// disable start button after clicking on it / hide start button
function startGame() {
  console.log("Javascript is running");
  document.getElementById("result").innerText = "";
  guess = Math.floor((start + end) / 2);
  displayGuess();
  // disable start buttons after clicking start / hide start button
  document.getElementById("start").style.display = "none";
  enableButtons();
}

// guess smaller
function guessSmall() {
  if (!gameWon) {
    end = guess - 1;
    guess = Math.floor((start + end) / 2);
    displayGuess();
  }
}

// guess higher
function guessHigher() {
  if (!gameWon) {
    start = guess + 1;
    guess = Math.floor((start + end) / 2);
    displayGuess();
  }
}

// guess correct
function correctGuess() {
  gameWon = true;
  document.getElementById("result").innerText = "Congratulations! Computer finally guessed the number!";
  disableButtons();
}

// display guess number
function displayGuess() {
  document.getElementById("result").innerText = `I'm guessing ${guess}`;
}

// disable buttons before clicking start / hide them
function disableButtons() {
  document.getElementById("correct").style.display = "none";
  document.getElementById("smaller").style.display = "none";
  document.getElementById("higher").style.display = "none";
  document.getElementById("correct").style.display = "none";
}

// enable buttons after click start / show them
function enableButtons() {
  document.getElementById("smaller").style.display = "inline-block";
  document.getElementById("higher").style.display = "inline-block";
  document.getElementById("correct").style.display = "inline-block";
}