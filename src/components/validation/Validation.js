export const validateUsername = (value) => {
  if (value.length < 5) {
    return "TOO_SHORT";
  }
  return undefined;
};

export const validateName = (value) => {
  if (value.length < 3) {
    return "TOO_SHORT";
  }
  if (/[^a-zA-Z]/.test(value)) {
    return "INVALID_NAME";
  }
  return undefined;
};

export const validateEmail = (value) => {
  if (!value.includes("@")) {
    return "INVALID_EMAIL";
  }
  return undefined;
};

export const validatePhone = (value) => {
  if (value.length !== 9) {
    return "PHONE_LENGTH";
  }
  if (!/^[0-9]+$/.test(value)) {
    return "PHONE_INVALID";
  }
  return undefined;
};

export const validateBirthdate = (value) => {
  if (value.length === 0) {
    return "EMPTY";
  }
  return undefined;
};

export const validateGender = (value) => {
  if (value === null || value.length === 0) {
    return "EMPTY";
  }
  return undefined;
};

export const restrictExtension = (value) => {
  if (
    value.length !== 0 &&
    value.substr(value.lastIndexOf(".") + 1) !== "jpg"
  ) {
    return "INVALID_EXTENSION";
  }
  return undefined;
};
