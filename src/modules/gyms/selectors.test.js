import * as selectors from './selectors'

describe('gym selectors', () => {
  it('should get all gyms', () => {
    const state = {
      gyms: [{
        gymName: 'Bobs Muay Thai',
        gymOwner: 'Bob'
      }]
    }

    expect(selectors.allGyms(state)).toEqual(state.gyms)
  })
})
