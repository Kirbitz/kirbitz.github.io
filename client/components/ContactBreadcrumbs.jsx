import React from 'react'

import { Box, Breadcrumbs, IconButton, Link, Tooltip, Typography } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'

export default function ContactBreadcrumbs (props) {
  return(
    <Breadcrumbs sx={{ display: 'flex', mr: 'auto', ml: 'auto' }}>
      <Box sx={{ display: 'flex' }}>
        <Link color='inherit' href='https://www.linkedin.com/in/tyler-marefke-61444b201/'>
          <Tooltip title='https://www.linkedin.com/in/tyler-marefke-61444b201/'>
            <IconButton color='inherit'>
              <LinkedIn />
            </IconButton>
          </Tooltip>
        </Link>
        <Link color='inherit' href='https://github.com/Kirbitz'>
          <Tooltip title='https://github.com/Kirbitz'>
            <IconButton color='inherit'>
              <GitHub />
            </IconButton>
          </Tooltip>
        </Link>
      </Box>
      <Typography variant='subtitle2' component='div'>tyler.marefke@gmail.com</Typography>
      <Typography variant='subtitle2' component='div'>715-928-1501</Typography>
    </Breadcrumbs>
  )
}
