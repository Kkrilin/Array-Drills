import { filter } from "../filter.js";

const items = [1, 2, 3, 4, 5, 5];

console.log(filter(items, (El) => El > 3));
