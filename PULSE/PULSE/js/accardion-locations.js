console.log("accordion location has been init");

const accordion = document.querySelector(".accordion");
const accordionButton = document.querySelectorAll(".accordion__button");

accordionButton.forEach(button => {
  button.addEventListener("click", event => {
    const clickedButton = event.currentTarget;

    const clickedItem = clickedButton.closest(".accordion__item");

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

// document.addEventListener("click", event => {
//   let target = event.currentTarget;

//   console.log(target);
// });

//  Вошел в область аккардиона сменил его бг

// document.addEventListener("mousemove", e => {
//   targetX = e.clientX;
//   targetY = e.clientY;
//   console.log(`${targetX} ${targetY}`);

//   if (targetX > 50 && targetY > 100) {
//     console.log("AHHH, YOU GOT ME!");
//     e.stopPropagation();
//   }

//   return;
// });

// Поймать заданную область и убрать слушатель

// function handelMouseMove(event) {
//   const targetX = event.clientX;
//   const targetY = event.clientY;
//   console.log(`${targetX} ${targetY}`);

//   const isInsideArea =
//     targetX >= 400 && targetX <= 450 && targetY >= 400 && targetY <= 450;

//   if (isInsideArea) {
//     console.log("Попался");
//     document.removeEventListener("mousemove", handelMouseMove);
//   }
// }

// document.addEventListener("mousemove", handelMouseMove);
