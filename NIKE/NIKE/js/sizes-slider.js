export const sizesSlider = () => {
  new Swiper(".sizes__slider", {
    // direction: "horizontal",
    loop: true,

    slidesPerView: "auto",
    centeredSlides: true,

    navigation: {
      prevEl: ".sizes__slider-button--prev",
      nextEl: ".sizes__slider-button--next",
    },

    mousewheel: {
      forceToAxis: true,
    },
  });
};
