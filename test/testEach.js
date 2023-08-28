import { each } from "../each.js";

const items = [1, 2, 3, 4, 5, 5];

each(items, (El, i) => console.log(El * i));
