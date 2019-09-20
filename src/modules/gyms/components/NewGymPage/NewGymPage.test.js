import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import NewGymPage from './NewGymPage'
import AddGym from '../AddGym'

describe('<NewGymPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<NewGymPage />)
  })

  it('should render with no errors', () => {
    const tree = toJson(component)

    expect(tree).toMatchSnapshot()
  })

  it('should render with add gym form', () => {
    expect(component.find(AddGym).length).toEqual(1)

    const mockSubmit = jest.fn()

    component.setProps({
      handleFormSubmit: mockSubmit
    })

    expect(component.find(AddGym).prop('handleFormSubmit')).toEqual(mockSubmit)
  })
})
