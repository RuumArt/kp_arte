import { useContext } from 'react';
import MediaContext from 'providers/mediaProvider/MediaContext';

const useMediaContext = () => {
  return useContext(MediaContext);
};

export default useMediaContext;
