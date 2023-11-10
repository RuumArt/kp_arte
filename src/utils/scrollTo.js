import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

// eslint-disable-next-line import/no-anonymous-default-export
export default href => {
  gsap.to(window, { duration: 1, scrollTo: `${href}` });
};
