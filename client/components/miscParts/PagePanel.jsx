import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export default function PagePanel (props) {
  const { children, currentPage, index } = props

  return (
    <div
      role='PagePanel'
      hidden={currentPage !== index}
      id={`pagepanel-${index}`}
    >
      {currentPage === index && (
        <Box alignItems='center' sx={{ width: 1 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

PagePanel.propTypes = {
  children: PropTypes.node,
  currentPage: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
}

PagePanel.defaultProps = {
  children: null
}
