import React from 'react'

import TextField from '../../../common/form/TextField'

const AddGymForm = ({
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <TextField name='gymName' />

    <TextField name='gymOwner' />

    <button type='submit'>Submit</button>
  </form>
)

export default AddGymForm
