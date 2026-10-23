export function arraysAreEqual(arr1, arr2) {
  // your code here
  if (arr1.length !== arr2.length) {
    return false;
  }
  let i = 0;

  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    i++;
  }
  return true;
}
