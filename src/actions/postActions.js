export const GET_POST = 'GET POSTS'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const getPost = () => ({ type: GET_POST })
export const getPostSuccess = post => ({
  type: GET_POST_SUCCESS,
  payload: post.value,
})
export const getPostFailure = () => ({ type: GET_POST_FAILURE })

export function fetchPost(category) {
  return async dispatch => {
    dispatch(getPost())

    try {
      const response = await fetch(
        `http://api.icndb.com/jokes/?limitTo=[${category}]`
      )
      const data = await response.json()

      dispatch(getPostSuccess(data))
    } catch (error) {
      dispatch(getPostFailure())
    }
  }
}
