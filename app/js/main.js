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

//BUTTON SCROLL TO TOP
const buttonBack = document.querySelector(".button-back");
const heroBlock = document.querySelector(".hero__wrapper");

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= heroBlock.offsetHeight) {
    buttonBack.style.opacity = 1;
  } else {
    buttonBack.style.opacity = 0;
  }
});

//ACTIVE MENU
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    menuLinks.forEach((link) => link.classList.remove("header__link_active"));
    e.target.classList.add("header__link_active");
  });
});

//SEND FORM
const SERVICE_ID = "service_zvkbmhw";
const TEMPLATE_ID = "template_0himd2l";
const messageForm = document.querySelector(".email-form");
const formButton = document.querySelector(".button-submit");
const confirm = messageForm.querySelector(".email-form__confirm");

const showConfirm = (element) => {
  element.style.opacity = "1";
  element.style.visibility = "visible";
};

const hideConfirm = (element) => {
  element.style.opacity = "0";
  element.style.visibility = "hidden";
  element.classList.remove("email-form__confirm_fail");
  element.classList.remove("email-form__confirm_ok");
};

const sendEmail = () => {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    tel: document.getElementById("tel").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, params)
    .then(() => {
      messageForm.reset();
      confirm.textContent = "Сообщение успешно отправлено!";
      confirm.classList.add("email-form__confirm_ok");
      showConfirm(confirm);
    })
    .catch((err) => {
      confirm.textContent = "Сообщение не отправлено!";
      confirm.classList.add("email-form__confirm_fail");
      showConfirm(confirm);
      console.log(err);
    });
};

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});

confirm.addEventListener("click", () => {
  hideConfirm(confirm);
});
