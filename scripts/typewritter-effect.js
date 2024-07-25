let sentences = [
  "Hi, I am Rastko.",
  "I'm a Front-End Developer.",
  "I love to code websites and web apps.",
  "Let's build together!",
];

let headingElement = document.querySelector("h1");
let blinkingCursor = document.querySelector(".blinking-cursor");

let headingTextNode = document.createTextNode("");

let currentSentenceIndex = 0;
let characterIndex = 0;
let elementContent = "";

/* Start from the first sentence */
let sentence = sentences[currentSentenceIndex];

let writeTimeoutId;
let isWriting = false;
let deleteTimeoutId;
let isDeleting = false;

function writeSentence() {
  if (isDeleting) {
    return;
  }

  let sentenceArr = sentence.split("");

  if (characterIndex < sentence.length) {
    elementContent += sentenceArr[characterIndex];
    headingTextNode.textContent = elementContent;
    headingElement.insertBefore(headingTextNode, blinkingCursor);
    characterIndex++;
  } else {
    stopWriting();
  }
  writeTimeoutId = setTimeout(writeSentence, 50);
}

function startWriting() {
  if (!isWriting) {
    isWriting = true;
    writeSentence();
  }
}

function stopWriting() {
  if (isWriting) {
    isWriting = false;
    clearTimeout(writeTimeoutId);
  }
}

let currentContent;
function deleteSentence() {
  if (isWriting) {
    return;
  }

  currentContent = headingElement.textContent;
  let headingNotEmpty = currentContent.length > 1;
  if (headingNotEmpty) {
    currentContent = currentContent.substring(0, currentContent.length - 2);
    headingTextNode.textContent = currentContent;
    headingElement.insertBefore(headingTextNode, blinkingCursor);
  } else {
    stopDeleting();
  }

  deleteTimeoutId = setTimeout(deleteSentence, 50);
}

function startDeleting() {
  if (!isDeleting) {
    isDeleting = true;
    deleteSentence();
  }
}

function stopDeleting() {
  if (isDeleting) {
    isDeleting = false;
    clearTimeout(deleteTimeoutId);
  }
}

function resetVariables() {
  characterIndex = 0;
  elementContent = "";
  sentence = sentences[currentSentenceIndex];
}

function typeWritterEffect() {
  resetVariables();
  startWriting();
  if (currentSentenceIndex < sentences.length - 1) {
    currentSentenceIndex++;
  } else {
    currentSentenceIndex = 0;
  }
  setTimeout(startDeleting, 4000);
  setTimeout(typeWritterEffect, 7000);
}

function initTypeWritterEffect() {
  typeWritterEffect();
}

export { initTypeWritterEffect };
