import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import { sizesSlider } from "./product-slider.js";
import { sizes } from "./sizes.js";
import { tabs } from "./tabs.js";
import { accordion } from "./accardion-locations.js";

// const initModule = (name, callback) => {
//   try {
//     console.log(`The module ${name} has been initd`);
//     return callback();
//   } catch (error) {
//     console.error(`${name}:`, error);
//     return null;
//   }
// };

const initModule = (name, callback) => {
  try {
    console.log(`The module ${name} has been initiated`);
    return callback();
  } catch (error) {
    console.log(error);
    
  }
};

const headerFixed = initModule(
  "HeaderFixed",
  () =>
    new HeaderFixed({
      HEADER: "header",
      HEADER_FIXED: "header--fixed",
    }),
);

initModule("BurgerMenu", () => {
  return new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 1024,
      MAIN: "main",
    },
    headerFixed,
  );
});

initModule("Product slider", sizesSlider);

initModule("Tabs", tabs);

initModule("Accordion", accordion);
initModule("Accordion", accordion);
