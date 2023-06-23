import { iframePrewievHandler } from './modules/iframePrewievHandler/iframePrewievHandler.js'
(()=>{"use strict";const e=()=>{t.classList.remove("header__nav--opened"),document.body.classList.remove("lock"),r.classList.remove("burger__menu--clicked")},t=document.querySelector(".header__nav"),c=document.querySelectorAll(".nav__item"),o=o=>{(o.target===r||r.contains(o.target))&&(r.classList.toggle("burger__menu--clicked"),t.classList.toggle("header__nav--opened"),document.body.classList.toggle("lock")),c.forEach((t=>{t.addEventListener("click",e)}))},r=document.querySelector(".burger__menu");window.onload=()=>{
iframePrewievHandler();
  r.addEventListener("click",o)
}})();