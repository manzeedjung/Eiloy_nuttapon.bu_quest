const hero = require('./hero.json');
let levelSum = 0;
let itemsFound = 0;
const len = hero.length;
console.log(len)
let item = null;
for (let i = 0; i < len; i++) {
    item = hero[i];
    if (item.primary_attribute == 'intelligent') {
        levelSum = item.level + levelSum;
        itemsFound = itemsFound + 1;
    }
}
const averagLevel = levelSum / itemsFound;
console.log("Average Level:", averagLevel);