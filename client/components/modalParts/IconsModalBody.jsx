import React from 'react'

import { Avatar, DialogContent, Grid, Tooltip } from '@mui/material'

import icons from '../../data/icons.json'

export default function IconsModalBody (props) {

  const iconGrid = icons.map((icon) => {
    return( 
      <Grid item key={icon.id} xs={4} sm={3} lg={2}>
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

const lies = [
  {
    id: 1,
    name: "Azure DevOps",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  },
  {
    id: 2,
    name: "Bash",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
  },
  {
    id: 3,
    name: "Bootstrap",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
  },
  {
    id: 4,
    name: "Confluence",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg"
  },
  {
    id: 5,
    name: "C++",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  {
    id: 6,
    name: "C#",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  },
  {
    id: 7,
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    id: 8,
    name: "Docker",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    id: 9,
    name: ".Net Core",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
  },
  {
    id: 10,
    name: "ESLint",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"
  },
  {
    id: 11,
    name: "Express.js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    id: 12,
    name: "Git",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    id: 13,
    name: "GitHub",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    id: 14,
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    id: 15,
    name: "Java",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    id: 16,
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    id: 17,
    name: "Jupyter Notebooks",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
  },
  {
    id: 18,
    name: "Kubernetes",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
  },
  {
    id: 19,
    name: "Linux",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  },
  {
    id: 20,
    name: "MaterialUI",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
  },
  {
    id: 21,
    name: "MySQL",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    id: 22,
    name: "NodeJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    id: 23,
    name: "NPM",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
  },
  {
    id: 24,
    name: "PHP",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  },
  {
    id: 25,
    name: "Python",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    id: 26,
    name: "React",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    id: 27,
    name: "Ubuntu",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
  },
  {
    id: 28,
    name: "Visual Studio",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
  },
  {
    id: 29,
    name: "VSCode",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  },
  {
    id: 30,
    name: "Windows",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
  }
]