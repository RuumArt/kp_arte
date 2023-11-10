import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const killScrollTrigger = id => {
  const scrollTrigger = ScrollTrigger.getById(id);
  if (scrollTrigger) {
    scrollTrigger.kill();
  }
};
