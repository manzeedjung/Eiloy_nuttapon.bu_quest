import { combineReducers } from 'redux'

import postsReducer from './postsReducer'
import postReducer from './postReducer'
import nameReducer from './nameReducer'
import categoriesReducer from './categoriesReducer'
import idReducer from './idReducer'
const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  categories: categoriesReducer,
  name: nameReducer,
  id: idReducer

})

export default rootReducer
