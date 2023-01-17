const isEmpty = (text: string): boolean => text.trim().length === 0;

const validateEmpty = (text: string): string => {
  if (isEmpty(text)) {
    return "cannot be empty";
  }
  return "";
};

export { isEmpty, validateEmpty };
