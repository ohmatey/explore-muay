import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Field, Form } from 'react-final-form'
import MaterialTextField from '@material-ui/core/TextField'

import TextField from './TextField'

describe('<TextField />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <TextField name='Name' />
    )
  })

  it('should render with no errors', () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should render a <Field />', () => {
    component.setProps({
      name: 'Gym Name',
      component: <input />
    })

    const fieldElement = component.find(Field)

    expect(fieldElement.length).toEqual(1)
    expect(fieldElement.prop('name')).toEqual('Gym Name')
  })
})
