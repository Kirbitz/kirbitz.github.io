import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Typography } from '@mui/material'

import ProjectCards from './ProjectCards.jsx'
import projects from '../../data/projects.json'

export default function Projects (props) {
  const { changePage } = props

  const projectCards = projects.map((project) => {
    return(
      <Grid key={project.id} item xs={12} sm={6} lg={4}>
        <ProjectCards project={project} changePage={changePage} />
      </Grid>
    )
  })

  return(
    <React.Fragment>
      <Typography variant='h4' component='div' align='center' sx={{ mt: 10, mb: 2 }}>
        Projects
      </Typography>
      <Grid container spacing={2} justifyContent='center' align='center'>
        {projectCards}
      </Grid>
    </React.Fragment>
  )
}

Projects.propTypes = {
  changePage: PropTypes.func
}

Projects.defaultProps = {
  changePage: null
}
