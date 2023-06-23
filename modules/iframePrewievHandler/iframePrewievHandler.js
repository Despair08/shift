import { addIframe } from "./addIframe.js";

const iframe = document.querySelector('.iframe__container');
const iframeInner = iframe.innerHTML;

const iframePrewievHandler = () => {
  iframe.addEventListener('click', addIframe);
}

export {iframePrewievHandler, iframe, iframeInner}