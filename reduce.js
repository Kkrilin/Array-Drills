export function reduce(elements, cb, startingValue) {
  if (startingValue === undefined) {
    startingValue = elements[0];
    for (let index = 1; index < elements.length; index++) {
      startingValue = cb(startingValue, elements[index]);
    }
    return startingValue;
  } else {
    for (let index = 0; index < elements.length; index++) {
      startingValue = cb(startingValue, elements[index]);
    }
    return startingValue;
  }
}
