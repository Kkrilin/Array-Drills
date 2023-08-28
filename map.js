export function map(elements, cb) {
  let arr = [];
  for (let index = 0; index < elements.length; index++) {
    arr.push(cb(elements[index]));
  }
  return arr;
}
