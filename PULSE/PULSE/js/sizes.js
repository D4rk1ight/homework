// const allSizesButton = document.querySelectorAll(".product__sizes-button");

// const sizesList = document.querySelector(".product__sizes-list");

// sizesList.addEventListener("click", e => {
//   const target = e.target;

//   if (!target.classList.contains("product__sizes-button")) return;

//   allSizesButton.forEach(button => {
//     button.classList.remove("product__sizes-button--accent");
//   });

//   target.classList.add("product__sizes-button--accent");
// });

export const sizes = () => {
  const allSizesButton = document.querySelectorAll('[data-sizes="button"]');
  const sizesList = document.querySelector('[data-sizes="list"]');

  const handleSizeClick = event => {
    const target = event.target;
    if (!target.classList.contains("product__sizes-button")) return;

    allSizesButton.forEach(button =>
      button.classList.remove("product__sizes-button--accent"),
    );

    target.classList.add("product__sizes-button--accent");
  };

  sizesList.addEventListener("click", handleSizeClick);
};

// if (target.classList.contains("product__sizes-button--accent")) {
//     target.classList.remove("product__sizes-button--accent");
//   } else {
//     target.classList.add("product__sizes-button--accent");
//   }

//   // if (target.classList.contains("product__sizes-button--accent")) {
//   //   target.classList.toggle("product__sizes-button--accent");
//   // } else {
//   //   target.classList.add("product__sizes-button--accent");
//   // }
