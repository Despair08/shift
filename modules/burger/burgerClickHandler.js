import { openMobileNavMenu } from './openMobileNavMenu.js'

const burgerBtn = document.querySelector('.burger__menu');

const burgerClickHandler = () => {
    burgerBtn.addEventListener('click', openMobileNavMenu);
}

export { burgerClickHandler, burgerBtn}