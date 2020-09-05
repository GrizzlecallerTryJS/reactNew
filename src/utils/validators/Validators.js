export const required = (value) => {
  return value ? undefined : 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
  return value && value.length <= maxLength ? undefined : `Max length ${maxLength} symbols`;
};

export const minLengthCreator = (minLength) => (value) => {
  return (value && value.length) >= minLength ? undefined : `Min length ${minLength} symbols`;
};
