import * as actions from '../actions/nameActions'

export const initialState = {
  loading: true,
  hasErrors: false,
  name: {},
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_NAME:
      return { ...state, loading: true }
    case actions.GET_NAME_SUCCESS:
      return { name: action.payload, loading: false, hasErrors: false }
    case actions.GET_NAME_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
