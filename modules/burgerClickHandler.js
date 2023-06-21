import { openMobileNavMenu } from './openMobileNavMenu.js'

const burgerBtn = document.querySelector('.burger__menu');

const burgerClickHandler = () => {
  console.log('it work')
    burgerBtn.addEventListener('click', openMobileNavMenu);
}

export { burgerClickHandler, burgerBtn}