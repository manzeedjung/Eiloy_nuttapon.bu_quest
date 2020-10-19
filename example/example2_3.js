const hero = require('./hero.json');
let MostAssist = 0;
let heroMostAssist = '';
const len = hero.length;
console.log(len)
let item = null;
for (let i = 0; i < len; i++) {
    item = hero[i];

    if (MostAssist < item.assist) {
        MostAssist = item.assist
        heroMostAssist = item.name
    }
}

console.log("HeroMostAssist:", heroMostAssist);