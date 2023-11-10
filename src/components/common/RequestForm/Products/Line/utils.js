import uniqArr from 'utils/uniqArr';

export const getSectionByModel = (data, values, type) => {
  const newArr = data.filter(item => {
    if (type === 'sizes') {
      const arrSizes = values.sizes ? values.sizes.value.split('x') : [0, 0];

      return (
        item.name === values.model?.value &&
        item.width === arrSizes[1] &&
        item.length === arrSizes[0]
      );
    }

    if (type === 'teplo') {
      const arrSizes = values.sizes ? values.sizes.value.split('x') : [0, 0];

      return (
        item.name === values.model?.value &&
        item.teplo === values.teplo?.value &&
        item.width === arrSizes[1] &&
        item.length === arrSizes[0]
      );
    }

    return item.name === values.model?.value;
  });

  return uniqArr(newArr, 'countSections').map(item => {
    return {
      id: `${item.id}_cs`,
      value: item.countSections,
    };
  });
};

export const getSizesByModel = (data, values, type) => {
  const newArr = data
    .filter(item => {
      if (type === 'teplo') {
        return (
          item.name === values.model?.value &&
          item.teplo === values.teplo?.value
        );
      }

      if (type === 'countSections') {
        return (
          item.name === values.model?.value &&
          item.countSections === values.countSections?.value &&
          item.teplo === values.teplo?.value
        );
      }

      return item.name === values.model?.value;
    })
    .map(item => {
      return {
        id: `${item.id}_size`,
        value: `${item.length}x${item.width}`,
      };
    });

  return newArr;
};

export const getTeploByModel = (data, values, type) => {
  const newArr = data.filter(item => {
    if (type === 'sizes') {
      const arrSizes = values.sizes ? values.sizes.value.split('x') : [0, 0];

      return (
        item.name === values.model?.value &&
        item.width === arrSizes[1] &&
        item.length === arrSizes[0]
      );
    }

    if (type === 'countSections') {
      return (
        item.name === values.model?.value &&
        item.countSections === values.countSections?.value
      );
    }

    return item.name === values.model?.value;
  });

  return uniqArr(newArr, 'teplo').map(item => {
    return {
      id: `${item.id}_teplo`,
      value: item.teplo,
    };
  });
};
