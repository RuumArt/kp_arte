import { useContext } from 'react';
import GlobalStateContext from 'providers/globalStateProvider/GlobalStateContext';

const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export default useGlobalState;
