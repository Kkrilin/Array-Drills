import { find } from "../find.js";

const items = [1, 2, 3, 4, 5, 5];

console.log(find(items, (El) => El === 3));
