console.log("js file has been init");

const accordion = document.querySelector(".accordion");

const accordionItem = document.querySelectorAll(".accordion__item");

accordionItem.forEach(accordionButton => {
  accordionButton.addEventListener("click", event => {
    const target = event.currentTarget;
    console.log(" На это кликнули ", target);

    const openedElement = accordion.querySelector(".accordion__item.is--open");

    if (openedElement && openedElement !== target) {
      openedElement.classList.remove("is--open");
    }

    target.classList.toggle("is--open");
    // console.log(" Открытый пункт ", openedElement);
    // const hasModifier = target.classList.contains("is--open");
    // console.log("Имеет модификатор ", hasModifier);

    // console.log(target === openedElement);

    // console.log(target.classList.contains("accordion__item"));

    // if (!hasModifier) {
    //   target.classList.add("is--open");
    // } else {
    //   target.classList.remove("is--open");
    // }

    // if (openedElement.matches(".accordion__item.is--open")) {
    //   openedElement.classList.remove("is--open");
    // }

    // if (openedElement.matches(".accordion__item.is--open") && !target) {
    //   openedElement.classList.remove("is--open");
    // } else {
    //   target.classList.add("is--open");
    // }
  });
});
