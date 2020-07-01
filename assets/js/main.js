import { initSmoothScroll } from './initsmoothscroll.js';
import { formSubmit } from './form.js';

$(document).ready(()=>{
  new WOW().init();
});

window.addEventListener('load', (event) => {
  initSmoothScroll();
  formSubmit();
});
