const openButton = document.querySelector(".header__burger");

const burger = document.querySelector(".burger");
const headerNav = document.querySelector("#header__menu");

openButton.addEventListener("click", () => {
  headerNav.classList.toggle("header__menu--open");
  burger.classList.toggle("burger--open");
});

// burger.addEventListener("click", (e) => {
//   const target = e.target;

//   if (target.classList.contains === headerNav) {
//     headerNav.classList.toggle("header__menu--open");
//     burger.classList.toggle("burger--open");
//   }
// });

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
