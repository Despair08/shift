import { iframe, iframeInner } from "./iframePrewievHandler.js";

const iframeOuter = `<iframe class="social__video" src="https://www.youtube.com/embed/9nY017sy55Y" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>`

export const addIframe = () => {
  iframe.innerHTML = iframeOuter;
};