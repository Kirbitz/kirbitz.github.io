import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, Box, Divider, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material' 

import Technologies from './Technologies.jsx'

export default function HomeContent (props) {
  const { openModal } = props

  return(
    <React.Fragment>
      <Typography align='center' variant='h3' component='div' sx={{ mt: 2 }}>
        Portfolio
      </Typography>
      <Divider />
      <Technologies openModal={openModal} />
      <Box sx={{ display: 'flex' }}>
        <Avatar
          alt='Tyler Marefke'
          src='media/TylerAvatar.jpg'
          sx={{ width: 128, height: 128 }}
        />
      </Box>
    </React.Fragment>
  )
}

HomeContent.propTypes = {
  openModal: PropTypes.func
}

HomeContent.defaultProps = {
  openModal: null
}
