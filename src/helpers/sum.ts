export const sum = (a: number, b: number): number => {
  return a + b;
};

export const addArray = (arr: number[]): number => {
  return arr.reduce((accum, curr) => accum+curr, 0);
};
