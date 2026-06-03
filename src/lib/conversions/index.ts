export const WEIGHT_FACTORS = {
  g: 1,
  kg: 1000,
};

export const VOLUME_FACTORS = {
  mL: 1,
  L: 1000,
};

export function convertToBaseUnit(
  quantity: number,
  unit: string
) {
  if (unit === "kg") {
    return quantity * 1000;
  }

  if (unit === "L") {
    return quantity * 1000;
  }

  return quantity;
}