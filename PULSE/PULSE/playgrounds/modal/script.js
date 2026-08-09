console.log("Js file has been loaded");

const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".modal__close-btn");
const modal = document.querySelector(".modal");

function closeModal() {
  modal.classList.remove("modal--open");
  document.body.classList.remove("body--no-scroll");
  openButton.focus();
}

function openModal() {
  modal.classList.add("modal--open");
  document.body.classList.add("body--no-scroll");
  closeButton.focus();
}

openButton.addEventListener("click", () => {
  openModal();
});

closeButton.addEventListener("click", () => {
  closeModal();
});

const modalOverlay = document.querySelector(".modal__overlay");

modalOverlay.addEventListener("click", e => {
  closeModal();
});

document.addEventListener("keydown", event => {
  const isEscape = event.key === "Escape";
  const isModalOpen = modal.classList.contains("modal--open");

  function focusTrap() {
    const isTab = event.key === "Tab";
    const isShiftTab = event.shiftKey && event.key === "Tab";
    const isOnlyTab = isTab && !isShiftTab;

    const modalButtons = modal.querySelectorAll("button, input");

    const modalFirstButton = modalButtons[0];
    const modalLastButton = modalButtons[modalButtons.length - 1];

    if (isOnlyTab && document.activeElement === modalLastButton) {
      event.preventDefault();
      modalFirstButton.focus();
    }

    if (document.activeElement === modalFirstButton && isShiftTab) {
      event.preventDefault();
      modalLastButton.focus();
    }
  }

  if (isModalOpen) {
    if (isEscape) {
      closeModal();
      return;
    }
    focusTrap();
  }
});
