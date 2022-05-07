import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'

export default function Technologies (props) {
  const { openModal } = props

  const hoverAction = {
    cursor: 'pointer'
  }

  return(
    <React.Fragment>
      <Typography variant='h5' component='div' align='center' sx={{ m: 2 }}>
        Technologies
      </Typography>
      <Box align='center' alignItems='center' justifyContent='center' onClick={openModal} sx={[{ display: 'flex' }, { '&:hover': hoverAction }]}>
        <AvatarGroup max={6} spacing={1}>
          <Avatar alt="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Azure DevOps" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Bash" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Confluence" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="CPlusPlus" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="CSharp" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="DotNetCore" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="ESLint" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Express.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Jupyter Notebooks" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Kubernetes" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="MaterialUI" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="NodeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="NPM" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="PHP" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Ubuntu" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Visual Studio" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="VSCode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
          <Avatar alt="Windows" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" variant='square' sx={{ mr: 2.5, ml: 2.5 }} />
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
