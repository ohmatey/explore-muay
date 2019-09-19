import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

import AddGymForm from '../AddGymForm'

const AddGym = ({
  handleFormSubmit
}) => (
  <div>
    <Form
      onSubmit={handleFormSubmit}
      component={AddGymForm}
    />
  </div>
)

AddGym.propsTypes = {
  handleFormSubmit: PropTypes.func.isRequired
}

export default AddGym
