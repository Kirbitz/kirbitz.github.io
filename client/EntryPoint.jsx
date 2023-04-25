import React from 'react'

import {
  createTheme,
  Container,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'

import PageHeader from './components/PageHeader.jsx'
import HomeContent from './components/homePage/HomeContent.jsx'
import ProjectContent from './components/projectPage/ProjectContent.jsx'
import ContactMe from './components/ContactMe.jsx'
import PagePanel from './components/miscParts/PagePanel.jsx'

import projects from './data/projects.json'

export default function EntryPoint() {
  const [pageIndex, setPageIndex] = React.useState(0)
  const [darkMode, setDarkMode] = React.useState(false)

  const changeIndex = (newIndex) => {
    if (newIndex !== pageIndex) {
      setPageIndex(newIndex)
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const projectPages = projects.map((project) => {
    return (
      <PagePanel key={project.id} index={project.id} currentPage={pageIndex}>
        <ProjectContent changePage={changeIndex} project={project} />
      </PagePanel>
    )
  })

  return (
    <Container>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <PageHeader toggleDarkMode={toggleDarkMode} />
        <PagePanel index={0} currentPage={pageIndex}>
          <HomeContent changePage={changeIndex} />
        </PagePanel>
        {projectPages}
        <ContactMe />
      </ThemeProvider>
    </Container>
  )
}

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
})

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
})
