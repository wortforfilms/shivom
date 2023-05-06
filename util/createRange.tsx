export function range(start: number, end: number) {
  return Array(end - start + 1).fill(start).map((_, idx) => start + idx);
}