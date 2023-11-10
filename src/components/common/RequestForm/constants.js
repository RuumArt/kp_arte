export const flatsName = [
  {
    id: 'living',
    value: 'Гостиная',
  },
  {
    id: 'bedroom',
    value: 'Спальная',
  },
  {
    id: 'kitchen',
    value: 'Кухня',
  },
  {
    id: 'bathroom',
    value: 'Ванная',
  },
  {
    id: 'lobby',
    value: 'Лобби',
  },
];

export const countsList = Array.from(Array(20).keys()).map(item => {
  return {
    id: `${item}_num`,
    value: item + 1,
  };
});

export const discountList = Array.from(Array(101).keys()).map(item => {
  return {
    id: `${item}_num`,
    value: item,
  };
});

export const types = [
  {
    id: 't1',
    value: 'вертикальный',
  },
  {
    id: 't2',
    value: 'горизонтальный',
  },
  {
    id: 't3',
    value: 'напольный',
  },
];

export const typesUse = [
  {
    id: 'tu1',
    value: 'низ правое',
  },
  {
    id: 'tu2',
    value: 'низ левое',
  },
  {
    id: 'tu3',
    value: 'боковое',
  },
  {
    id: 'tu4',
    value: 'низ центр',
  },
  {
    id: 'tu5',
    value: 'низ разнесенные',
  },
  {
    id: 'tu6',
    value: 'диагональное',
  },
  {
    id: 'tu7',
    value: 'низ диагональное',
  },
];
