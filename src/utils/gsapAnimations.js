import gsap from 'gsap';

const getClearProps = (initial, additional) => {
  if (additional) {
    return `${additional},${initial}`;
  }
  return initial;
};

export const scaleWithBounce = ({
  el,
  stagger,
  additionalFrom,
  additionalTo,
}) => {
  return gsap.fromTo(
    el,
    { scale: 0, ...additionalFrom },
    {
      scale: 1,
      ease: 'back.out',
      stagger,
      clearProps: 'transform',
      duration: 0.4,
      ...additionalTo,
    }
  );
};

export const fadeIn = ({
  el,
  stagger,
  additionalFrom,
  additionalTo,
  ...rest
}) => {
  return gsap.fromTo(
    el,
    { opacity: 0, y: 30, ...additionalFrom },
    {
      opacity: 1,
      y: 0,
      stagger,
      clearProps: getClearProps('transform', rest?.clearProps),
      duration: 0.4,
      ...rest,
      ...additionalTo,
    }
  );
};

export const showElementFromOpacity = ({
  el,
  stagger,
  additionalFrom,
  additionalTo,
  duration,
}) => {
  return gsap.fromTo(
    el,
    { opacity: 0, ...additionalFrom },
    { opacity: 1, stagger, ...additionalTo, duration: duration || 0.4 }
  );
};

export const drawArrow = ({ el, duration }) => {
  return gsap.fromTo(
    el,
    {
      drawSVG: 0,
    },
    { drawSVG: '100%', duration: duration - 0.1 }
  );
};

export const scaleWithRotate = ({ el, rotateFrom, duration }) => {
  return gsap.fromTo(
    el,
    {
      scale: 0,
      rotate: rotateFrom,
    },
    {
      scale: 1,
      rotate: 0,
      ease: 'back.out',
      duration: duration || 0.4,
      clearProps: 'transform',
    }
  );
};

export const animateTitleLines = ({ lines, delay, fromBottom, ...rest }) => {
  return gsap.fromTo(
    lines,
    {
      opacity: 0,
      rotate: fromBottom ? 5 : -5,
      y: fromBottom ? 60 : -60,
      skewY: fromBottom ? 25 : -25,
    },
    {
      opacity: 1,
      rotate: 0,
      y: 0,
      skewY: 0,
      transformOrigin: '0% 100%',
      duration: 0.7,
      stagger: 0.1,
      delay,
      ease: 'sine.out',
      clearProps: getClearProps(
        'transform,transform-origin,position,text-align,display',
        rest?.clearProps
      ),

      ...rest,
    }
  );
};

export const animateSubTitle = ({
  el,
  startYPercent,
  startSkewY,
  duration,
  ...rest
}) => {
  return gsap.fromTo(
    el,
    { opacity: 0, yPercent: startYPercent || 10, skewY: startSkewY || 10 },
    {
      opacity: 1,
      yPercent: 0,
      skewY: 0,
      transformOrigin: 'left',
      duration: duration || 0.7,
      clearProps: getClearProps('transform,transform-origin', rest?.clearProps),
      ...rest,
    }
  );
};

export const animateRotateButton = ({ el, duration, rotateStart, ...rest }) => {
  return gsap.fromTo(
    el,
    { opacity: 0, rotate: rotateStart || 10 },
    {
      opacity: 1,
      rotate: 0,
      duration: duration || 0.6,
      transformOrigin: 'left',
      clearProps: getClearProps('transform,transform-origin', rest?.clearProps),

      ...rest,
    }
  );
};
