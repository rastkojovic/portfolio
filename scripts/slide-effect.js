let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dotNavigationMenu = document.querySelector(".dot-navigation-menu");

displayCurrentSlideDot(slideIndex);

function plusSlides(direction) {
  switch (direction) {
    case "right":
      slideIndex++;
      break;
    case "left":
      slideIndex--;
  }
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
}

function clearOthers() {
  slides[slideIndex].style = "display: flex;";
  for (let i = 0; i < slides.length; i++) {
    if (i != slideIndex) {
      slides[i].classList.remove("slide-right", "slide-left");
      slides[i].style = "display: none;";
    }
  }
}

function slide(direction) {
  plusSlides(direction);
  slides[slideIndex].classList.add(`slide-${direction}`);
  clearOthers();
  displayCurrentSlideDot(slideIndex);
}

let selectedSlideIndex;
function setPositionAndGoToSlide(index) {
  selectedSlideIndex = index;
  goToSlide();
}

function goToSlide() {
  if (selectedSlideIndex > slideIndex) {
    slide("right");
    setTimeout(goToSlide, 400);
  } else if (selectedSlideIndex < slideIndex) {
    slide("left");
    setTimeout(goToSlide, 400);
  }
  displayCurrentSlideDot(slideIndex);
}

function displayCurrentSlideDot(dotIndex) {
  for (let i = 0; i < dotNavigationMenu.children.length; i++) {
    dotNavigationMenu.children[i].classList.remove("color-transition");
  }

  dotNavigationMenu.children[dotIndex].classList.add("color-transition");
}

function initSlideEffect() {
  document.querySelector(".previous").addEventListener("click", () => {
    slide("left");
  });
  document.querySelector(".next").addEventListener("click", () => {
    slide("right");
  });

  let dotNavigationMenu = document.querySelectorAll(".dot-navigation-menu div");

  dotNavigationMenu.forEach((element, index) => {
    element.addEventListener("click", () => {
      setPositionAndGoToSlide(index);
    });
  });
}

export { initSlideEffect, slide };
