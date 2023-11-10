export const wrap = (el, className) => {
  const wrapper = document.createElement('div');

  wrapper.className = className;
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};
