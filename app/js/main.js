//BURGER
const buttonBurger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__link");

buttonBurger.addEventListener("click", () => {
  menu.classList.toggle("header__menu--active");
  buttonBurger.classList.toggle("burger--active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    menu.classList.remove("header__menu--active");
    buttonBurger.classList.remove("burger--active");
  });
});

//LINK - SCROLL
const links = document.querySelectorAll(
  "a.header__link, a.hero__ancor, a.header__logo, a.button-back"
);

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let topOffset;
    if (getComputedStyle(buttonBurger).display == "none") {
      topOffset = 90;
    } else {
      topOffset = 150;
    }
    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
