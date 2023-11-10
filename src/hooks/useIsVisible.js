import { useEffect, useState } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useMediaContext from './useMediaContext';

export const useIsVisible = ({ element, start, end, handleOnce }) => {
  const [isVisible, setIsVisible] = useState(false);
  const media = useMediaContext();

  useEffect(() => {
    const st = new ScrollTrigger({
      trigger: element,
      start,
      onEnter: () => {
        setIsVisible(true);
      },
      onEnterBack: () => {
        if (!handleOnce) {
          setIsVisible(true);
        }
      },
      onLeaveBack: () => {
        if (!handleOnce) {
          setIsVisible(false);
        }
      },
      onLeave: () => {
        if (!handleOnce) {
          setIsVisible(false);
        }
      },
      end,
    });

    return () => {
      st.kill();
    };
  }, [element, end, handleOnce, start, media]);

  return isVisible;
};
