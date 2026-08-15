console.log("js file has been init");

const accordion = document.querySelector(".accordion");

const accordionButton = document.querySelectorAll(".accordion__button");

accordionButton.forEach(button => {
  button.addEventListener("click", event => {
    const clickedButton = event.currentTarget;
    console.log(" Это target", clickedButton);

    const clickedItem = clickedButton.closest(".accordion__item");


    console.log("Это родительский элемент таргета ", clickedItem);

    const openedItem = accordion.querySelector(".accordion__item.is--open");

    if (openedItem && openedItem !== clickedItem) {
      openedItem.classList.remove("is--open");

      const openedButton = openedItem.querySelector(".accordion__button");

      openedButton.setAttribute("aria-expanded", String(false));
    }

    clickedItem.classList.toggle("is--open");

    const isOpen = clickedItem.classList.contains("is--open");

    clickedButton.setAttribute("aria-expanded", String(isOpen));

  
  });
});
