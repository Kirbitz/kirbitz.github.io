import React from 'react'
import PropTypes from 'prop-types'

import { Button, Dialog, DialogTitle, DialogActions, Typography } from '@mui/material'

import IconsModalBody from './modalParts/IconsModalBody.jsx'

export default function IconsModal (props) {
  const { showModal, onClose } = props

  const hideModal = () => {
    if(onClose) {
      onClose()
    }
  }

  return(
    <Dialog fullWidth open={showModal} onClose={hideModal} maxWidth='xs'>
      <DialogTitle align='center'>
        <Typography variant='h4' component='div'>
          Technology Details
        </Typography>
        <Typography variant='subtitle2' component='div'>
          Hover Over Icons for more Info
        </Typography>
      </DialogTitle>
      <IconsModalBody />
      <DialogActions sx={{ justifyContent: 'space-between' }}>
        <Typography variant='subtitle2' component='div' sx={{ ml: 2 }}>
          Icons provided through devicon.dev
        </Typography>
        <Button variant='outlined' color='secondary' onClick={hideModal} sx={{ mr: 2 }}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

IconsModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func
}

IconsModal.defaultProps = {
  onClose: null
}
