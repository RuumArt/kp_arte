import React, { useRef, useState } from 'react';

export default function useOnScreen(ref, options, allDirection = false) {
  const [isIntersecting, setIntersecting] = useState(null);

  const observer = useRef(null);

  React.useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (allDirection) {
          setIntersecting(entry.isIntersecting);
        } else if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      {
        ...options,
        threshold: options?.threshold || 0.2,
      }
    );

    observer.current.observe(ref.current);

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return isIntersecting;
}
