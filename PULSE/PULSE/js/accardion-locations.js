console.log("accordion location has been init");

const accordionItem = document.querySelectorAll(".accordion__item");

accordionItem.forEach(accordionButton => {
  accordionButton.addEventListener("click", () => {
    accordionButton.classList.toggle("is--open");
  });
});
