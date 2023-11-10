export const declOfNum = (number, variants) => {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return variants[2];
  }

  if (n1 > 1 && n1 < 5) {
    return variants[1];
  }

  if (n1 === 1) {
    return variants[0];
  }
  return variants[2];
};
