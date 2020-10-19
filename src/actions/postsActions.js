export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPosts = () => ({ type: GET_POSTS })
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts.value,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE })

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch('http://api.icndb.com/jokes/random/20')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}
