import React, { useCallback, useEffect, useMemo, useState } from "react";
import RequestContext from './RequestContext';

const initialProduct = {
  id: `prod_0`,
  number: 1,
  nameFlat: '',
  nameImage: null,
  square: '',
  model: null,
  sizes: null,
  countSections: null,
  countRadiators: {
    value: 1,
  },
  teplo: null,
  type: null,
  typeUse: null,
  color: null,
  count: 1,
  price: 0,
  priceNormal: 0,
};

const initialArm = {
  id: `arm_0`,
  number: 1,
  name: null,
  count: '',
  price: null,
};

const initialRequest = {
  manager: null,
  unit: null,
  discount: null,
  discountArm: null,
  calcSum: false,
  products: [...[initialProduct]],
  arm: [],
};

const RequestProvider = ({ children }) => {
  const [requestData, setRequestData] = useState(initialRequest);
  const [errors, setErrors] = useState({
    products: [],
    arm: [],
    fields: {},
  });
  const [isValid, setIsValid] = useState(false);

  const handleAddProduct = () => {
    const { length: prodLength } = requestData.products;

    setRequestData(prev => {
      return {
        ...prev,
        products: [
          ...prev.products,
          ...[
            {
              ...initialProduct,
              id: `prod_${prodLength + 1}`,
              number: prodLength + 1,
            },
          ],
        ],
      };
    });
  };

  const handleRemoveProduct = useCallback(removeIndex => {
    setRequestData(prev => {
      const newProducts = prev.products.filter((_, index) => {
        return index !== removeIndex;
      });

      return {
        ...prev,
        products: newProducts,
      };
    });
  }, []);

  const handleSetField = (name, value) => {
    setRequestData(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSetProduct = (prodIndex, payload, multiple = false) => {
    setRequestData(prev => {
      let newProducts;

      if (multiple) {
        newProducts = prev.products.map((item, index) => {
          return index === prodIndex
            ? {
                ...prev.products[prodIndex],
                ...payload,
              }
            : item;
        });
      } else {
        newProducts = prev.products.map((item, index) => {
          return index === prodIndex
            ? {
                ...prev.products[prodIndex],
                [payload.name]: payload.value,
              }
            : item;
        });
      }

      return {
        ...prev,
        products: newProducts,
      };
    });
  };

  const handleClearProductFields = (prodIndex, arrNames) => {
    setRequestData(prev => {
      const newProds = prev.products.map((prod, index) => {
        if (index === prodIndex) {
          const newProd = prod;

          arrNames.forEach(kk => {
            newProd[kk] = null;
          });

          return newProd;
        }

        return prod;
      }, []);

      return {
        ...prev,
        products: newProds,
      };
    });
  };

  const handleAddArmatura = useCallback(() => {
    const { length: armLength } = requestData.arm;

    setRequestData(prev => {
      return {
        ...prev,
        arm: [
          ...prev.arm,
          ...[
            {
              ...initialArm,
              id: `arm_${armLength + 1}`,
              number: armLength + 1,
            },
          ],
        ],
      };
    });
  }, [requestData.arm]);

  const handleRemoveArm = useCallback(removeIndex => {
    setRequestData(prev => {
      const newArm = prev.arm.filter((_, index) => {
        return index !== removeIndex;
      });

      return {
        ...prev,
        arm: newArm,
      };
    });
  }, []);

  const handleSetArm = useCallback((armIndex, { name, value }) => {
    setRequestData(prev => {
      const newProducts = prev.arm.map((item, index) => {
        return index === armIndex
          ? {
              ...prev.arm[armIndex],
              [name]: value,
            }
          : item;
      });

      return {
        ...prev,
        arm: newProducts,
      };
    });
  }, []);

  const handleValidate = useCallback(() => {
    const newErrors = {
      products: [],
      arm: [],
      fields: {},
    };

    let lastKey = null;

    requestData.products.forEach((item, index) => {
      const keys = Object.keys(item);

      newErrors.products[index] = {};

      keys.forEach(key => {
        if (!item[key] || item[key] === '' || item[key] === '0') {
          newErrors.products[index][key] = true;
          lastKey = `prod_${index}`;
        }
      });
    });

    requestData.arm.forEach((item, index) => {
      const keys = Object.keys(item);

      newErrors.arm[index] = {};

      keys.forEach(key => {
        if (!item[key] || item[key] === '' || item[key] === '0') {
          newErrors.arm[index][key] = true;
          lastKey = `arm_${index}`;
        }
      });
    });

    if (!requestData.manager) {
      newErrors.fields.manager = true;
      lastKey = 'manager';
    }

    const isProductsValid = newErrors.products.every(item => {
      return Object.keys(item).every(key => key === false);
    });

    const isArmValid = newErrors.arm.every(item => {
      return Object.keys(item).every(key => key === false);
    });

    const isFieldsValid = Object.values(newErrors.fields).every(
      val => val === false
    );

    setErrors(newErrors);

    return {
      firstError: lastKey,
      isValid: isProductsValid && isArmValid && isFieldsValid,
    };
  }, [requestData]);

  const handleClearError = useCallback((name, key, itemIndex) => {
    if (itemIndex !== undefined) {
      setErrors(prev => {
        const newErrors = prev;

        newErrors[key][itemIndex][name] = false;

        return {
          ...newErrors,
        };
      });
    } else {
      setErrors(prev => {
        const newErrors = prev;
        newErrors[key][name] = false;

        return {
          ...newErrors,
        };
      });
    }
  }, []);

  const state = useMemo(() => {
    return {
      request: requestData,
      addProduct: handleAddProduct,
      removeProduct: handleRemoveProduct,
      setField: handleSetField,
      setProduct: handleSetProduct,
      clearProductFields: handleClearProductFields,
      addArmatura: handleAddArmatura,
      removeArm: handleRemoveArm,
      setArm: handleSetArm,
      validate: handleValidate,
      errors,
      clearError: handleClearError,
      isValid,
    };
  }, [
    handleRemoveProduct,
    handleSetProduct,
    handleAddProduct,
    handleRemoveArm,
    handleAddArmatura,
    requestData,
    handleValidate,
    isValid,
  ]);

  return (
    <RequestContext.Provider value={state}>{children}</RequestContext.Provider>
  );
};

export default RequestProvider;
