import React from 'react'
import PropTypes from 'prop-types'

import { IconButton, Link, Tooltip } from '@mui/material'
import { GitHub } from '@mui/icons-material'

export default function GitHubLink(props) {
  const { link, ...prop } = props

  return (
    <Link color='inherit' href={link}>
      <Tooltip title={link}>
        <IconButton color='inherit' {...prop}>
          <GitHub />
        </IconButton>
      </Tooltip>
    </Link>
  )
}

GitHubLink.propTypes = {
  link: PropTypes.string.isRequired,
}
