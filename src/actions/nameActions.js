export const GET_NAME = 'GET POSTS'
export const GET_NAME_SUCCESS = 'GET_POST_SUCCESS'
export const GET_NAME_FAILURE = 'GET_POST_FAILURE'

export const getName = () => ({ type: GET_NAME })
export const getNameSuccess = name => ({
  type: GET_NAME_SUCCESS,
  payload: name.value,
})
export const getNameFailure = () => ({ type: GET_NAME_FAILURE })

export function fetchName(firstName, lastName) {
  return async dispatch => {
    dispatch(getName())

    try {
      const response = await fetch(
        `http://api.icndb.com/jokes/?firstName=${firstName}&lastName=${lastName}`
      )
      const data = await response.json()

      dispatch(getNameSuccess(data))
    } catch (error) {
      dispatch(getNameFailure())
    }
  }
}
