let slideNumber = 0;
showSlides(slideNumber);

function plusSlides(n) {
  slideNumber += n;
  showSlides(slideNumber);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length - 1) {
    slideNumber = 0;
  }

  if (n < 0) {
    slideNumber = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideNumber].style.display = "flex";
}

function autoCarousel() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideNumber++;
  if (slideNumber > slides.length) {
    slideNumber = 1;
  }

  slides[slideNumber - 1].style.display = "flex";

  setTimeout(autoCarousel, 3000);
}
