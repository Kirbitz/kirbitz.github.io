import React from 'react'

import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material' 

export default function PageHeader (props) {
  return(
    <AppBar sx={{ bgcolor: '#6f49c9' }}>
      <Toolbar>
        <Tooltip title='Open Menu'>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu-button'
            sx={{ mr: 1 }}
          >
            <Menu />
          </IconButton>
        </Tooltip>
        <Typography variant='h3' component='h2'>
          Tyler Marefke Portfolio Website
        </Typography>
      </Toolbar>
    </AppBar>
  )
}