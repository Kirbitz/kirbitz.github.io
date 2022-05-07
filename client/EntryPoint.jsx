import React from 'react'

import { Container, CssBaseline, Avatar } from '@mui/material'

import PageHeader from './components/PageHeader.jsx'
import HomeContent from './components/HomeContent.jsx'
import IconsModal from './components/IconsModal.jsx'

export default function EntryPoint (props) {
  const [showIconsModal, setShowIconsModal] = React.useState(false)

  const openIconsModal = () => {
    setShowIconsModal(true)
  }

  const hideModal = () => {
    setShowIconsModal(false)
  }

  return (
    <Container>
      <CssBaseline />
      <PageHeader />
      <HomeContent openModal={openIconsModal} />
      <IconsModal showModal={showIconsModal} onClose={hideModal} />
    </Container>
  )
}