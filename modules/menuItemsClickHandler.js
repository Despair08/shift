import { menu } from './openMobileNavMenu.js';
import { burgerBtn } from './burgerClickHandler.js';

export const menuItemsClickHandler = () => {
  menu.classList.remove('header__nav--opened')
  document.body.classList.remove('lock');
  burgerBtn.classList.remove('burger__menu--clicked');
}