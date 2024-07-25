function toggleHamburgerMenu() {
  let navigationMenu = document.querySelector("#my-links");
  let hamburgerIcon = document.querySelector("#hamburger-icon");

  switch (hamburgerIcon.textContent) {
    case "☰":
      hamburgerIcon.textContent = "✖";
      break;
    case "✖":
      hamburgerIcon.textContent = "☰";
  }

  navigationMenu.classList.toggle("show");
}

function initHamburgerMenu() {
  document.querySelectorAll("#my-links a").forEach((element) => {
    element.addEventListener("click", toggleHamburgerMenu);
  });
  document
    .querySelector("#hamburger-icon")
    .addEventListener("click", toggleHamburgerMenu);
}

export { initHamburgerMenu };
