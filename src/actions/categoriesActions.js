export const GET_CATEGORIES = 'GET CATEGORIES'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE'

export const getCategories = () => ({ type: GET_CATEGORIES })
export const getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: categories.value,
})
export const getCategoriesFailure = () => ({ type: GET_CATEGORIES_FAILURE })

export function fetchCategories() {
  return async dispatch => {
    dispatch(getCategories())

    try {
      const response = await fetch('http://api.icndb.com/categories')
      const data = await response.json()

      dispatch(getCategoriesSuccess(data))
    } catch (error) {
      dispatch(getCategoriesFailure())
    }
  }
}
