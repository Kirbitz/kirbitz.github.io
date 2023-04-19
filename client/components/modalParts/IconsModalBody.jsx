import React from 'react'

import { Avatar, DialogContent, Grid, Tooltip } from '@mui/material'

import icons from '../../data/icons.json'

export default function IconsModalBody (props) {

  const iconGrid = icons.map((icon, index) => {
    return( 
      <Grid item key={index} xs={4} sm={3} lg={2}>
        <Tooltip title={`${icon.name}`}>
          <Avatar alt={`${icon.name}`} src={`${icon.link}`} variant="square" sx={{ mt: 1, mb: 1 }} />
        </Tooltip>
      </Grid>
    )
  })

  return(
    <DialogContent>
      <Grid container spacing={2} justifyContent='center' alignItems='center' align='center'>
        {iconGrid}
      </Grid>
    </DialogContent>
  )
}