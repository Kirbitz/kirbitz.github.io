import React from 'react'
import PropTypes from 'prop-types'

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from '@mui/material'

import GitHubLink from '../miscParts/GitHubLink.jsx'

import icons from '../../data/icons.json'

export default function ProjectCards(props) {
  const { changePage, project } = props

  let iconData = null

  if (project.technologies) {
    iconData = icons.map((icon) => {
      if (
        project.technologies.find((technology) => {
          return technology === icon.name
        })
      ) {
        return (
          <Tooltip key={icon.id} title={`${icon.name}`}>
            <Avatar
              alt={`${icon.name}`}
              src={`${icon.link}`}
              variant='square'
              sx={{ mr: 2.5, ml: 2.5 }}
            />
          </Tooltip>
        )
      } else {
        return null
      }
    })
  }

  const hoverAction = {
    cursor: 'pointer',
    boxShadow: 10,
  }

  const selectProject = () => {
    if (changePage) {
      changePage(project.id)
    }
  }

  return (
    <Card
      style={{ height: '100%' }}
      sx={[
        { maxWidth: 345, display: 'flex', flexDirection: 'column' },
        { '&:hover': hoverAction },
      ]}
    >
      <CardContent onClick={selectProject}>
        <Box background='none' justifyContent='left' sx={{ display: 'flex' }}>
          <AvatarGroup max={5}>{iconData}</AvatarGroup>
        </Box>
      </CardContent>
      <CardMedia
        onClick={selectProject}
        component='img'
        alt={`Image of ${project.title}`}
        src={`media/projects/${project.image}`}
        height='150px'
      />
      <CardContent onClick={selectProject} sx={{ flexGrow: 1 }}>
        <Typography variant='h6' component='div'>
          {`${project.title}`}
        </Typography>
        <Typography variant='subtitle1' component='div' align='left'>
          {`${project.details}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <GitHubLink link={project.link} />
        </Box>
        <Button size='small' onClick={selectProject}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

ProjectCards.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  changePage: PropTypes.func,
}

ProjectCards.defaultProps = {
  changePage: null,
}
