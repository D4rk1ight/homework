
const burgerStart = (event) => {
    const target = event.target;
    
    const burgerIcon = target.closest('.burger-icon');
    const burgerNavlink = target.closest('.nav__link'); 
    const windowWidht = document.documentElement.clientWidth;

    if (!burgerIcon && !burgerNavlink || windowWidht > 900) {
        return; 
    }
    else if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu');
        }
    else   {
        document.body.classList.remove('body--opened-menu');
        }
    
}

document.addEventListener('click', burgerStart);

  // gallery slaider
  new Swiper('.gallery__slider', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  spaceBetween: 15,
  slidesPerView: 1.5,

  // If we need pagination
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },

  breakpoints: {
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      },
    },

});

  new Swiper('.testimonials__slider', {
  direction: 'horizontal',
  spaceBetween: 0,
  initialSlide: 1,
  slidesPerView: 1,
  centeredSlides: true, 
  
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },


  breakpoints: {
      901: {
        slidesPerView: 1.5,
      },
      1201: {
        slidesPerView: 2.1,
      },
    },
});

const telInput = document.querySelectorAll('input[type="tel"]');

const im = new Inputmask('+7 (999) 999-99-99');

im.mask(telInput);













// const burgerMenu = document.querySelector('.burger-icon');
// const nav = document.querySelectorAll('nav__item');


// const openMenu = (target) => {
//     document.body.classList.toggle('body--opened-menu');
    
//     if (target === nav) {
//     nav.classList.remove('body--opened-menu');
//     }
// } 

// burgerMenu.addEventListener('click', openMenu);


// function delHint (link) {
// link.forEach(link => {
//     link.removeAttribute('title');
// });
// }

// button.addEventListener('mouseover', delHint);


// const playIt = event => {
//     const target = event.target;
//     if (target == video) {
//     video.classList.toggle('video__on');
//     } 
// }
// button.addEventListener('click', playIt);