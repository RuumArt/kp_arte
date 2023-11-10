import { createContext } from 'react';

const RequestContext = createContext({
  request: {
    manager: {},
    products: [],
    arm: [],
  },
  setField: () => {},
  removeProduct: () => {},
  addProduct: () => {},
  setProduct: () => {},
  clearProductFields: () => {},
  addArmatura: () => {},
  removeArm: () => {},
  setArm: () => {},
  errors: {},
  isValid: false,
});

export default RequestContext;
