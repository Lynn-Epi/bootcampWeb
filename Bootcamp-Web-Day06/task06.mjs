export function arrayFiltering(array, test) {
  let result = [];
  let i = 0;

  while (i < array.length) {
    if (test(array[i])) {
      result.push(array[i]);
    }
    i++;
  }

  return result;
}