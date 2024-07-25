import { initHamburgerMenu } from "./hamburger-menu-toggle.js";
import { initTypeWritterEffect } from "./typewritter-effect.js";
import { initTouchDetection } from "./touchscreen.js";

document.addEventListener("DOMContentLoaded", () => {
  initHamburgerMenu();
  initTypeWritterEffect();
  initTouchDetection();
});

document.addEventListener("visibilitychange", () => {
  location.reload();
});

document.addEventListener("contextmenu", (event) => {
   event.preventDefault();
})
