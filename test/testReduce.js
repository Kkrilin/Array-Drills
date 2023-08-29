import { reduce } from "../reduce.js";

const items = [1, 2, 3, 4, 5, 5];

console.log(reduce(items, (acc, cur) => acc + cur / items.length, 0));
