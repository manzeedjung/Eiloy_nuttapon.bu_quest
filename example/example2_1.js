const hero = require('./hero.json');
let networthSum = 0;
let itemsFound = 0;
const len = hero.length;
console.log(len)
let item = null;
for (let i = 0; i < len; i++) {
    item = hero[i];
    if (item.networth) {
        networthSum = item.networth + networthSum;
        itemsFound = itemsFound + 1;
    }
}
const averageNetworth = networthSum / itemsFound;
console.log("Average Networth:", averageNetworth);