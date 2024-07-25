import { initSlideEffect, slide } from "./slide-effect.js";

let startX;

function getStartX(event) {
  startX = event.touches[0].clientX;
}

function detectDirectionAndMove(event) {
  let deltaX = event.changedTouches[0].clientX - startX;

  /* Prevent accidental swipe */
  if (Math.abs(deltaX) < 100) {
    return;
  }

 /* Check direction and move appropriately */
  if (deltaX < 0) {
    slide("right");
  } else if (deltaX > 0) {
    slide("left");
  }
}

function initTouchDetection() {
  initSlideEffect();
  document.querySelector("#projects").addEventListener("touchstart", getStartX);
  document
    .querySelector("#projects")
    .addEventListener("touchend", detectDirectionAndMove);
}

export { initTouchDetection };
