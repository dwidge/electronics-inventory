export const toPrice = (cents: number, prefix: string = "") =>
  prefix + (cents / 100).toFixed(2);
