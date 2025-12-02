const tabControls = document.querySelector('.tab-controls');



    // '.tab-controls__link--active' add bg for button
    // '.tab-conent--show' Show tab content

const changeTab = (event) => {
    event.preventDefault();

    const target = event.target; 

    const button = target.classList.contains('tab-controls__link');
    const link = target.closest('.tab-controls__link');
    const linkHref = link.getAttribute('href');

    const buttonModifire = target.classList.contains('.tab-controls__link--active');
    

    


    console.log(target.classList.contains('tab-controls__link'));
    console.log(buttonModifire);


    
}



tabControls.addEventListener('click', changeTab);


const switchTab = (event) => {

    event.preventDefault();

    const tabControl = event.target.closest('.tab-controls__link');
    
    

    if (!tabControl) {
        return
    }
    if (tabControl.classList.contains('.tab-controls__link--active'))
    {
        return
    }
    
        const tabContentId = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentId);
        const activeControl =  document.querySelector('.tab-controls__link--active');
        const activeContent = document.querySelector('.tab-conent--show');

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active');
        }
        if (activeContent) {
            activeContent.classList.remove('tab-conent--show');
        }

        tabControl.classList.add('tab-controls__link--active');
        tabContent.classList.add('tab-conent--show')
        


    // document.querySelector('.tab-conent--show').classList.remove('tab-conent--show');
    // document.querySelector(tabContentId).classList.add('tab-conent--show');
    
    
    // document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active');
    // tabControl.classList.add('tab-controls__link--active');

    // tabContent.classList.add('tab-conent--show')

        


}


tabControls.addEventListener('click', switchTab)