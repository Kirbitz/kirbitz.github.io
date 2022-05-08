import React from 'react'

import { createTheme, Container, CssBaseline, ThemeProvider } from '@mui/material'

import PageHeader from './components/PageHeader.jsx'
import HomeContent from './components/HomeContent.jsx'
import IconsModal from './components/IconsModal.jsx'

export default function EntryPoint (props) {
  const [showIconsModal, setShowIconsModal] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(false)

  const openIconsModal = () => {
    setShowIconsModal(true)
  }

  const hideModal = () => {
    setShowIconsModal(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Container>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <PageHeader toggleDarkMode={toggleDarkMode} />
        <HomeContent openModal={openIconsModal} />
        <IconsModal showModal={showIconsModal} onClose={hideModal} />
      </ThemeProvider>
    </Container>
  )
}

const themeLight = createTheme({
  palette: {
    mode: 'light'
  }
})

const themeDark = createTheme({
  palette: {
    mode: 'dark'
  }
})