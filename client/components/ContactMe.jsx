import React from 'react'

import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'

import ContactBreadcrumbs from './ContactBreadcrumbs.jsx'
import ResumeButtons from './miscParts/ResumeButtons.jsx'

export default function ContactMe() {
  return (
    <React.Fragment>
      <Typography
        variant='h4'
        component='div'
        align='center'
        sx={{ mt: 8, mb: 2 }}
      >
        Contact Me
      </Typography>
      <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Avatar
              alt='Image of Tyler Marefke'
              src='media/TylerAvatar.jpg'
              sx={{ width: '75%', height: '100%', mb: 1 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 3,
              }}
            >
              <Typography
                align='center'
                variant='h6'
                component='div'
                sx={{ mt: 4 }}
              >
                Feel Free To Contact Me!
              </Typography>
              <Typography align='center' variant='subtitle2' component='div'>
                Please message me before calling thank you!
              </Typography>
              <ContactBreadcrumbs />
              <Typography
                align='center'
                variant='h6'
                component='div'
                sx={{ mt: 4 }}
              >
                Take A Look At My Resume!
              </Typography>
              <ResumeButtons />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}
