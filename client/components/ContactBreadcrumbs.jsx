import React from 'react'

import { Box, Breadcrumbs, Typography } from '@mui/material'

import GitHubLink from './miscParts/GitHubLink.jsx'
import LinkedInLink from './miscParts/LinkedInLink.jsx'

export default function ContactBreadcrumbs (props) {
  return(
    <Breadcrumbs sx={{ display: 'flex', mr: 'auto', ml: 'auto' }}>
      <Box sx={{ display: 'flex' }}>
        <LinkedInLink />
        <GitHubLink />
      </Box>
      <Typography variant='subtitle2' component='div'>tyler.marefke@gmail.com</Typography>
      <Typography variant='subtitle2' component='div'>715-928-1501</Typography>
    </Breadcrumbs>
  )
}
