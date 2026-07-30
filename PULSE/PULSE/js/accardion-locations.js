console.log("accordion location has been init");

const accordion = document.querySelector(".accordion");
const accordionItem = document.querySelectorAll(".accordion__item");

accordionItem.forEach(accordionButton => {
  accordionButton.addEventListener("click", event => {
    const target = event.currentTarget;

    const openedItem = accordion.querySelector(".accordion__item.is--open");

    if (openedItem && openedItem !== target) {
      openedItem.classList.remove("is--open");
    }

    target.classList.toggle("is--open");
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
