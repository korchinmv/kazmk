const buttonMenu = document.querySelector(".burger");
const menuActive = document.querySelector(".header__menu");

buttonMenu.addEventListener("click", () => {
  menuActive.classList.toggle("header__menu--active");
  buttonMenu.classList.toggle("burger--active");
});
