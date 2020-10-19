import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'

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

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const classes = useStyles();
  const count = Math.ceil(posts.length / PER_PAGE);
  const _DATA = usePagination(posts, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])



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
          <h1 className={classes.title}>Random Joke</h1>
          {_DATA.currentData().map(post => {
            return (
              <Post key={post.id} post={post} excerpt />
            );
          })}
          <br />
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      </div>




      {/* {currentPosts.map(post => (
        <Post key={post.id} post={post} excerpt />
      ))} */}
      {/* {renderPosts(currentPosts)} */}
    </section >
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)
