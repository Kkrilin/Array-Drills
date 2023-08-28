import { map } from "../map.js";

const items = [1, 2, 3, 4, 5, 5];

console.log(map(items, (El) => El * El));
