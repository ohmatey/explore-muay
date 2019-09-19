import React from 'react'
import { connect } from 'react-redux'

import { addGym } from '../modules/gyms/actions'
import NewGymPage from '../modules/gyms/components/NewGymPage'

const mapDispatchToProps = {
  handleFormSubmit: ({
    gymName,
    gymOwner
  }) => addGym({
    gymName,
    gymOwner
  })
}

export default connect(null, mapDispatchToProps)(NewGymPage)
