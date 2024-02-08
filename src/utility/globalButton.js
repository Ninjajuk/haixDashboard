export const isButtonDisabled = (inputValues) => {
    // Check if any of the input values is empty
    return Object.values(inputValues).some(value => !value.trim());
  };