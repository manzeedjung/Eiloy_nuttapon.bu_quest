const hero = require('./hero.json');
let worstRadio = 0.00;
let heroWorstRadio = '';
const len = hero.length;
let radio
let item = null;
for (let i = 0; i < len; i++) {
    item = hero[i];
    // if (item.death == 0) {
    //     radio = item.kill
    // }
    // else if (item.kill == 0) {
    //     radio = item.kill * item.death
    // }
    // else {
    radio = (+item.kill) / item.death
    // }
    if (i == 1) {
        worstRadio = radio;
    }
    console.log(item.name, radio)
    if (parseFloat(worstRadio) > radio) {
        worstRadio = radio
        heroWorstRadio = item.name
    }
}

console.log("HeroWorstRadio:", heroWorstRadio, worstRadio);