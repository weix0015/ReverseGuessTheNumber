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
let min = 0;
let max = 100;
let start = min;
let end = max;

// guess using binary search
let guess = Math.floor((start + end) / 2);

// check if game won
let gameWon = false;

// remaning options
let remainingOptions = max - min + 1;

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
  if (!gameWon && guess > start) {
    end = guess - 1;
    remainingOptions = end - start + 1;
    guess = Math.max(start + 1, Math.floor((start + end) / 2));
    displayGuess();
    checkRemainingOptions();
  }
}

// guess higher
function guessHigher() {
  if (!gameWon) {
    start = guess + 1;
    remainingOptions = end - start + 1;
    guess = Math.floor((start + end) / 2);
    displayGuess();
    checkRemainingOptions();
  }
}

// check if only 1 option remaining
function checkRemainingOptions() {
  const lastGuess = remainingOptions === 1 ? (guess === min ? min : (guess === max ? max : guess)) : null;
  
  if (lastGuess !== null) {
    document.getElementById("result").innerText = `I'm out of options! The number is: ${lastGuess}`;
    disableButtons();
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

// binary search with while loop
const values = [1,2,3,5,7,8,9,11,12,14,15];

function binarySearch( value, values ) {
	let start = 0, end = values.length -1, iterations = 0;

  const maxIterations = Math.ceil(Math.log2(values.length));

  while (start <= end && iterations < maxIterations) {
  let middle = Math.floor((start + end) / 2);
  console.log(`start=${start}, middle=${middle}, end=${end}`);

  if (value === values[middle]) return middle;
  value > values[middle] ? start = middle + 1 : end = middle - 1;
    start = middle + 1;
  }
  return -1;
}

console.log(binarySearch(8, values));
console.log(binarySearch(10, values));

// binary search with compare function
function binarySearchFunction(value, values, compare) {
  let start = 0, end = values.length -1, iterations = 0;

  const maxIterations = Math.ceil(Math.log2(values.length));

  while (start <= end && iterations < maxIterations) {
    let middle = Math.floor((start + end) / 2);

    const comparisonResult = compare(value, values[middle]);

    if (comparisonResult === 0) return middle;
    if (comparisonResult === 1) start = middle + 1;
    else end = middle - 1;

    iterations++;
  }
  return -1;
}

// comparing strings
function stringCompare(search, check) {
  return search.localeCompare(check, "da");
}

// comparing object
function nameCheck(search, check) {
  return search.localeCompare(check.name);
}

// test strings
const ordliste = ["andedam", "andegård", "bondefanget", 
"bondegård", "børnearbejde", "gadefejer", "gær", 
"gødning", "gaardejer", "kalapøjser", "kalundborg", 
"kørt", "kårde", "ålborg", "aarhus"];
console.log(binarySearchFunction("gaardejer", ordliste, stringCompare));

// test with objects
const persons = [{ name: "Draco Malfoy", house: "Slytherin" }, 
{ name: "Harry Potter", house: "Gryffindor" }, 
{ name: "Hermione Granger", house: "Gryffindor" }, 
{ name: "Neville Longbottom", house: "Gryffindor" }, 
{ name: "Ron Weasley", house: "Gryffindor" }];
console.log(binarySearchFunction("Ron Weasley", persons, nameCheck));


// binary search recursive
function binarySearchRecursive(value, values, start, end) {
  if (start > end) return -1;

  let middle = Math.floor((start + end) / 2);

  return value === values[middle] ? middle :
         value > values[middle] ? binarySearchRecursive(value, values, middle + 1, end) :
         binarySearchRecursive(value, values, start, middle - 1);
}

console.log(binarySearchRecursive(8, values, 0, values.length -1));
console.log(binarySearchRecursive(10, values, 0, values.length -1));