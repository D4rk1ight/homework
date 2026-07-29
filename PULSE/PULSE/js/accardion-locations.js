console.log("accordion location has been init");

const accordion = document.querySelector(".accordion");
const accordionItem = document.querySelectorAll(".accordion__item");

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

accordionItem.forEach(accordionButton => {
  accordionButton.addEventListener("click", () => {
    accordionButton.classList.toggle("is--open");
  });
});


//  Вошел в область аккардиона сменил его бг



