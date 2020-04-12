$( document ).ready(function() {
  new WOW().init();
  const scroll = new SmoothScroll('a[href*="#"]',{
    speed: 600
  });
});
