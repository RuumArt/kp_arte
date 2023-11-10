const clearItems = (data, prefixId = null) => {
  return data.map((item, index) => {
    const keys = Object.keys(item);

    return {
      id: prefixId ? `${prefixId}_${index}` : `${keys[0]}_${index}`,
      value: item[keys[0]],
      photo: item[keys[1]],
      email: item[keys[2]],
    };
  });
};

const clearProducts = data => {
  return data.map((item, index) => {
    const keys = Object.keys(item);

    return {
      id: `prod_${index}`,
      name: item[keys[0]],
      price: parseInt(item[keys[6]].replace(' ', ''), 10),
      teplo: item[keys[5]],
      type: item[keys[1]],
      length: item[keys[2]],
      width: item[keys[3]],
      countSections: item[keys[4]],
    };
  });
};

const clearArmatura = data => {
  return data.map((item, index) => {
    const keys = Object.keys(item);

    return {
      id: `arm_${index}`,
      name: item[keys[0]],
      price: item[keys[1]],
    };
  });
};

const clearColors = data => {
  return data.map((item, index) => {
    const keys = Object.keys(item);

    return {
      id: `color_${index}`,
      name: `${
        item[keys[0]] && item[keys[0]].includes('RAL')
          ? `${item[keys[0]].trim()} `
          : ''
      }${item[keys[1]].trim()}`,
      code: item[keys[0]].trim(),
      bigPrice: item[keys[2]] !== 'TRUE',
    };
  });
};

const clearPhotos = data => {
  return data.map((item, index) => {
    const keys = Object.keys(item);

    return {
      id: `image_${index}`,
      name: item[keys[0]].trim(),
      type: item[keys[1]].toLowerCase().trim(),
      number: item[keys[2]].trim(),
    };
  });
};

const clearScheme = data => {
  return data.map((item, index) => {
    const keys = Object.keys(item);

    return {
      id: `section_${index}`,
      name: item[keys[0]].trim(),
      number: item[keys[1]].trim(),
    };
  });
};

const clearModelPhoto = data => {
  return data.map((item, index) => {
    const keys = Object.keys(item);

    return {
      id: `ms_${index}`,
      type: item[keys[0]].trim(),
      typeUse: item[keys[1]].trim(),
      number: item[keys[2]].trim(),
    };
  });
};

const getTable = (id, data) => {
  const table = data.filter(item => {
    return item.id === id;
  });
  return table[0]?.data || [];
};

export default data => {
  const [
    productTable,
    armaTable,
    managersTable,
    colorsTable,
    photosTable,
    sectionTable,
    modelTable,
    schemeTable,
  ] = [
    getTable('Таблица №1', data),
    getTable('Таблица №2', data),
    getTable('Список менеджеров', data),
    getTable('Цвета', data),
    getTable('Фото Основное', data),
    getTable('Сечение', data),
    getTable('Подключение', data),
    getTable('Схема радиаторов', data),
  ];

  return {
    products: clearProducts(productTable),
    armatura: clearArmatura(armaTable),
    managers: clearItems(managersTable),
    colors: clearColors(colorsTable),
    mainPhotos: clearPhotos(photosTable),
    sectionPhoto: clearScheme(sectionTable),
    modelPhoto: clearModelPhoto(modelTable),
    schemePhoto: clearScheme(schemeTable),
  };
};
