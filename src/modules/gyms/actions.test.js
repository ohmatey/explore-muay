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


})
