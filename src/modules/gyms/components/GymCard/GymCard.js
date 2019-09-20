import React from 'react'
import propTypes from 'prop-types'

const GymCard = ({
  title,
  subtitle,
  handleClick
}) => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>

    <button onClick={handleClick}>Go</button>
  </div>
)

GymCard.propTypes = {
  title: propTypes.string
}

export default GymCard
