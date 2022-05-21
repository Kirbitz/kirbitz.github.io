import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, CardMedia, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

import icons from '../../data/icons.json'

export default function HomeContent (props) {
  const { changePage, project } = props

  const changeToHome = () => {
    if (changePage) {
      changePage(0)
    }
  }

  let iconData = null

  if(project.technologies) {
    iconData = icons.map(icon => {
      if(project.technologies.find((technology => { return technology === icon.name}))) {
        return(
          <Grid item key={icon.id} xs={4} sm={3} md={2}>
            <Tooltip title={`${icon.name}`}>
              <Avatar alt={`${icon.name}`} src={`${icon.link}`} variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
            </Tooltip>
          </Grid>
        )
      } else {
        return
      }
    })
  }

  return(
    <React.Fragment>
      <Tooltip title='Back to Home'>
        <IconButton align='left' color='inherit' onClick={changeToHome} sx={{ mt: 3 }}>
          <ArrowBack />
        </IconButton>
      </Tooltip>
      <Typography align='center' variant='h3' component='div' sx={{ mt: 1 }}>
        {`${project.title}`}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <CardMedia
            component='img'
            alt={`Image of ${project.title}`}
            image={`media/projects/${project.image}`}
            width='100%'
            sx={{ borderRadius: '10px' }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography align='center' variant='h5' component='div' sx={{ mb: 2 }}>
            Technologies Used
          </Typography>
          <Grid container justifyContent='center' alignItems='center' align='center'>
            {iconData}
          </Grid>
          <Typography align='center' variant='h5' component='div' sx={{ mt: 4, mb: 2 }}>
            Project Details
          </Typography>
          <Typography align='center' variant='body2' component='div' sx={{ mb: 2 }}>
            {`${project.details}`}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

HomeContent.propTypes = {
  changePage: PropTypes.func,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
}

HomeContent.defaultProps = {
  changePage: null
}
