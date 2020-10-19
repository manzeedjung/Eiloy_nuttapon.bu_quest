import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
const DashboardPage = () => {
  const classes = useStyles();
  return (
    <div >
      <Parallax image={require("assets/img/bg7.jpg")}>
        <div className={classes.container} style={{ color: 'white' }}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title} style={{ color: 'white' }}>Quest</h1>
                <h3 className={classes.subtitle}>
                  Eiloy Job Interview 2020
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

          <h1 className={classes.title}>Quest 1</h1>
          <h4>
            Write a function that shift the elements of array to left or right by n elements in infinity loop. the function recevice 3 parameters, 1st is an array, 2nd the is direction ('left' or 'right'), 3rd is the number of elements will be shifted. For example,
          </h4>
          <textarea style={{ width: '100%', height: '400px' }} >
            {`function shiftArray(arr, position, places) {
    let calshift
    if (position == 'left') {
        calshift = arr.length - places
    }
    else {
        calshift = places
    }

    for (var i = 0; i < calshift; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr);
}
shiftArray(['john', 'jane', 'sarah', 'alex'], 'left', 2)
shiftArray([1, 2, 3, 4, 5], 'right', 3)
`}
          </textarea>
          <br />
          <h1 className={classes.title}>Quest 2</h1>
          <h4>
            Download hero.json and write a code to caculate these values from hero.json
          </h4>
          <h2>2.1 Average networth of all heroes</h2>
          <h4>Output: 49428.57142857143</h4>
          <textarea style={{ width: '100%', height: '400px' }}>
            {`             const hero = require('./hero.json');
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
console.log("Average Networth:", averageNetworth);`}
          </textarea>
          <h2>2.2Average level for hero that has 'intelligent' as primary_attribute</h2>
          <h4>Output: Average Level: 14.333333333333334</h4>
          <textarea style={{ width: '100%', height: '400px' }}>
            {`const hero = require('./hero.json');
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
console.log("Average Level:", averagLevel);`}
          </textarea>
          <h2>2.3 Find the hero who got the most assist</h2>
          <h4>Output: HeroMostAssist: IO</h4>
          <textarea style={{ width: '100%', height: '400px' }}>
            {`const hero = require('./hero.json');
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

console.log("HeroMostAssist:", heroMostAssist);`}
          </textarea>
          <h2>2.4 Find the hero who got the worst kill/death ratio (ratio = kill/death)</h2>
          <h4>Output: HeroWorstRadio: IO 0.25</h4>
          <textarea style={{ width: '100%', height: '400px' }}>
            {`const hero = require('./hero.json');
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

console.log("HeroWorstRadio:", heroWorstRadio, worstRadio);`}
          </textarea>

        </div>
      </div>
    </div >

  )
}
const mapStateToProps = state => ({
  loading: state.categories.loading,
  categories: state.categories.categories,
  hasErrors: state.categories.hasErrors,
})

export default connect(mapStateToProps)(DashboardPage)
// export default DashboardPage
