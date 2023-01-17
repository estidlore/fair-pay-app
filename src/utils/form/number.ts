const isGreaterOrEqual = (val: number, min: number): boolean => val >= min;

const validateGreaterOrEqual = (val: number, min: number): string => {
  if (!isGreaterOrEqual(val, min)) {
    return `must be greater than or equal to ${min}`;
  }
  return "";
};

export { isGreaterOrEqual, validateGreaterOrEqual };
