export const blockScroll = () => {
  document.querySelector('html').classList.add('lockScroll');
  document.body.classList.add('lockScroll');
};

export const enableScroll = () => {
  document.querySelector('html').classList.remove('lockScroll');
  document.body.classList.remove('lockScroll');
};
