const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector("#hamburger-icon");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList.contains("fa-bars")) {
    // change to cross
    hamburgerIcon.classList.replace("fa-bars", "fa-xmark");
    menuList.style.display = "block";
  } else {
    // change to hamburger
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
    menuList.style.display = "none";
  }
});
