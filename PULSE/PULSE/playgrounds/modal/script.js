console.log("Js file has been loaded");

const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".modal__close-btn");
const modal = document.querySelector(".modal");

function closeModal() {
  modal.classList.remove("modal--open");
  document.body.classList.remove("body--no-scroll");
}

function openModal() {
  modal.classList.add("modal--open");
  document.body.classList.add("body--no-scroll");
  closeButton.focus();
}

openButton.addEventListener("click", () => {
  openModal();

  closeButton.addEventListener("click", () => {
    closeModal();
    openButton.focus();
  });

  handlerCloseClick();
  function handlerCloseClick() {
    document.addEventListener("click", e => {
      const target = e.target;
      console.log("Элемент по которому нажали ", target);

      const hasOverLay = target.classList.contains("modal__overlay");

      if (hasOverLay) {
        closeModal();
      }

      document.addEventListener("keydown", event => {
        const isEscape = event.key === "Escape";

        if (isEscape) {
          closeModal();
        }
      });
    });
  }
});
