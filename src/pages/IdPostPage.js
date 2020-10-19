import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchId } from '../actions/idActions'
import { Post } from '../components/Post'

import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);
const IdPostPage = ({
  match,
  dispatch,
  id,
  hasErrors,
  loading,
}) => {

  const classes = useStyles();
  const [categoryName, setCategoryName] = useState('')
  useEffect(() => {
    const { id } = match.params
    setCategoryName(id)

    dispatch(fetchId(id))
  }, [dispatch, match])


  const renderPost = () => {
    if (loading.id) return <p>Loading post...</p>
    if (hasErrors.id) {
      return <p>Unable to display post.</p>
    }
    if (id.id) {
      return <Post key={id.id} post={id} excerpt />
    }
    else {
      return <p>{id}</p>
    }



  }
  if (loading.id) {
    return <p>Loading post...</p>
  }
  else {
    return (
      <section>
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
            <h1 className={classes.title}>ID :{categoryName}</h1>
            {/* <Pagination
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            /> */}
            {renderPost()}
            {/* {_DATA.currentData().map(post => {
              return (
                <Post key={post.id} post={post} excerpt />
              );
            })} */}
          </div>
        </div>

      </section>
    )
  }

}

const mapStateToProps = state => ({
  id: state.id.id,
  loading: { id: state.id.loading },
  hasErrors: { id: state.id.hasErrors },
})

export default connect(mapStateToProps)(IdPostPage)
