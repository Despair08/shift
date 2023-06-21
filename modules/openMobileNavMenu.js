import { burgerBtn } from './burgerClickHandler.js';
import { menuItemsClickHandler } from './menuItemsClickHandler.js';

const menu = document.querySelector('.header__nav');
const menuItems = document.querySelectorAll('.nav__item');

const openMobileNavMenu = (event) => {
  if(event.target === burgerBtn || burgerBtn.contains(event.target)){
    burgerBtn.classList.toggle('burger__menu--clicked');
    menu.classList.toggle('header__nav--opened');
    document.body.classList.toggle('lock');
  }
  menuItems.forEach(item => {
    item.addEventListener('click', menuItemsClickHandler)
  });
}

export {openMobileNavMenu, menu, menuItems};