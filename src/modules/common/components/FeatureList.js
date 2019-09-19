import React, { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField
} from '@material-ui/core'

const features = [
  {
    title: 'Learn from the best',
    description: 'asdasd',
    imgUrl: ''
  },
  {
    title: 'Plan ahead',
    description: 'asd',
    imgUrl: ''
  },
  {
    title: 'Make the most of it',
    description: 'asd',
    imgUrl: ''
  }
]

const Item = ({
  title,
  description,
  imgUrl
}) => (
  <Grid container spacing={5}>
    <Grid item lg={2} />

    <Grid item lg={2}>
      asd
    </Grid>

    <Grid item lg={6}>
      <Typography
        variant='h5'
        component='h1'
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        variant='h6'
        component='h2'
        gutterBottom
      >
        {description}
      </Typography>
    </Grid>

    <Grid item lg={2} />
  </Grid>
)

const FeatureList = ({

}) => {
  return (
    <Container maxWidth='sm' style={{ marginTop: 80 }}>
      <Grid container spacing={5}>
        {features.map((feature, i) => (
          <Item key={i} {...feature} />
        ))}
      </Grid>
    </Container>
  )
}

export default FeatureList
