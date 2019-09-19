import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Form } from 'react-final-form'

import AddGym from './AddGym'
import AddGymForm from '../AddGymForm'

describe('<AddGym />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <AddGym
        handleFormSubmit={jest.fn()}
      />
    )
  })

  it('should render with no errors', () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should render Form', () => {
    const mockHandleSubmit = jest.fn()

    component.setProps({
      handleFormSubmit: mockHandleSubmit
    })

    const form = component.find(Form)

    expect(form.prop('onSubmit')).toEqual(mockHandleSubmit)
    expect(form.prop('component')).toEqual(AddGymForm)
  })
})
