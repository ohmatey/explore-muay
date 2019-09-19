import React, { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField
} from '@material-ui/core'

const Product = ({

}) => {
  const [email, setEmail] = useState('')

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(v);
  }

  return (
    <Container maxWidth='lg' style={{ marginTop: 80 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography
            variant='h4'
            component='h1'
            gutterBottom
          >
            Find the perfect gym
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
          >
            Experience the real Muay Thai experience
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <div style={{ width: '100%', height: '400px', background: 'blue' }}>

          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Product
