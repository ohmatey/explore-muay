import * as Types from './types'
import * as actions from './actions'

describe('gym actions', () => {
  it('addGym should create an ADD_GYM action', () => {
    const newGym = {
      gymName: 'sitmonchai',
      gymOwner: 'John Doe'
    }
    const newAction = actions.addGym(newGym)

    const result = {
      type: Types.ADD_GYM,
      payload: newGym
    }

    expect(newAction).toEqual(result)
  })

  it('deleteGym should create a DELETE_GYM action', () => {
    const gymName = 'sitmonchai'
    const newAction = actions.deleteGym(gymName)

    const result = {
      type: Types.DELETE_GYM,
      payload: gymName
    }

    expect(newAction).toEqual(result)
  })


})
