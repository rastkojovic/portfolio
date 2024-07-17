function toggleHamburgerMenu() {
    let navItems = document.getElementById("my-links");
    let hamburgerIcon = document.getElementById("hamburger-icon");

    if (navItems.classList.contains("show")) {
        hamburgerIcon.innerHTML = "☰";
        navItems.classList.remove("show");
    } else  {
        hamburgerIcon.innerHTML = "✖";
        navItems.classList.add("show");
    } 

}