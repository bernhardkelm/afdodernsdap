/**
 * Scales a value from one range to another
 * @param {number[]} fromRange: - The range of the original value
 * @param {number[]} toRange: - The range to scale the value to
 * @returns {(from: number) => number} - A function that scales the value
 */
export function scale(fromRange: number[], toRange: number[]) {
  const d = (toRange[1] - toRange[0]) / (fromRange[1] - fromRange[0]);
  return (from: number) => (from - fromRange[0]) * d + toRange[0];
}

/**
 * Clamps a value to a range after scaling it
 * @param {number[]} fromRange - The range of the original value
 * @param {number[]} toRange: - The range to scale the value to
 * @returns {(from: number) => number} - A function that scales and clamps the value
 * to the new range
 */
export function clampScale(fromRange: number[], toRange: number[]) {
  return (from: number) =>
    Math.max(Math.min(scale(fromRange, toRange)(from), toRange[1]), toRange[0]);
}
