import { useEffect, useState } from 'react';

const useLockScroll = (initialLocked = false) => {
  const [locked, setLocked] = useState(initialLocked);

  // Do the side effect before render
  useEffect(() => {
    if (!locked) {
      return;
    }

    const scrollElement = document.body;

    // Save initial body style
    const originalOverflow = scrollElement.style.overflow;
    const originalPaddingRight = scrollElement.style.paddingRight;

    // Lock body scroll
    scrollElement.style.overflow = 'hidden';

    // Get the scrollBar width
    const root = document.getElementById('__next'); // or root
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    // Avoid width reflow
    if (scrollBarWidth) {
      scrollElement.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      scrollElement.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        scrollElement.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);

  // Update state if initialValue changes
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return [locked, setLocked];
};

export default useLockScroll;
