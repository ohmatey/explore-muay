import React from 'react'
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          {process.env.SITE_TITLE || 'Muay Explore'}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
