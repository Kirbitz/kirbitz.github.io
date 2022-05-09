import React from 'react'
import PropTypes from 'prop-types'

import { Menu, MenuItem } from '@mui/material'

export default function HomeMenu (props) {
  const { anchorEl, onClose, openMenu } = props

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return(
    <Menu
      id="Home-Menu"
      open={openMenu}
      anchorEl={anchorEl}
      onClose={handleClose}
    >
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
    </Menu>
  )
}

HomeMenu.propTypes = {
  onClose: PropTypes.func,
  openMenu: PropTypes.bool.isRequired
}

HomeMenu.defaultProps = {
  onClose: null
}
