import React from 'react'

import { Avatar, Grid, Tooltip, Typography } from '@mui/material'

import icons from '../../data/icons.json'

export default function Technologies() {
  const iconGrid = icons.map((icon) => {
    return (
      <Grid item key={icon.id} xs={3} sm={2} lg={1}>
        <Tooltip title={`${icon.name}`}>
          <Avatar
            alt={`${icon.name}`}
            src={`${icon.link}`}
            variant='square'
            sx={{ mt: 1, mb: 1 }}
          />
        </Tooltip>
      </Grid>
    )
  })

  return (
    <React.Fragment>
      <Typography variant='h4' component='div' align='center' sx={{ mt: 6 }}>
        Technologies
      </Typography>
      <Typography
        variant='subtitle2'
        component='div'
        align='center'
        sx={{ mb: 2 }}
      >
        I Have Worked In
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        align='center'
      >
        {iconGrid}
      </Grid>
      <Typography
        variant='body2'
        component='div'
        align='center'
        sx={{ mt: 2, mb: 2 }}
      >
        Icons Provided by devicon.dev and vscode-icons
      </Typography>
    </React.Fragment>
  )
}
