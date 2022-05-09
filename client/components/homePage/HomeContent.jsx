import React from 'react'
import PropTypes from 'prop-types'

import { Divider, Typography } from '@mui/material'

import Projects from './Projects.jsx'
import Technologies from './Technologies.jsx'
import IconsModal from './IconsModal.jsx'

export default function HomeContent (props) {
  const { changePage } = props

  const [showIconsModal, setShowIconsModal] = React.useState(false)

  const openIconsModal = () => {
    setShowIconsModal(true)
  }

  const hideModal = () => {
    setShowIconsModal(false)
  }

  return(
    <React.Fragment>
      <Typography align='center' variant='h3' component='div' sx={{ mt: 3 }}>
        Portfolio
      </Typography>
      <Divider />
      <Technologies openModal={openIconsModal} />
      <Projects changePage={changePage} />
      <IconsModal showModal={showIconsModal} onClose={hideModal} />
    </React.Fragment>
  )
}

HomeContent.propTypes = {
  changePage: PropTypes.func
}

HomeContent.defaultProps = {
  changePage: null
}
