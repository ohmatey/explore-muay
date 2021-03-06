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

  it('should delete gym when deleteGym action is sent', () => {
     const initialState = {
      gyms: [{
        gymName: 'Backyard Muay Thai',
        gymOwner: 'Bob'
      },
      {
        gymName: 'sitmonchai',
        gymOwner: 'Bobs'
      }
    ]
    }
    const targetGym = 'sitmonchai'

    const newAction = actions.deleteGym(targetGym)
    const reducerState = gymsReducer(initialState, newAction)

    expect(reducerState).toEqual({
      gyms: [{
        gymName: 'Backyard Muay Thai',
        gymOwner: 'Bob'
      }]
    })
  })
})
