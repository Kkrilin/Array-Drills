export function find(elements, cb) {
  let isFind = false;
  for (let index = 0; index < elements.length; index++) {
    isFind = cb(elements[index]);
    if (isFind) {
      return true;
    }
  }
  return undefined;
}
