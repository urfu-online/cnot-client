import React from 'react'
import { AppBar, Box, colors, Toolbar, Typography } from '@mui/material'
import { PLATFORM_NAME } from '../../config/constant'

const HeaderBrand = (): JSX.Element => {
  return (
    <AppBar position="relative" elevation={2} sx={{ background: 'white' }}>
      <Toolbar>
        <img src="/images/logo.svg" alt="Логотип УНОЦ" height={40} style={{ marginLeft: 16, marginTop: 6 }} />
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Typography sx={{ color: colors.indigo[500], margin: 2 }}>{PLATFORM_NAME}</Typography>
        </Box>
        <img src="/images/icons.svg" alt="Участники" height={50} />
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBrand
