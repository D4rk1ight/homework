// (function () {

//     document.addEventListener('click', burgerInit);

//     function burgerInit (e) {

//         const target = e.target;
//         console.log(target);

//     }




// }
// ) ()

// const body = document.querySelector('body');

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