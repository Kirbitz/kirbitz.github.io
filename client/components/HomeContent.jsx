import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, Box, Divider, Typography } from '@mui/material'

import Projects from './Projects.jsx'
import Technologies from './Technologies.jsx'
import ContactMe from './ContactMe.jsx'

export default function HomeContent (props) {
  const { openModal } = props

  return(
    <React.Fragment>
      <Typography align='center' variant='h3' component='div' sx={{ mt: 3 }}>
        Portfolio
      </Typography>
      <Divider />
      <Technologies openModal={openModal} />
      <Projects />
      <ContactMe />
    </React.Fragment>
  )
}

HomeContent.propTypes = {
  openModal: PropTypes.func
}

HomeContent.defaultProps = {
  openModal: null
}
