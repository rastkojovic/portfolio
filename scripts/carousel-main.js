let slideNumber = 0;
let slides = document.getElementsByClassName("slide");
let dotNavigationMenu = document.querySelector(".dot-navigation-menu");
showSlides(slideNumber);

function displayCurrentSlideDot(dotIndex) {
  for (let i = 0; i < dotNavigationMenu.children.length; i++) {
    dotNavigationMenu.children[i].classList.remove("color-transition");
    void dotNavigationMenu.children[i].offsetWidth;
  }

  console.log(`Adding class to: ${dotNavigationMenu.children[dotIndex]}!`);
  dotNavigationMenu.children[dotIndex].classList.add("color-transition");
}

function plusSlides(increment) {
  slideNumber += increment;
  if (slideNumber > slides.length - 1) {
    slideNumber = 0;
  }

  if (slideNumber < 0) {
    slideNumber = slides.length - 1;
  }
  showSlides(slideNumber);
}

function showSlides(slideIndex) {
  slideNumber = slideIndex;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "flex";
  displayCurrentSlideDot(slideIndex);
}

/* export { plusSlides, slideNumber }; */
