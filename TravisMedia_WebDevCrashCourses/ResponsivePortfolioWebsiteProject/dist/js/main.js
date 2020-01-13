// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-nav");
const menuNav = document.querySelector(".menu-branding");
const menuNavItems = document.querySelectorAll(".nav-item");

// Set initial menu state - open or closed state
// let variable so it is updateable
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    menuNavItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNavItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}
