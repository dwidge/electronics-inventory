export const deepFilter = <T extends Record<string, unknown>>(
  value: T,
  mask: T,
  cond = (mask: unknown, value: unknown) =>
    mask === value ||
    (typeof mask === "string" &&
      typeof value === "string" &&
      value?.includes?.(mask)) ||
    false
): boolean =>
  typeof mask !== "object" || typeof value !== "object"
    ? false
    : Object.keys(mask).every((key) =>
        value[key] &&
        typeof value[key] === "object" &&
        typeof mask[key] === "object"
          ? deepFilter(value[key], mask[key], cond)
          : mask[key] === undefined ||
            (key in value && cond(mask[key], value[key]))
      );
