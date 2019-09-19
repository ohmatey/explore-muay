import * as Types from './types'

export const initialState = {
  gyms: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_GYM:
      return {
        gyms: [
          ...state.gyms,
          action.payload
        ]
      }
    default:

  }
  return state
}
