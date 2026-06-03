export function calculatePrice(
  quantity: number,
  rate: number
) {
  return quantity * rate;
};

export function formatINR(
  amount: number
) {
  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
    }
  ).format(amount);
};
