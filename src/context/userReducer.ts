import { SET_LOADING, SET_USER } from './types'
import { IState } from './UserState'

const handlers = {
  [SET_USER]: (state: IState, action) => ({
    ...state,
    user: action.payload,
    loading: false,
  }),
  [SET_LOADING]: (state) => ({ ...state, loading: true }),

  DEFAULT: (state) => state,
}

export const userReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
