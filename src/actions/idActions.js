export const GET_ID = 'GET POSTS'
export const GET_ID_SUCCESS = 'GET_POST_SUCCESS'
export const GET_ID_FAILURE = 'GET_POST_FAILURE'

export const getId = () => ({ type: GET_ID })
export const getIdSuccess = id => ({
  type: GET_ID_SUCCESS,
  payload: id.value,
})
export const getIdFailure = () => ({ type: GET_ID_FAILURE })

export function fetchId(Id) {
  return async dispatch => {
    dispatch(getId())

    try {
      const response = await fetch(
        `http://api.icndb.com/jokes/${Id}`
      )
      const data = await response.json()

      dispatch(getIdSuccess(data))
    } catch (error) {
      dispatch(getIdFailure())
    }
  }
}
