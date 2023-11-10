import { gsap } from 'gsap';
import {
  drawArrow,
  fadeIn,
  scaleWithBounce,
  showElementFromOpacity,
} from 'utils/gsapAnimations';

export const bounceTl = (arrow, icons, vars) => {
  return gsap.timeline(vars).add(
    scaleWithBounce({
      el: icons,
      additionalFrom: { yPercent: 5 },
      additionalTo: { yPercent: 0 },
      stagger: 0.075,
    })
  );
};

export const drawArrowTl = (line, arrow, vars) => {
  return gsap
    .timeline(vars)
    .add(
      drawArrow({
        el: line,
        duration: 1,
      })
    )
    .add(showElementFromOpacity({ el: arrow, duration: 0.3 }));
};

export const heroTl = (arrow, icons, images, vars) => {
  const tl = gsap
    .timeline(vars)
    .add(
      fadeIn({
        el: images,
        stagger: 0.2,
      })
    )
    .add(
      scaleWithBounce({
        el: icons,
        additionalFrom: { yPercent: 5 },
        additionalTo: { yPercent: 0 },
        stagger: 0.075,
      }),
      '-=0.3'
    );

  if (arrow) {
    tl.add(
      drawArrow({
        el: arrow.line.current,
        duration: 0.8,
      }),
      '-=0.6'
    ).add(showElementFromOpacity({ el: arrow.arrow.current }));
  }

  return tl;
};
