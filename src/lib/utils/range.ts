/**
 * Generates an array of numbers from start to end, incrementing by step.
 * If only one argument is provided, it generates numbers from 0 to the provided value.
 * @param start - The start value of the range. If 'end' is undefined, 'start' is treated as 'end' with start beginning at 0.
 * @param end - The end value of the range, not included in the result.
 * @param step - The increment between each number in the range. Defaults to 1.
 * @returns An array of numbers from start to end, incremented by step.
 */
export const range = (
  start: number,
  end?: number,
  step: number = 1
): number[] => {
  let output: number[] = [];
  // Adjusts 'start' and 'end' if 'end' is not provided
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  // Fills the 'output' array with numbers from 'start' to 'end', stepping by 'step'
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
