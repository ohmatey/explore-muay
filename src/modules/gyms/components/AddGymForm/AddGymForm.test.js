import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Form } from 'react-final-form'

import AddGymForm from './AddGymForm'
import TextField from '../../../common/form/TextField'

describe('<AddGymForm />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <AddGymForm />
    )
  })

  it('should render with no errors', () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should render with gymName and gymOwner InputFields', () => {
    const handleSubmit = jest.fn()

    component.setProps({
      handleSubmit
    })

    expect(component.find('form').length).toEqual(1)
    expect(component.find('form').prop('onSubmit')).toEqual(handleSubmit)

    expect(component.find('button').length).toEqual(1)
    expect(component.find(TextField).length).toEqual(2)
  })

  it('should submit the form when submit button is clicked', () => {
    const handleSubmit = jest.fn()

    component.setProps({
      handleSubmit
    })

    component.find('form').simulate('submit')

    expect(handleSubmit).toHaveBeenCalled()
  })
})
