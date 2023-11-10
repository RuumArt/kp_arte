import React from 'react';
import DataContext from './DataContext';

export const useData = () => {
  const { data, isLoading, error } = React.useContext(DataContext);

  return {
    data,
    isLoading,
    error,
  };
};
