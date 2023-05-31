export const isRequired = (value) => ({
  hasPassed: !!value,
  message: "Please, fill in this field.",
});

export const charLimit = (minimum) => (value) => ({
  hasPassed: value.length >= minimum,
  message: "Sorry, there are no apartments with this price.",
});

export const emailValidation = (value) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
  message: "Invalid email.",
});

export const passwordValidation = (value) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d]).{7,256}$/.test(value),
  message: "Password must contain one number and one character.",
});
