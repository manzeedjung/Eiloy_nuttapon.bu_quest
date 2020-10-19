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
                <h1 className={classes.title} style={{ color: 'white' }}>Questions</h1>
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

          <h1 className={classes.title}>Questions 1</h1>
          <h4>
            <b>What do you do if the tester found a bug on your application on Saturday?</b>
          </h4>
          <h5>Answer :
          I have to check first if bug is serious or not.

          <br />If bug serious I will fix it now.

          If not serious, and I'm not comfortable. Will fix on working days

          Because I have to give time to my girlfriend
          </h5>

          <h1 className={classes.title}>Questions 2</h1>
          <h4>
            <b>  Do you think working with Thai people will be difficult to communicate?</b>
          </h4>
          <h5>Answer :
          I think there is no proble.

          I am easy going.
          I can get along with anybody.
          </h5>

          <h1 className={classes.title}>Questions 1</h1>
          <h4><b>
            What do you expect to get from work at Eiloy?</b>
          </h4>
          <h5>Answer :
          I would like to have a good job which brings a stable income, have security, a family and be able to do some good things that people can remember me by.
          </h5>


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
