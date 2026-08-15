export const sizesSlider = () => {
  new Swiper(".swiper", {
    direction: "vertical",

    loop: true,
    autoHeight: true,

    slidesPerView: 1,

    breakpoints: {
      375: {
        direction: "horizontal",
      },
      1172: {
        direction: "vertical",
      },
    },

    pagination: {
      el: ".product__pagination-list",
      type: "bullets",
      clickable: true,

      renderBullet: function (index, className) {
        return `<button class="${className}"
        type="button"
        aria-label="Перейти к слайду ${index + 1}" >${index + 1}</button>`;
      },
    },

    navigation: {
      nextEl: ".product__slider-button--next",
      prevEl: ".product__slider-button--prev",
    },

    mousewheel: {
      forceToAxis: true,
      mousewheel: true,
    },
  });
};
