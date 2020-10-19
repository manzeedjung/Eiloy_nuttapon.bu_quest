import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchName } from '../actions/nameActions'
import { Post } from '../components/Post'
import usePagination from "../components/Pagination";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);
const NamePostPage = ({
  match,
  dispatch,
  name,
  hasErrors,
  loading,
}) => {

  const classes = useStyles();
  const [categoryName, setCategoryName] = useState('')
  useEffect(() => {
    const { firstname, lastname } = match.params
    let fname = firstname + ' ' + lastname
    setCategoryName(fname)

    dispatch(fetchName(firstname, lastname))
  }, [dispatch, match])
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(name.length / PER_PAGE);
  const _DATA = usePagination(name, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };


  if (loading.name) {
    return <p>Loading post...</p>
  } else {
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
            <h1 className={classes.title}>{categoryName}</h1>
            <Pagination
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />

            {_DATA.currentData().map(post => {
              return (
                <Post key={post.id} post={post} excerpt />
              );
            })}
          </div>
        </div>
        {/* {renderPost()} */}
      </section>
    )
  }

}

const mapStateToProps = state => ({
  name: state.name.name,
  loading: { name: state.name.loading },
  hasErrors: { name: state.name.hasErrors },
})

export default connect(mapStateToProps)(NamePostPage)
