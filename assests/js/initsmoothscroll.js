const initSmoothScroll = () => {
  const scroll = new SmoothScroll('a[href*="#"]',{
    speed: 600
  });
};

export { initSmoothScroll };
