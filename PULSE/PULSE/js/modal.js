const modalIcon = document.querySelector('.about__img-button');
const modalWindow = document.querySelector('.modal');




const openModal = (event) => {
    event.preventDefault();
    document.body.classList.add('body--opened-modal');
}


const closeModal = (event) => {
    event.preventDefault();
    
    const target = event.target;
    if ( target.closest('.modal__cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal');
    }
}


modalIcon.addEventListener('click', openModal);
modalWindow.addEventListener('click', closeModal);




