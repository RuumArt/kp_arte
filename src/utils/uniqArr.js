export default (arr, key) => {
  return [...new Map(arr.map(item => [item[key], item])).values()];
};
