import * as Types from './types'

export const addGym = ({
  gymName,
  gymOwner
}) => ({
  type: Types.ADD_GYM,
  payload: {
    gymName,
    gymOwner
  }
})
