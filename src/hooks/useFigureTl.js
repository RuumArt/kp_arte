import { useEffect, useRef } from 'react';
import useOnScreen from 'hooks/useOnScreen';
import { gsap } from 'gsap';
import {
  drawArrow,
  scaleWithBounce,
  showElementFromOpacity,
} from 'utils/gsapAnimations';
import useValueUpdate from 'hooks/useValueUpdate';

export default (rootRef, iconsRef, arrow, vars) => {
  const tl = useRef(null);
  const isVisible = useOnScreen(rootRef);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, delay: 0.3, ...vars }).add(
      scaleWithBounce({
        el: iconsRef.current,
        stagger: 0.05,
      })
    );

    if (arrow) {
      tl.current
        .add(
          drawArrow({
            el: arrow.line.current,
            duration: 0.8,
          }),
          '-=0.4'
        )
        .add(showElementFromOpacity({ el: arrow.arrow.current }));
    }

    return () => {
      tl.current.kill();
    };
  }, []);

  useValueUpdate(() => {
    if (isVisible) {
      tl.current.play();
    }
  }, isVisible);
};
