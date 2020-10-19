import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import DashboardPage from './pages/DashboardPage'
import QuestPage from './pages/QuestPage'
import QuestionsPage from './pages/QuestionsPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'
import NamePostPage from './pages/NamePostPage'
import IdPostPage from './pages/IdPostPage'
const App = (props) => {
  const { ...rest } = props;
  return (
    <Router>
      <Header
        brand="Chuck Norris"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/quest" component={QuestPage} />
        <Route exact path="/questions" component={QuestionsPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/posts/:category" component={SinglePostPage} />
        <Route exact path="/postsId/:id" component={IdPostPage} />
        <Route exact path="/postsName/:firstname/:lastname" component={NamePostPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
