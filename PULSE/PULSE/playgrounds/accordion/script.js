console.log("js file has been init");

const accordion = document.querySelector(".accordion");

const accordionItem = document.querySelectorAll(".accordion__item");

accordionItem.forEach(accordionButton => {
  accordionButton.addEventListener("click", event => {

    const target = event.currentTarget;


    console.log(target)


  });
});
