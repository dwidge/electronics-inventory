export function randItem<T>(v: T[]): T {
  return v[(Math.random() * v.length) | 0];
}
