import React from 'react'

import { Button, Grid } from '@mui/material'

function ResumeButtons(props) {
  const {} = props

  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center' align='center' sx={{ mt: 0.5, mb: 1 }}>
      <Grid item xs={11} md={5}>
        <Button fullWidth variant='outlined' color='primary' href='/TylerMarefke_Resume.pdf'>View In Browser</Button>
      </Grid>
      <Grid item xs={11} md={5}>
        <a href="TylerMarefke_Resume.pdf" download="TylerMarefke_Resume.pdf" target="_blank">
          <Button fullWidth variant='outlined' color='primary'>Download</Button>
        </a>
      </Grid>
    </Grid>
  )
}

export default ResumeButtons
