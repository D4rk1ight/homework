import BurgerMenu from "./burger.js";
import { productSlider } from "./product-slider.js";
import { modal } from "./modal.js";
import { tabs } from "./tabs.js";
import { accordion } from "./accordion.js";

const initModule = (name, callback) => {
  try {
    callback();
    console.log(`The module ${name} has been initiated`);
    return;
  } catch (error) {
    console.error(`${name}:`, error);
  }
};

function muteLightboxVideo(galleryName) {
  const lightBoxInstance = fsLightboxInstances[galleryName];

  lightBoxInstance.props.onOpen = function () {
    const video = document.querySelector(".fslightbox-container video");

    video.muted = true;
  };
}

initModule("Mute first gallery video", () => muteLightboxVideo("gallery-one"));

initModule("Burger Menu", () => {
  new BurgerMenu({
    BURGER: "burger",
    BURGER_OPEN: "burger--open",
    HEADER_MENU: "header__menu",
    HEADER_MENU_OPEN: "header__menu--open",
    LABEL: {
      OPEN: "Открыть меню",
      CLOSE: "Закрыть меню",
    },
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    MENU_LINK: "menu__link",
    BREAKPOINT: 1024,
    MAIN: "main",
  });
});

initModule("Product Modal", modal);

initModule("Product slider", productSlider);

initModule("Tabs", tabs);

initModule("Accordion", accordion);
