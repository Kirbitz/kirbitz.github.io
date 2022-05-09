import React from 'react'

import { Avatar, Box, CardMedia, Grid, Paper, Typography } from '@mui/material'

import ContactBreadcrumbs from './ContactBreadcrumbs.jsx'

export default function ContactMe (props) {
  return(
    <React.Fragment>
      <Typography variant='h4' component='div' align='center' sx={{ mt: 8, mb: 2 }}>
        Contact Me
      </Typography>
      <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} md={8} lg={4}>
            <Avatar
              alt='Image of Tyler Marefke'
              src='media/TylerAvatar.jpg'
              variant='rounded'
              sx={{ width: 300, height: 300, mb: 1 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={8}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3 }}>
              <Typography align='center' variant='h6' component='div' sx={{ mt: 2 }}>
                Feel Free To Contact Me!
              </Typography>
              <Typography align='center' variant='subtitle2' component='div'>
                Please message me before calling thank you!
              </Typography>
              <ContactBreadcrumbs />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}