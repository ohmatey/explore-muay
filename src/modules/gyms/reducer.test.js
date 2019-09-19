import * as actions from './actions'
import gymsReducer, { initialState } from './reducer'

describe('gym reducer', () => {
  it('should handle initial state', () => {
    const reducerState = gymsReducer(undefined, {})

    expect(reducerState).toEqual(initialState)
  })

  it('should add a gym when addGym action is sent', () => {
    const newGym = {
      gymName: 'Backyard Muay Thai',
      gymOwner: 'Bob'
    }
    const newGymAction = actions.addGym(newGym)
    const reducerState = gymsReducer(undefined, newGymAction)

    expect(reducerState).toEqual({
      gyms: [newGym]
    })
  })


})
