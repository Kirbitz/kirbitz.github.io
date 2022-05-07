import React from 'react'

import { Container, CssBaseline } from '@mui/material'

import PageHeader from './components/PageHeader.jsx'

export default function EntryPoint (props) {
  return (
    <Container>
      <CssBaseline />
      <PageHeader />
    </Container>
  )
}