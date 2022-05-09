import React from 'react'

import { IconButton, Link, Tooltip } from '@mui/material'
import { LinkedIn } from '@mui/icons-material'

export default function LinkedInLink (props) {
  return (
    <Link color='inherit' href='https://www.linkedin.com/in/tyler-marefke/'>
      <Tooltip title='https://www.linkedin.com/in/tyler-marefke/'>
        <IconButton color='inherit'>
          <LinkedIn />
        </IconButton>
      </Tooltip>
    </Link>
  )
}