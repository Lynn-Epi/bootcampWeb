export function range(start, end, step) {
  let numbers = [];
  let current = start;

  if (step === undefined) {
    if (start < end) {
      step = 1;
    } else {
      step = -1;
    }
  }
  if (step > 0) {
    while (current <= end) {
      numbers.push(current);
      current += step;
    }
  } else {
    while (current >= end) {
      numbers.push(current);
      current += step;
    }
  }
  return numbers;
}
