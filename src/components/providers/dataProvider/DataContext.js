import { createContext } from 'react';

const DataContext = createContext({
  data: {
    managers: [],
    products: [],
    armatura: [],
    photos: [],
  },
  isLoading: true,
  error: '',
});

export default DataContext;
