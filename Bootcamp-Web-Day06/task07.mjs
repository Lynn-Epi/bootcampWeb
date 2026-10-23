export function objectsDeeplyEqual(cmp1, cmp2) {
  if (cmp1 === cmp2) {
    return true;
  }
  if (
    cmp1 === null ||
    cmp2 === null ||
    typeof cmp1 !== "object" ||
    typeof cmp2 !== "object"
  ) {
    return false;
  }
  if (Object.keys(cmp1).length !== Object.keys(cmp2).length) {
    return false;
  }
  let checkingNumber = 0;
  let keys = Object.keys(cmp1);

  while (checkingNumber < keys.length) {
    let key = keys[checkingNumber];

    if (!Object.hasOwn(cmp2, key)) {
      return false;
    }

    if (!objectsDeeplyEqual(cmp1[key], cmp2[key])) {
      return false;
    }

    checkingNumber++;
  }
  return true;
}
