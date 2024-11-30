const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

// Tambahkan event listener pada hamburger menu
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
  //   console.log("Hamburger clicked!");
});

// klik diluar sidebar biar ilang nav
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// console.log(hamburgerMenu);
// console.log(navbarNav);
