import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'

import icons from '../../data/icons.json'

export default function Technologies (props) {
  const { openModal } = props

  const hoverAction = {
    cursor: 'pointer'
  }

  const avatars = icons.map((icon) => {
    if(!['Java', 'JavaScript', 'Git', 'Python', 'React'].includes(icon.name)) {
      return <Avatar key={icon.id} alt={`${icon.name}`} src={`${icon.link}`} variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
    } else {
      return
    }
  })

  return(
    <React.Fragment>
      <Typography variant='h4' component='div' align='center' sx={{ mt: 6 }}>
        Technologies
      </Typography>
      <Typography variant='subtitle2' component='div' align='center' sx={{ mb: 2 }}>
        I Have Worked In
      </Typography>
      <Box align='center' alignItems='center' justifyContent='center' onClick={openModal} sx={[{ display: 'flex' }, { '&:hover': hoverAction }]}>
        <AvatarGroup max={6} spacing={1}>
          <Avatar alt="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          {avatars}
        </AvatarGroup>
      </Box>
    </React.Fragment>
  )
}

Technologies.propTypes = {
  openModal: PropTypes.func
}

Technologies.defaultProps = {
  openModal: null
}
