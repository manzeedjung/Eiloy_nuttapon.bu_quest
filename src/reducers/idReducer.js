import * as actions from '../actions/idActions'

export const initialState = {
  loading: true,
  hasErrors: false,
  id: {},
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ID:
      return { ...state, loading: true }
    case actions.GET_ID_SUCCESS:
      return { id: action.payload, loading: false, hasErrors: false }
    case actions.GET_ID_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
