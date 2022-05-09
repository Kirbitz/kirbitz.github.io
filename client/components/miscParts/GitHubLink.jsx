import React from 'react'

import { IconButton, Link, Tooltip } from '@mui/material'
import { GitHub } from '@mui/icons-material'

export default function GitHubLink (props) {
  return (
    <Link color='inherit' href='https://github.com/Kirbitz'>
      <Tooltip title='https://github.com/Kirbitz'>
        <IconButton color='inherit'>
          <GitHub />
        </IconButton>
      </Tooltip>
    </Link>
  )
}