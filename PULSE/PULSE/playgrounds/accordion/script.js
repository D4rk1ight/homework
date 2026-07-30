console.log("js file has been init");

const accordion = document.querySelector(".accordion");

const accordionButton = document.querySelectorAll(".accordion__button");

accordionButton.forEach(button => {
  button.addEventListener("click", event => {
    const clickedButton = event.currentTarget;
    console.log(" Это target", clickedButton);

    const clickedItem = clickedButton.closest(".accordion__item");
    // const accordionItem = target.parentElement;

    console.log("Это родительский элемент таргета ", clickedItem);

    const openedItem = accordion.querySelector(".accordion__item.is--open");

    if (openedItem && openedItem !== clickedItem) {
      openedItem.classList.remove("is--open");
    }

    clickedItem.classList.toggle("is--open");

    const isOpen = clickedItem.classList.contains("is--open");

    clickedButton.setAttribute("aria-expanded", String(isOpen));

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
