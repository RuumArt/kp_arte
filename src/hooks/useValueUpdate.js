import { useEffect, useRef } from 'react';

const useValueUpdate = (func, value) => {
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      func(prevValue.current);
      prevValue.current = value;
    }
  }, [func, value]);
};

export default useValueUpdate;
