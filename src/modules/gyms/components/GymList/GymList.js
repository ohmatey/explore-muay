import React from 'react'

import GymCard from '../GymCard'

const GymList = ({
  gyms = []
}) => (
  <div>
    {gyms.map(gym => (
      <GymCard
        key={gym.title}
        title={gym.title}
        subtitle={gym.subtitle}
      />
    ))}
  </div>
)

export default GymList
