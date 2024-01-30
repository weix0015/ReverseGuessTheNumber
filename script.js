"use strict";

// eventListener for start button
// disable all buttons except start
// disable all buttons after click on
window.addEventListener("load", function() {
  document.getElementById("start").addEventListener("click", start);
  document.getElementById("correct").addEventListener("click", correctGuess);
  document.getElementById("smaller").addEventListener("click", guessSmall);
  document.getElementById("higher").addEventListener("click", guessHigher);
  disableButtons();
});

// number from 1 - 100
let min = 1;
let max = 100;

// random guess
let guess;

// check if game won
let gameWon = false;

// generate random number after click on start button
// disable start button after clicking on it / hide start button
function start() {
  console.log("Javascript is running");
  document.getElementById("result").innerText = "";
  guess = Math.floor(Math.random() * (max - min) + min);
  displayGuess();
  // disable start buttons after clicking start / hide start button
  document.getElementById("start").style.display = "none";
  enableButtons();
}

// guess smaller
function guessSmall() {
  if (!gameWon) {
    // random number lower than previous guess - lowest 1
    max = guess - 1;
    guess = Math.floor(Math.random() * (max - min + 1) + min);
    displayGuess();
  }
}

// guess higher
function guessHigher() {
  if (!gameWon) {
    // random number higher than previous guess - max 100
    min = guess + 1;
    guess = Math.floor(Math.random() * (max - min) + min);
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