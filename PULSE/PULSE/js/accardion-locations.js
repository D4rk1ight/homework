console.log("accordion location has been init");

const accordion = document.querySelector(".accordion");
const accordionItem = document.querySelectorAll(".accordion__item");


document.addEventListener('click', (e)=> {
  
  target = e.target; 

  console.log(target.classList)

})

accordionItem.forEach(accordionButton => {
  accordionButton.addEventListener("click", () => {
    accordionButton.classList.toggle("is--open");
  });
});
