/* ===== VARIABLES ===== */

const computerMovesArray = [];
const playerMovesArray = [];
let level = 1;
let title = document.querySelector("h1");
let containerBox = document.querySelector(".container");
let gameOver = false;
const boxFadeInAnimationTimeout = 350;
const boxFadeInClassRemoveTimeout = 310;
const nextLevelTimeout = 1000;
const numberOfBoxes = 4;

/* ===== GAME MECHANICS ===== */

function initializeGame() {
  title.textContent = "Press Any Key to Start";

  document.addEventListener("keydown", () => {
    if (level === 1 || gameOver) {
      startGame();
    }
  });
}

initializeGame();

/* Initialize first level */

function startGame() {
  clearPlayerAndComputerMovesArrays();
  gameOver = false;
  document.querySelector("body").classList.remove("color-transition");
  level = 1;
  title.textContent = `Level ${level}`;
  makeRandomMove();
  containerBox.classList.remove("disabled");
}

function gameOverMechanic() {
  containerBox.classList.add("disabled");
  document.querySelector("body").classList.add("color-transition");
  playSoundEffect("./resources/sound-effects/game-over.mp3");
  title.innerHTML = "<strong>Game Over</strong>, Press Any Key to Restart";
  gameOver = true;
  clearPlayerAndComputerMovesArrays();
}

function nextLevel() {
  level++;
  title.textContent = `Level ${level}`;
  clearPlayerMovesArray();
  makeRandomMove();
}

function makeRandomMove() {
  animationCurrentIndex = 0;
  let nextMove = Math.floor(Math.random() * numberOfBoxes);
  computerMovesArray.push(nextMove);
  triggerBoxFadeinAnimation();
}

/* After every user input, check if game over or time to move to next level */

function checkIfLevelOrGameOver(playerMoveIndex) {
  if (
    computerMovesArray[playerMoveIndex] !== playerMovesArray[playerMoveIndex]
  ) {
    gameOverMechanic();
  } else if (computerMovesArray.toString() === playerMovesArray.toString()) {
    setTimeout(nextLevel, nextLevelTimeout);
  }
}

/* Add event listener to all the boxes to detect which box is clicked */

const boxes = document.querySelectorAll(".box");

for (
  let boxPlayerClickedOn = 0;
  boxPlayerClickedOn < boxes.length;
  boxPlayerClickedOn++
) {
  boxes[boxPlayerClickedOn].addEventListener("click", () => {
    playerMovesArray.push(boxPlayerClickedOn);
    triggerBoxVisualAndSoundEffect(boxPlayerClickedOn);
    const boxIndexInPlayerMovesArray = indexOfLastInstanceOfValue(
      boxPlayerClickedOn,
      playerMovesArray
    );
    checkIfLevelOrGameOver(boxIndexInPlayerMovesArray);
  });
}

/* ===== HELPER FUNCTIONS ===== */

function clearComputerMovesArray() {
  computerMovesArray.length = 0;
}

function clearPlayerMovesArray() {
  playerMovesArray.length = 0;
}

function clearPlayerAndComputerMovesArrays() {
  clearPlayerMovesArray();
  clearComputerMovesArray();
}

/* If the provided value is contained in the array, return the index of the last instance of this value */

function indexOfLastInstanceOfValue(targetValue, targetArray) {
  if (!targetArray.includes(targetValue)) {
    console.log("The provided value is not in the array!");
    return;
  }

  let indexOfLastInstanceOfValue;
  for (let i = 0; i < targetArray.length; i++) {
    if (targetArray[i] === targetValue) {
      indexOfLastInstanceOfValue = i;
    }
  }

  return indexOfLastInstanceOfValue;
}

/* ===== VISUAL AND SOUND EFFECTS ===== */

function playSoundEffect(source) {
  let soundEffect = new Audio(source);
  soundEffect.play();
}

function playMoveSoundEffect(index) {
  playSoundEffect(`./resources/sound-effects/move${index}.mp3`);
}

let animationCurrentIndex = 0; /* Objects are passed by reference and can therefore be updated across modules */
function triggerBoxFadeinAnimation() {
  if (animationCurrentIndex < computerMovesArray.length) {
    let currentMove = computerMovesArray[animationCurrentIndex];
    triggerBoxVisualAndSoundEffect(currentMove);
    animationCurrentIndex++;
    setTimeout(triggerBoxFadeinAnimation, boxFadeInAnimationTimeout);
  }
}

function triggerBoxVisualAndSoundEffect(index) {
  let currentBox = document.querySelector(`.box:nth-of-type(${index + 1})`);
  currentBox.classList.add("fadein");
  playMoveSoundEffect(index);
  setTimeout(() => {
    currentBox.classList.remove("fadein");
  }, boxFadeInClassRemoveTimeout);
}
