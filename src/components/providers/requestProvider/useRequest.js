import React from 'react';
import RequestContext from './RequestContext';

export const useRequest = () => {
  const {
    request,
    addProduct,
    setField,
    setProduct,
    clearProductFields,
    removeProduct,
    addArmatura,
    removeArm,
    setArm,
    validate,
    errors,
    clearError,
    isValid,
  } = React.useContext(RequestContext);

  return {
    request,
    addProduct,
    setField,
    setProduct,
    clearProductFields,
    removeProduct,
    addArmatura,
    removeArm,
    setArm,
    validate,
    errors,
    clearError,
    isValid,
  };
};
