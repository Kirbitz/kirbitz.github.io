import React from 'react'
import PropTypes from 'prop-types'

import { Divider, Typography } from '@mui/material'

import Projects from './Projects.jsx'
import Technologies from './Technologies.jsx'

export default function HomeContent (props) {
  const { changePage } = props

  return(
    <React.Fragment>
      <Typography align='center' variant='h3' component='div' sx={{ mt: 3 }}>
        Portfolio
      </Typography>
      <Divider />
      <Technologies />
      <Projects changePage={changePage} />
    </React.Fragment>
  )
}

HomeContent.propTypes = {
  changePage: PropTypes.func
}

HomeContent.defaultProps = {
  changePage: null
}
