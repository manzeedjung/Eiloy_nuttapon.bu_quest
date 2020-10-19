import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../actions/categoriesActions'
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import { connect } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import CategoryIcon from '@material-ui/icons/Category';
import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);
const DashboardPage = ({ dispatch, loading, categories, hasErrors, props }) => {
  const classes = useStyles();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [id, setId] = useState(1);


  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const renderCategories = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>

    return categories.map(categories =>
      <div style={{ margin: 10 }}>
        <Link to={`/posts/${categories}`} className="button">
          {categories}
        </Link>
      </div >
    )
  }
  const FirstnameHandlechange = (e) => {

    setFirstname(e.target.value)
  }
  const LastnameHandlechange = (e) => {

    setLastname(e.target.value)
  }
  const IDHandlechange = (e) => {

    setId(e.target.value)
  }

  return (
    <div >
      <Parallax image={require("assets/img/bg6.jpg")}>
        <div className={classes.container} style={{ color: 'white' }}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title} style={{ color: 'white' }}>Chuck Norris</h1>
                <h3 className={classes.subtitle}>
                  A joke from Chuck Norris.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h1 className={classes.title}>Chuck Norris</h1>
          <h4>
            This part of quest will be a challenging one. You are going to make a simple web application which allow users to get some joke from Chuck Norris himself.
          </h4>
          <div id="inputs" style={{ paddingBottom: '60px' }}>
            <div className={classes.title}>
              <h3>Options Filter</h3>
            </div>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "FirstName/Lastname",
                  tabIcon: Face,
                  tabContent: (
                    <div>
                      <h1 className={classes.title}>FirstName/Lastname</h1>
                      <GridItem xs={12} sm={4} md={4} lg={3}>
                        <CustomInput
                          defaultValue={firstname}
                          labelText="First Name"
                          id="float1"

                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: FirstnameHandlechange,
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={4} md={4} lg={3}>
                        <CustomInput
                          labelText="Last Name"
                          id="float2"

                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: LastnameHandlechange,
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <Button
                        color="primary"
                        size="lg"
                        onClick={() => window.location.assign(`/postsName/${firstname}/${lastname}`)}>
                        Joke
                    </Button>
                    </div>
                  )
                },
                {
                  tabName: "ID",
                  tabIcon: Chat,
                  tabContent: (
                    <div>
                      <h1 className={classes.title}>ID</h1>
                      <GridItem xs={12} sm={4} md={4} lg={3}>
                        <CustomInput
                          labelText="ID"
                          id="float2"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: IDHandlechange,
                            type: "number",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <Button
                        color="primary"
                        size="lg"
                        onClick={() => window.location.assign(`/postsId/${id}`)}>
                        Filter
                  </Button>
                    </div>
                  )
                },
                {
                  tabName: "Category",
                  tabIcon: CategoryIcon,
                  tabContent: (
                    <div>
                      <h1 className={classes.title}>Categories</h1>
                      {renderCategories()}
                      <Button
                        color="primary"
                        size="lg"
                        // href="/posts"
                        onClick={() => window.location.assign('/posts')}
                        target="_blank"
                        rel="noopener noreferrer"
                      >

                        View Joke Random
              </Button>
                    </div>
                  )
                }
              ]}
            />

            {/* <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                defaultValue={firstname}
                labelText="First Name"
                id="float1"

                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: FirstnameHandlechange,
                  type: "text",
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Last Name"
                id="float2"

                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: LastnameHandlechange,
                  type: "text",
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <Button color="primary" size="lg">
              Filter
            </Button> */}
          </div>
          {/* <br />
          <h1 className={classes.title}>Categories</h1>
          {renderCategories()}
          <Button
            color="primary"
            size="lg"
            // href="/posts"
            onClick={() => window.location.assign('/posts')}
            target="_blank"
            rel="noopener noreferrer"
          >

            View Joke Random
              </Button> */}

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
