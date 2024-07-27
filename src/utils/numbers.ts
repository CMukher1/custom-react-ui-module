export const formatWholeNumber = (num: number): string => {
  return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
};

export const formatDecimalNumber = (num: number, decimalPlaces = 2): string => {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
};

export const formatCurrency = (num: number, currency = "USD"): string => {
  return num.toLocaleString(undefined, {
    style: "currency",
    currency: currency,
  });
};
