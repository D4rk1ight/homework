export const sizesSlider = () => {
  new Swiper(".product__slider", {
    direction: "vertical",
    loop: true,

    slidesPerView: "auto",
    centeredSlides: true,

    navigation: {
      prevEl: ".product__slider-button--prev",
      nextEl: ".product__slider-button--next",
    },

    mousewheel: {
      forceToAxis: true,
    },
  });
};
