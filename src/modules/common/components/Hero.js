import React, { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField
} from '@material-ui/core'

const Hero = ({

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
        <Grid item xs={12} sm={6}>
          <Typography
            variant='h4'
            component='h1'
            gutterBottom
          >
            Take your Muay Thai skills up a notch
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
          >
            Experience the real Muay Thai experience
          </Typography>

          <form onSubmit={handleFormSubmit}>
            <TextField
              type='email'
              value={email}
              label='email'
              fullWidth
              variant='outlined'
              onChange={handleEmailChange}
            />

            <Button
              variant='contained'
              color='primary'
              type='submit'
              size='large'
              style={{ marginTop: 16 }}
            >Show interest</Button>
          </form>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div style={{ width: '100%', height: '400px', background: 'blue' }}>
asdas
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
