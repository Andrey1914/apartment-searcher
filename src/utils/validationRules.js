export const isRequired = (value) => ({
  hasPassed: !!value,
  message: "Please, enter the price of the apartment.",
});

export const charLimit = (minimum) => (value) => ({
  hasPassed: value.length >= minimum,
  message: "Sorry, there are no apartments with this price.",
});
