export function flatten(elements) {
  let flatArr = [];
  for (let index = 0; index < elements.length; index++) {
    if (Array.isArray(elements[index])) {
      flatArr = flatArr.concat(flatten(elements[index]));
    } else {
      flatArr.push(elements[index]);
    }
  }
  return flatArr;
}
