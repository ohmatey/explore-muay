import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import MaterialTextField from '@material-ui/core/TextField'

export const TextInput = ({
  input
}) => (
  <MaterialTextField
    name={input.name}
    value={input.value}
    onChange={input.onChange}
  />
)

const TextField = ({
  name
}) => (
  <Field
    name={name}
    component={TextInput}
  />
)

TextField.propTypes = {
  name: PropTypes.string.isRequired
}

export default TextField
