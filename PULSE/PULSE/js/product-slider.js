export const sizesSlider = () => {
  new Swiper(".swiper", {
    direction: "vertical",

    loop: true,
    // autoHeight: true,

    slidesPerView: 1,
    // centeredSlides: true,

    pagination: {
      el: ".product__pagination-list",
      type: "bullets",
      clickable: true,

      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },

    mousewheel: {
      forceToAxis: true,
      mousewheel: true,
    },
  });

  console.log("Swiper init");
};

const inintHorizontal = () => {
  console.log("Directon has been changed to horizontal");
};

